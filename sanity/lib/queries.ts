import { defineQuery } from "next-sanity";

// Query untuk mendapatkan semua berita
export const NEWS_QUERY =
  defineQuery(`*[_type == "news" && defined(slug.current)] | order(_createdAt desc) {
    _id, title, slug, "image": image.asset->url, content, _createdAt
  }`);

// Query untuk mendapatkan detail berita berdasarkan slug
export const NEWS_DETAIL_QUERY =
  defineQuery(`*[_type == "news" && slug.current == $slug][0]{
  title, body, mainImage, publishedAt, author->{name}
}`);

// Query untuk mendapatkan panduan siaga bencana
export const DISASTER_GUIDE_QUERY =
  defineQuery(`*[_type == "disasterGuide" && defined(slug.current)]{
  _id, title, slug, category, icon, body
}`);

// Query untuk mendapatkan detail panduan siaga bencana berdasarkan slug
export const DISASTER_GUIDE_DETAIL_QUERY =
  defineQuery(`*[_type == "disasterGuide" && slug.current == $slug][0]{
  title, category, icon, body
}`);

// Query untuk mendapatkan layanan darurat dengan kategori
export const EMERGENCY_SERVICES_QUERY =
  defineQuery(`*[_type == "emergencyService"]{
  _id, name, category, contact, location
}`);

// Query untuk mendapatkan laporan bencana terbaru
export const DISASTER_REPORTS_QUERY =
  defineQuery(`*[_type == "disasterReport"] | order(reportedAt desc)[0...12]{
  _id, disasterType, location, reportedAt, status, images
}`);

// Query untuk mendapatkan detail laporan bencana berdasarkan ID
export const DISASTER_REPORT_DETAIL_QUERY =
  defineQuery(`*[_type == "disasterReport" && _id == $id][0]{
  disasterType, location, reportedAt, status, description, images
}`);
