"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-emerald-900/20 blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-72 h-72 rounded-full bg-lime-900/20 blur-3xl"></div>
      <div className="h-1.5 w-full bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-600" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-auto h-auto">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Membangun masa depan berkelanjutan melalui inovasi pengelolaan sampah dan edukasi lingkungan.
          </p>
          <blockquote className="text-lime-400 italic text-sm border-l-2 border-lime-500 pl-4 py-1">
            "Setiap sampah yang terkelola adalah langkah menuju bumi yang lebih hijau."
          </blockquote>
        </div>

        <nav className="flex flex-col space-y-5">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-lime-500 rounded-full"></span>
            Navigasi Cepat
          </h3>
          <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent w-full mb-2" />
          <ul className="space-y-3 text-zinc-400 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/pages/aboutUs", label: "Tentang Kami" },
              { href: "/pages/aboutUs/aboutProject", label: "Tentang Project" },
              { href: "/pages/aboutUs/aboutTeam", label: "Tentang Team" },
              { href: "/pages/ourProblem", label: "Masalah Kita" },
              { href: "/pages/ourSolution", label: "Solusi Kami" },
              { href: "/pages/contact", label: "Kontak" },
            ].map(({ href, label }, index) => (
              <motion.li
                key={href}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }} >
                <Link href={href} className="hover:text-lime-400 transition flex items-center gap-2">
                  <span className="text-lime-500 text-xs">•</span> {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col space-y-5">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-lime-500 rounded-full"></span>
            Kontak Kami
          </h3>
          <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent w-full mb-2" />
          <div className="space-y-4 text-sm text-zinc-400">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Alamat Kantor</p>
                <p>Jl. Lingkungan Hijau No. 123, Kota Berkelanjutan, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-lime-400" />
              <div>
                <p className="font-medium text-white">Telepon</p>
                <a href="tel:+6281234567890" className="hover:text-lime-400 transition">
                  +77 858-2713-6453
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lime-400" />
              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:team@trashinno.id" className="hover:text-lime-400 transition">
                  team@trashinno.my.id
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-lime-500 rounded-full"></span>
            Ikuti Kami
          </h3>
          <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent w-full mb-2" />
          <div className="flex flex-wrap gap-3">
            {[
              {
                href: "https://youtube.com/",
                icon: <Youtube className="w-5 h-5" />,
                name: "YouTube"
              },
              {
                href: "https://www.instagram.com/",
                icon: <Instagram className="w-5 h-5" />,
                name: "Instagram"
              }
            ].map(({ href, icon, name }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} >
                {icon}
                <span>{name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary footer */}
      <div className="border-t border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-400">
              &copy; {currentYear} TrashInno. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Membangun masa depan berkelanjutan bersama.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {[
                { href: "/pages/privacy", label: "Privacy Policy" },
                { href: "/pages/terms", label: "Terms of Service" },
                { href: "/pages/faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <motion.div
                  key={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Link
                    href={href}
                    className="text-xs text-zinc-400 hover:text-lime-400 transition-colors">
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
