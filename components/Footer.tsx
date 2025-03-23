import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-[#003366] text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Contact Information */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Kontak Kami</h3>
            <div className='space-y-3'>
              <div className='flex items-start'>
                <MapPin className='h-5 w-5 mr-2 mt-1 text-[#F57C00]' />
                <p>
                  Jl. Ahmad Yani, Lanjas, Kec. Teweh Tengah, Kabupaten Barito Utara, Kalimantan
                  Tengah 73814
                </p>
              </div>
              <div className='flex items-center'>
                <Phone className='h-5 w-5 mr-2 text-[#F57C00]' />
                <p>085189384429</p>
              </div>
              <div className='flex items-center'>
                <Mail className='h-5 w-5 mr-2 text-[#F57C00]' />
                <p>info@bpbd.baritoutara.go.id</p>
              </div>
            </div>

            <h3 className='text-xl font-bold mt-6 mb-4'>Ikuti Kami</h3>
            <div className='flex space-x-4'>
              <Link
                href='https://www.instagram.com/bpbdbarut'
                className='hover:text-[#F57C00] transition-colors'
              >
                <Instagram className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='https://web.facebook.com/p/BPBD-Barito-Utara-100070807464122/?_rdc=1&_rdr#'
                className='hover:text-[#F57C00] transition-colors'
              >
                <Facebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Tautan Cepat</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/tentang' className='hover:text-[#F57C00] transition-colors'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href='/informasi' className='hover:text-[#F57C00] transition-colors'>
                  Informasi Bencana
                </Link>
              </li>
              <li>
                <Link href='/siaga' className='hover:text-[#F57C00] transition-colors'>
                  Siaga Bencana
                </Link>
              </li>
              <li>
                <Link href='/berita' className='hover:text-[#F57C00] transition-colors'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='/kontak' className='hover:text-[#F57C00] transition-colors'>
                  Kontak
                </Link>
              </li>
              <li>
                <Link href='/faq' className='hover:text-[#F57C00] transition-colors'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Location Map */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Lokasi Kantor</h3>
            <div className='h-[200px] bg-gray-200 rounded-lg overflow-hidden'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.32929232530677!2d114.8976551582428!3d-0.9510568136438029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1742726554936!5m2!1sen!2sid"
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Lokasi Kantor BPBD Kabupaten Barito Utara'
              ></iframe>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-600 mt-8 pt-8 text-center'>
          <p>
            &copy; {new Date().getFullYear()} BPBD Kabupaten Barito Utara. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
