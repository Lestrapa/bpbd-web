import React from "react";
import { QuickAccessCard } from "./QuickAccessCard";

const quickAccessItems = [
    {
      icon: "cloud",
      title: "Prakiraan Cuaca",
      description: "Informasi cuaca terkini untuk Kabupaten Barito Utara",
      href: "/cuaca",
    },
    {
      icon: "map",
      title: "Peta Risiko Bencana",
      description: "Lihat area rawan bencana di Kabupaten Barito Utara",
      href: "/peta-risiko",
    },
    {
      icon: "book",
      title: "Panduan Siaga Bencana",
      description: "Panduan lengkap menghadapi berbagai jenis bencana",
      href: "/panduan",
    },
    {
      icon: "phone",
      title: "Layanan Darurat",
      description: "Nomor telepon penting untuk situasi darurat",
      href: "/darurat",
    },
  ];

const QuickAccess = () => {
  return (
    <section className="py-12 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8">
          Akses Cepat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccessItems.map((item) => (
            <QuickAccessCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
