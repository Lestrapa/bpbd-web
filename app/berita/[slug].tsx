'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface Berita {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  thumbnail: string;
  content: string;
}

export default function DetailBerita() {
  const { slug } = useParams();
  const [berita, setBerita] = useState<Berita | null>(null);
  const [relatedNews, setRelatedNews] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBerita() {
      const response = await fetch(`/api/berita/${slug}`);
      const data = await response.json();
      setBerita(data);
      setLoading(false);
    }

    async function fetchRelatedNews() {
      const response = await fetch('/api/berita');
      const data = await response.json();
      setRelatedNews(data.filter((item: Berita) => item.slug !== slug).slice(0, 3));
    }

    if (slug) {
      fetchBerita();
      fetchRelatedNews();
    }
  }, [slug]);

  if (loading) {
    return <p className="text-center text-gray-600">Memuat berita...</p>;
  }

  if (!berita) {
    return <p className="text-center text-red-600">Berita tidak ditemukan.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <nav className="mb-4">
        <Link href="/berita" className="text-[#F57C00] hover:underline">← Kembali ke Berita</Link>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">{berita.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{format(new Date(berita.publishedAt), 'dd MMM yyyy', { locale: id })}</p>
        <Image src={berita.thumbnail} alt={berita.title} width={800} height={400} className="rounded-lg mb-6" />
        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: berita.content }} />
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#003366] mb-4">Berita Terkait</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedNews.map((item) => (
            <Link key={item._id} href={`/berita/${item.slug}`}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{format(new Date(item.publishedAt), 'dd MMM yyyy', { locale: id })}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
