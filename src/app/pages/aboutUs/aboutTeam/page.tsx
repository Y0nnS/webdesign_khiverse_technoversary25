'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Handshake, Heart, Leaf, Lightbulb, Sparkles, Target } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function TentangTeam() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);



  const team = [
    {
      name: 'Andika Arifin',
      role: 'Frontend Developer',
      img: '/images/team/anfin-new.jpg',
      desc: 'Pengembang frontend dengan keahlian dalam membangun aplikasi web yang responsif dan user-friendly. Berpengalaman dalam React, Next.js, dan Tailwind CSS.',
      details: [
        'Membangun antarmuka pengguna yang responsif dan intuitif',
        'Mengoptimalkan performa website untuk kecepatan dan efisiensi',
        'Bekerja sama dengan tim desain untuk menerjemahkan mockup menjadi kode'
      ],
      social: {
        linkedin: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Aruna Pria Maheswara',
      role: 'Frontend Developer',
      img: '/images/team/aruna-new.png',
      desc: 'Spesialis frontend dengan passion dalam menciptakan desain yang menarik dan fungsional. Keahlian utama: React, Next.js, Tailwind CSS.',
      details: [
        'Mendesain dan mengimplementasikan UI/UX',
        'Kolaborasi dengan tim desain untuk memastikan konsistensi merek',
        'Meningkatkan aksesibilitas dan responsivitas aplikasi web'
      ],
      social: {
        linkedin: '#',
        github: '#',
        instagram: '#'
      }
    },
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: 'Inovatif',
      desc: 'Menghadirkan solusi baru berbasis teknologi untuk masalah lingkungan yang nyata',
      color: 'bg-blue-50'
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      title: 'Kolaboratif',
      desc: 'Bekerja sama dengan berbagai pihak demi dampak yang lebih luas',
      color: 'bg-purple-50'
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Empatik',
      desc: 'Memahami tantangan masyarakat dan hadir sebagai solusi',
      color: 'bg-red-50'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F8FF] overflow-x-hidden">
      <section className="min-h-screen sm:min-h-[80vh] relative overflow-hidden flex items-center px-3 md:px-10 lg:px-40">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/team/team-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Tim</span> Trashinno
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Dibangun oleh tim yang berkomitmen menggabungkan teknologi dan kepedulian lingkungan untuk menciptakan perubahan nyata.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="team-members" className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Tim Kami
            </motion.span>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kenalan dengan Anggota Tim
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
              Individu berbakat yang membawa keahlian unik untuk mewujudkan visi Trashinno.
            </motion.p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-green-300 transition-all hover:shadow-md h-full"
                  onClick={() => setExpandedMember(expandedMember === idx ? null : idx)}>
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top"/>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.desc}</p>

                  <AnimatePresence>
                    {expandedMember === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <ul className="space-y-2 mb-4">
                          {member.details.map((detail, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05 + 0.1 }}
                              className="flex items-start text-left text-xs text-gray-500">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <span>{detail}</span>
                            </motion.li>))}
                        </ul>
                      </motion.div>)}
                  </AnimatePresence>

                  <motion.div
                    animate={{ rotate: expandedMember === idx ? 0 : 0 }}
                    className="text-green-600 text-xs flex items-center justify-center gap-1 mb-4 cursor-pointer" >
                    {expandedMember === idx ? 'Sembunyikan' : 'Lihat'} detail
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>

                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <motion.a
                        whileHover={{ y: -3 }}
                        href={member.social.linkedin}
                        className="text-gray-500 hover:text-green-600 transition">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>)}
                    {member.social.github && (
                      <motion.a
                        whileHover={{ y: -3 }}
                        href={member.social.github}
                        className="text-gray-500 hover:text-green-600 transition">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>)}
                    {member.social.instagram && (
                      <motion.a
                        whileHover={{ y: -3 }}
                        href={member.social.instagram}
                        className="text-gray-500 hover:text-green-600 transition">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </motion.a> )}
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200 hover:border-green-300 transition-all hover:shadow-md h-full relative overflow-hidden cursor-pointer">
              <div className="absolute -top-4 -right-4 opacity-10">
                <Target className="w-16 h-16 text-green-500" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Visi Kami</h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Menjadi pelopor gerakan pengelolaan sampah digital yang edukatif, inklusif, dan berkelanjutan untuk seluruh lapisan masyarakat Indonesia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200 hover:border-green-300 transition-all hover:shadow-md h-full relative overflow-hidden cursor-pointer">
              <div className="absolute -top-4 -right-4 opacity-10">
                <Leaf className="w-16 h-16 text-green-500" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Misi Kami</h2>
              </div>
              <ul className="space-y-4 text-gray-600 text-sm sm:text-base">
                {[
                  "Mengedukasi masyarakat akan pentingnya pemilahan dan daur ulang sampah",
                  "Menyediakan platform digital yang memudahkan pengelolaan sampah",
                  "Berinovasi dalam teknologi yang mendukung ekonomi sirkular",
                  "Mendorong kolaborasi antara komunitas, pelajar, dan pemerintah"
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">
                      •
                    </span>
                    <span>{item}</span>
                  </li> ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prinsip yang Memandu Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
              Fondasi yang membentuk setiap keputusan dan tindakan kami dalam mewujudkan Trashinno
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className={`${value.color} p-8 rounded-xl shadow-md border border-gray-200 hover:border-green-300 transition-all hover:shadow-md h-full relative overflow-hidden`}>
                <div className="absolute -bottom-4 -right-4 opacity-10">
                  <Sparkles className="w-16 h-16 text-green-500" />
                </div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-green-800 mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="no-underline">
      {children}
    </a>
  );
}
