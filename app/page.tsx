import { client } from "@/sanity/lib/client";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import LatestNews from "@/components/LatestNews";

const fetchNews = async () => {
  const options = { next: { revalidate: 60 } };
  try {
    const news = await client.fetch(NEWS_QUERY, {}, options);
    return news.slice(0, 3); // Ambil hanya 3 berita terbaru
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};


export default async function Home() {
  const news = await fetchNews();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Quick Access Section */}
      <QuickAccess />
      {/* Latest News Section */}
      <LatestNews news={news} />
    </main>
  );
}
