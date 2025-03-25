import { NewsCard } from '@/components/NewsCard'
import { QuickAccessCard } from '@/components/QuickAccessCard'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen"> 
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/bpbd-hero.jpg"
          alt="hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Selamat Datang di BPBD Kabupaten Barito Utara
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">Siap Siaga, Tanggap Bencana</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
              Laporkan Bencana
            </Button>
            <Button size="lg" variant="outline" className="bg-[#003366] hover:bg-[#002244] hover:text-[#F57C00] text-white cursor-pointer border-white">
              Lihat Informasi Terkini
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8 text-center">Akses Cepat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickAccessCard
              icon="cloud"
              title="Prakiraan Cuaca"
              description="Informasi cuaca terkini untuk Kabupaten Barito Utara"
              href="/cuaca"
            />
            <QuickAccessCard
              icon="map"
              title="Peta Risiko Bencana"
              description="Lihat area rawan bencana di Kabupaten Barito Utara"
              href="/peta-risiko"
            />
            <QuickAccessCard
              icon="book"
              title="Panduan Siaga Bencana"
              description="Panduan lengkap menghadapi berbagai jenis bencana"
              href="/panduan"
            />
            <QuickAccessCard
              icon="phone"
              title="Layanan Darurat"
              description="Nomor telepon penting untuk situasi darurat"
              href="/darurat"
            />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8 text-center">Informasi Terkini</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard
              image="/news/news1.jpg"
              title="BPBD Barito Utara Bagikan Parcel Lebaran untuk Anggotanya"
              date="22 Maret 2025"
              excerpt="Dalam rangka menyambut Hari Raya Idul Fitri 1446 H, BPBD Kabupaten Barito Utara mengadakan kegiatan pembagian parcel..."
              href="/berita/parcel-lebaran-bpbd-barito-utara-1446h"
            />
            <NewsCard
              image="/news/news2.jpg"
              title="BPBD Barito Utara Ikuti Gelar Pasukan Operasi Ketupat Telabang 2025"
              date="20 Maret 2025"
              excerpt="Anggota BPBD Kabupaten Barito Utara turut serta dalam Gelar Pasukan Operasi Ketupat Telabang Tahun Anggaran 2025..."
              href="/berita/operasi-ketupat-2025-bpbd-barito-utara"
            />
            <NewsCard
              image="/news/news3.jpg"
              title="BPBD dan Tim Gabungan Berhasil Padamkan Kebakaran Truk Box di Gudang Wings"
              date="19 Maret 2025"
              excerpt="Kebakaran melanda satu unit truk box milik PT. Wings di Gudang Wings, Jl. Negara Km. 7, Kabupaten Barito Utara..."
              href="/berita/kebakaran-truk-gudang-wings-barito-utara"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/berita">
              <Button variant="outline" className="border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00] hover:text-white" aria-label="Lihat semua berita">
                Lihat Semua Berita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
