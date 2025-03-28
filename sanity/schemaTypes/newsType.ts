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
      options: { source: "title", maxLength: 96 },
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
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publikasi",
      type: "datetime",
    }),
  ],
});
