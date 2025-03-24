import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Map, BookOpen, Phone } from "lucide-react"

interface QuickAccessCardProps {
  icon: string
  title: string
  description: string
  href: string
}

export function QuickAccessCard({ icon, title, description, href }: QuickAccessCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cloud":
        return <Cloud className="h-10 w-10 text-[#F57C00]" />
      case "map":
        return <Map className="h-10 w-10 text-[#F57C00]" />
      case "book":
        return <BookOpen className="h-10 w-10 text-[#F57C00]" />
      case "phone":
        return <Phone className="h-10 w-10 text-[#F57C00]" />
      default:
        return <Cloud className="h-10 w-10 text-[#F57C00]" />
    }
  }

  return (
    <Link href={href}>
      <Card className="h-full transition-all hover:shadow-md hover:border-[#F57C00]">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-4">{getIcon(icon)}</div>
          <h3 className="text-lg font-bold text-[#003366] mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

