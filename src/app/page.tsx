'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Lightbulb, Sparkles, Target } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Aruna',
    text: 'Trashinno membantu saya lebih sadar akan pentingnya memilah sampah. Sekarang keluarga kami sudah terbiasa memisahkan sampah organik dan anorganik.',
    role: 'Siswa SMK Telkom Sidoarjo',
    avatar: '/images/user.png'
  },
  {
    id: 2,
    name: 'Artha',
    text: 'Komunitas yang aktif dan edukasi yang mudah dipahami. Aplikasinya sangat membantu dalam menjadwalkan pengambilan sampah daur ulang.',
    role: 'Siswa SMK Telkom Sidoarjo',
    avatar: '/images/user.png'
  },
  {
    id: 3,
    name: 'Geo',
    text: 'Saya jadi lebih semangat hidup berkelanjutan berkat Trashinno. Trashinno memotivasi kami untuk terus memilah sampah dengan benar.',
    role: 'Siswa SMK Telkom Sidoarjo',
    avatar: '/images/user.png'
  },
];

function Testimoni() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka Tentang Trashinno
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
            Dengarkan pengalaman langsung dari pengguna dan mitra kami
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-10">
                <Sparkles className="w-16 h-16 text-green-500" />
              </div>

              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100">
                <Image
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="italic text-gray-700 text-md sm:text-lg mb-6 leading-relaxed">"{testimonials[index].text}"</p>
                <div>
                  <h3 className="text-green-700 font-bold text-md sm:text-xl">{testimonials[index].name}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${index === i ? 'bg-green-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${i+1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-green-50 transition"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5 text-green-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-green-50 transition"
            aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5 text-green-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const stats = [
    {
      value: '64 juta ton',
      label: 'Sampah per tahun',
      desc: 'Jumlah total sampah yang dihasilkan setiap tahun di Indonesia.',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      color: 'bg-white'
    },
    {
      value: '60%',
      label: 'Tidak terkelola',
      desc: 'Sebagian besar sampah tidak dikelola dengan baik atau dibuang sembarangan.',
      icon: <Target className="w-8 h-8 text-green-600" />,
      color: 'bg-white'
    },
    {
      value: '15%',
      label: 'Didaur ulang',
      desc: 'Hanya sebagian kecil sampah yang berhasil didaur ulang secara optimal.',
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      color: 'bg-white'
    },
    {
      value: '175.000 ton',
      label: 'Sampah plastik dilaut',
      desc: 'Volume sampah plastik yang mencemari lautan di Indonesia setiap tahun.',
      icon: <Sparkles className="w-8 h-8 text-green-600" />,
      color: 'bg-white'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-green-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-3 sm:px-">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 text-center" >
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Fakta Menarik
          </span>
          <h2 className="text-xl sm:text-4xl font-bold mb-4 text-white">
            Fakta Sampah Di Indonesia
          </h2>
          <p className="text-green-100 max-w-2xl text-sm sm:text-base mx-auto">
            Data terkini tentang kondisi pengelolaan sampah di Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${stat.color} p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all relative overflow-hidden`}>
              <div className="absolute -top-4 -right-4 opacity-10">
                {stat.icon}
              </div>

              <div className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                {stat.value}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <section
        className="min-h-screen sm:min-h-[80vh] relative flex items-center justify-start px-3 md:px-16 lg:px-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home-bg2.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur- bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Bersama</span> Kita Ciptakan Lingkungan Bersih
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Trashinno adalah solusi inovatif untuk memilah sampah secara otomatis. Bergabunglah dengan kami untuk mengurangi dampak sampah di lingkungan.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="/pages/aboutUs">
              <div className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium transition flex items-center gap-2">
                Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      <ImpactStats />

      <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image
                  src="/images/iot.png"
                  alt="Smart Waste Bin"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Project Yang Kami Kembangkan
              </span>
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Pemilahan Sampah <span className="text-green-600">Cerdas</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Tempat sampah pintar kami menggunakan sensor canggih dan kecerdasan buatan untuk mengidentifikasi dan memilah sampah secara otomatis. Sistem kami mencapai akurasi hingga 95% dalam klasifikasi sampah.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Monitoring Real-time</h3>
                    <p className="text-gray-600 text-sm">Pantau volume sampah dan dapatkan notifikasi ketika tempat sampah penuh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Analisis Data</h3>
                    <p className="text-gray-600 text-sm">Laporan periodik untuk memahami pola pembuangan sampah Anda</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/pages/aboutUs/aboutProject" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 py-3 rounded-full font-medium transition shadow hover:shadow-md">
                  Jelajahi Project Kami <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Edukasi Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Edukasi
            </span>
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pemilahan Sampah Penting?
            </h2>
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
              Setiap tahun, Indonesia menghasilkan 64 juta ton sampah. Dengan tindakan kecil dari kita semua, kita bisa membuat perubahan besar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Lingkungan Sehat',
                desc: 'Mengurangi polusi tanah, air, dan udara dari sampah yang tidak terkelola. Sampah organik yang terurai di TPA menghasilkan gas metana penyebab pemanasan global.',
                color: 'bg-blue-50'
              },
              {
                icon: '💼',
                title: 'Ekonomi Sirkular',
                desc: 'Mendorong industri daur ulang dan menciptakan lapangan kerja baru. Material daur ulang bisa bernilai ekonomi tinggi jika diproses dengan benar.',
                color: 'bg-purple-50'
              },
              {
                icon: '🏡',
                title: 'Rumah Bersih',
                desc: 'Menciptakan lingkungan rumah yang lebih bersih, sehat, dan bebas bau. Pemilahan mengurangi risiko kontaminasi bakteri dan penyakit.',
                color: 'bg-red-50'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className={`${item.color} p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-pointer`}>
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-bold text-base sm:text-xl mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimoni />
    </main>
  );
}
