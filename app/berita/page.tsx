'use client';

import { useEffect, useState } from 'react';
import { NewsCard } from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Berita {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  thumbnail: string;
  excerpt: string;
}

export default function BeritaPage() {
  const [news, setNews] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('/api/berita');
      const data = await response.json();
      setNews(data);
      setLoading(false);
    }

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Memuat berita...</p>;
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#003366] mb-8 text-center">Berita Terbaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard
            key={item._id}
            image={item.thumbnail}
            title={item.title}
            date={new Date(item.publishedAt).toLocaleDateString('id-ID', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
            excerpt={item.excerpt}
            href={`/berita/${item.slug}`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/">
          <Button variant="outline" className="border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00] hover:text-white">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </main>
  );
}
