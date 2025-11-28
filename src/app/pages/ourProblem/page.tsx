'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, ChevronRight, Clock, Database, Leaf, TrendingUp } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MasalahKita() {
  const [expandedImpact, setExpandedImpact] = useState<number | null>(null);
  const [showPlasticFacts, setShowPlasticFacts] = useState(false);



  const StatisticCard = ({ icon, value, title, desc, index }: any) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{
        duration: 0.3
      }}
      className="bg-red-50 p-6 rounded-xl border border-red-200 text-center relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -bottom-4 -right-4 opacity-10">
          <Leaf className="w-16 h-16 text-red-500 rotate-45" />
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mb-4 relative z-10">
        <motion.div
          whileHover={{ rotate: 15 }}
          className="bg-red-100 p-3 rounded-full">
          {icon}
        </motion.div>
      </div>
      <p className="text-lg sm:text-2xl font-bold text-red-600 mb-2 relative z-10">{value}</p>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 relative z-10">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base relative z-10">{desc}</p>
    </motion.div>
  );

  const ImpactCard = ({ title, desc, img, index }: any) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white/10 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm border border-white/20 hover:border-green-400 transition-all group cursor-pointer">
      <div className="relative h-52 cursor-pointer">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-110"/>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-xl font-bold mb-3 text-white">{title}</h3>
          <motion.div
            animate={{ rotate: expandedImpact === index ? 180 : 0 }}>
          </motion.div>
        </div>
        {desc}
        <AnimatePresence>
          {expandedImpact === index && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base text-green-100/90 overflow-hidden">

            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-[#F8F8FF] overflow-x-hidden">
      <section
        className="min-h-screen sm:min-h-[80vh] bg-cover bg-center relative flex items-center justify-start px-3 md:px-16 lg:px-40"
        style={{ backgroundImage: "url('/images/masalahIMG/masalah-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Masalah</span> Lingkungan Kita
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Indonesia menghadapi krisis sampah yang semakin parah. Setiap tahun,
              lebih dari 64 juta ton sampah dihasilkan, dan hanya 15% yang didaur ulang.
              Mari kita bersama-sama mencari solusi untuk mengatasi masalah ini.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="problem-scale" className="bg-white py-16 relative">
        <div className="absolute -top-10 left-0 w-32 h-32 bg-red-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              Masalah Kita
            </motion.span>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500 hidden sm:block" />
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-4xl font-bold text-gray-900">
                Krisis Sampah yang Kita Hadapi
              </motion.h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 max-w-3xl text-sm sm:text-base mx-auto">
              Indonesia menghasilkan jutaan ton sampah setiap tahunnya. Berikut fakta yang perlu kita hadapi bersama:
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 cursor-pointer">
            {[
              {
                icon: <Database className="w-10 h-10 text-red-500" />,
                value: "64 Juta Ton/Tahun",
                title: "Total Sampah Indonesia",
                desc: "Setiap tahun Indonesia menghasilkan sampah yang setara dengan berat 8,5 juta gajah"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-red-500" />,
                value: "3,2% Peningkatan",
                title: "Pertumbuhan Sampah",
                desc: "Jumlah sampah meningkat setiap tahun seiring pertumbuhan populasi dan konsumsi"
              },
              {
                icon: <Leaf className="w-10 h-10 text-red-500" />,
                value: "60% Tidak Terkelola",
                title: "Sampah Tidak Terolah",
                desc: "Sebagian besar berakhir di TPA, sungai, atau laut mencemari lingkungan"
              },
            ].map((item, i) => (
              <StatisticCard key={i} index={i} {...item} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-400 rounded-full filter blur-xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-orange-400 rounded-full filter blur-xl opacity-20"></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h3 className="text-base sm:text-2xl font-bold mb-4 flex items-center gap-2">
                <div>
                  <Clock className="w-6 h-6" />
                </div>
                Dampak Jangka Panjang
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  "Polusi mikroplastik dalam rantai makanan berdampak pada kesehatan manusia",
                  "Emisi metana dari TPA berkontribusi pada perubahan iklim",
                  "Kerugian ekonomi mencapai triliunan rupiah akibat pengelolaan sampah yang tidak optimal",
                  "Rusaknya ekosistem laut dan terumbu karang"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-start">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="mr-2">
                      •
                    </motion.span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-red-50 border border-red-100 rounded-xl mt-10 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <AlertTriangle className="w-24 h-24 text-red-500" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="text-red-500 flex-shrink-0">
                <AlertTriangle className="w-12 h-12" />
              </motion.div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-red-800 mb-2">Darurat Sampah Plastik</h3>
                <p className="text-red-700 text-sm sm:text-base">
                  Setiap menit, <span className="font-semibold">1.000 kantong plastik</span> masuk ke laut Indonesia.
                  Plastik butuh <span className="font-semibold">400 tahun</span> untuk terurai, dan selama itu
                  meracuni ekosistem laut dan masuk ke rantai makanan kita.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/masalahIMG/masalah-bg2.jpg"
            alt="Environmental Damage Background"
            fill
            className="object-cover blur-md brightness-75"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Dampak Kerusakan Lingkungan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-basetext-green-100 max-w-2xl mx-auto drop-shadow">
              Sampah yang tidak dikelola dengan benar menyebabkan kerusakan ekosistem yang luas
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pencemaran Laut",
                desc: "1 juta hewan laut mati tiap tahun karena sampah plastik. Mikroplastik telah ditemukan dalam ikan yang dikonsumsi manusia.",
                img: "/images/masalahIMG/sampahlaut.png"
              },
              {
                title: "Kerusakan Daratan",
                desc: "Lahan produktif terkontaminasi logam berat dari sampah elektronik. TPA menyebabkan pencemaran tanah dan air tanah.",
                img: "/images/masalahIMG/sampahdarat.jpg"
              },
              {
                title: "Perubahan Iklim",
                desc: "Sampah organik di TPA menghasilkan gas metana yang 25x lebih berbahaya dari CO₂. Pembakaran sampah meningkatkan polusi udara.",
                img: "/images/masalahIMG/iklim.png"
              },
              {
                title: "Pencemaran Air",
                desc: "Air tercemar limbah sampah menyebabkan berbagai penyakit. 80% sungai di Indonesia tercemar sampah plastik.",
                img: "/images/masalahIMG/air.png"
              },
              {
                title: "Kesehatan Masyarakat",
                desc: "Timbulan sampah menjadi sarang penyakit. Pembakaran sampah menyebabkan ISPA dan kanker paru-paru.",
                img: "/images/masalahIMG/masyarakat.png"
              },
              {
                title: "Kerugian Ekonomi",
                desc: "Indonesia kehilangan Rp 139 triliun/tahun akibat pengelolaan sampah buruk. Sektor pariwisata terkena dampak besar.",
                img: "/images/masalahIMG/ekonomi.png"
              },
            ].map((item, i) => (
              <ImpactCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-3 sm:px-6 relative">
        <div className="absolute -top-10 left-0 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="text-center mb-16">
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3" >
            Solusi
          </motion.span>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kita Bisa Mengubah Ini!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
            Dengan tindakan kecil dari setiap individu, kita bisa menciptakan perubahan besar
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-lg relative overflow-hidden">
          <h3 className="text-lg sm:text-2xl font-bold text-green-800 mb-4 relative z-10">
            Mulai dari Rumah, Menuju Lingkungan yang Lebih Bersih
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl text-sm sm:text-base mx-auto relative z-10">
            Kami menyediakan panduan dan strategi sederhana untuk memilah dan mengelola sampah dengan benar.
            Dari dapur hingga kantor, setiap langkah kecil menuju kebiasaan ramah lingkungan bisa memberi dampak besar.
          </p>
          <div className="relative z-10">
            <Link
              href="/pages/ourSolution"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 py-3 rounded-full transition shadow hover:shadow-md">
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                Pelajari Selengkapnya
              </motion.span>
              <div>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
