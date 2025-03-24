'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/informasi-bencana', label: 'Informasi Bencana' },
  { href: '/siaga', label: 'Siaga Bencana' },
  { href: '/berita', label: 'Berita' },
  { href: '/kontak', label: 'Kontak' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#003366] text-white shadow-md w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="BPBD Barito Utara"
              width={50}
              height={50}
              className="cursor-pointer object-contain"
            />
            <div>
              <h1 className="text-lg font-bold">BPBD Barito Utara</h1>
              <p className="text-sm">Sigap dan Tanggap Bencana</p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 border-b-2 border-transparent hover:border-[#fe0000] transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/hubungi-bpbd">
            <Button className="cursor-pointer bg-[#F57C00] px-4 py-2 rounded-lg text-white font-semibold hover:bg-orange-600 transition-colors duration-300">
              Hubungi BPBD
            </Button>
          </Link>
        </div>

        <Button className="md:hidden bg-[#F57C00] hover:bg-orange-600 transition-colors duration-300" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121150] overflow-hidden"
          >
            <motion.div className="p-4 space-y-4">
              {NAV_LINKS.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link href={link.href} className="block hover:text-gray-300 py-2 border-b border-[#2a2a7a] transition-colors duration-300" onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: NAV_LINKS.length * 0.05 }} className="pt-4">
                <Link href="/hubungi-bpbd" className="block bg-[#F57C00] text-white text-center p-3 rounded-lg hover:bg-orange-600 transition-colors duration-300" onClick={toggleMenu}>
                  Hubungi BPBD
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
