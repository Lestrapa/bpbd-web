import { Button } from "@/components/ui/button"
import Image from 'next/image'

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
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Laporkan Bencana
            </Button>
            <Button size="lg" variant="outline" className="bg-[#003366] hover:bg-[#002244] text-white border-white">
              Lihat Informasi Terkini
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
