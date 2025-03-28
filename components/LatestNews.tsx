import React from "react";
import { NewsCard, NewsTypeCard } from "./NewsCard";
import Link from "next/link";
import { Button } from "./ui/button";

const LatestNews = ({ news }: { news: any }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8">
          Informasi Terkini
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.length > 0 ? (
            news.map((article: NewsTypeCard) => (
              <NewsCard key={article._id} article={article} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">
              Tidak ada berita tersedia saat ini.
            </p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/berita">
            <Button
              variant="outline"
              className="border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00] hover:text-white cursor-pointer"
            >
              Lihat Semua Berita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
