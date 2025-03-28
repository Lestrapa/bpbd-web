import { defineType, defineField } from "sanity";

export const newsType = defineType({
  name: "news",
  title: "Berita",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      title: "Gambar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Konten",
      type: "text",
    }),
  ],
});
