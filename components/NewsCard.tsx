import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { News } from "@/sanity/types";
import { format } from "date-fns";

export type NewsTypeCard = News;

export function NewsCard({ article }: { article: NewsTypeCard }) {
  const { image, _createdAt, content, slug, title } = article;

  const imageName = image?.asset?._ref;

  const sanityImage = "https://cdn.sanity.io/images/xecjp1g8/production/";
  const url = `${sanityImage}+${imageName}`;

  // Pastikan image adalah string URL
  const imageUrl =
    typeof image === "string" ? image : url || "/default-placeholder.png";

  // Format tanggal dengan fallback
  const formattedDate = _createdAt
    ? format(new Date(_createdAt), "dd MMMM yyyy")
    : "Tanggal tidak tersedia";

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title || "Judul tidak tersedia"}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-2">
          {formattedDate}
        </div>
        <h3 className="text-lg font-bold text-[#003366] mb-2 line-clamp-2">
          {title ?? "Judul tidak tersedia"}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {content ?? "Deskripsi tidak tersedia"}
        </p>
        <Link
          href={`/berita/${slug?.current || "#"}`}
          className="text-[#F57C00] font-medium hover:underline"
        >
          Baca Selengkapnya
        </Link>
      </CardContent>
    </Card>
  );
}
