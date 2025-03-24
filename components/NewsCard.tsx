import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  image: string
  title: string
  date: string
  excerpt: string
  href: string
}

export function NewsCard({ image, title, date, excerpt, href }: NewsCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <h3 className="text-lg font-bold text-[#003366] mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link href={href} className="text-[#F57C00] font-medium hover:underline">
          Baca Selengkapnya
        </Link>
      </CardContent>
    </Card>
  )
}

