'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Leaf, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import React, { useState } from 'react';



export default function Kontak() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9]{10,13}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.name || !form.phone || !form.email || !form.message) {
      setError('Mohon isi semua bidang dengan benar.');
      setIsLoading(false);
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Format email tidak valid');
      setIsLoading(false);
      return;
    }

    if (!validatePhone(form.phone)) {
      setError('Nomor telepon harus 10-13 digit angka');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setError('');
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', message: '' });
      setIsLoading(false);

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F8F8FF] overflow-x-hidden">
      <section className="min-h-screen sm:min-h-[80vh] relative overflow-hidden flex items-center px-6 md:px-10 lg:px-40">
        <div
          className="absolute inset-0 bg-cover bg-[center_25%] z-0"
          style={{ backgroundImage: "url('/images/kontakIMG/kontak-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Terhubung</span> Dengan Kami
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Tim <span className="font-bold text-white">Trashinno</span> siap mendengar ide, pertanyaan, atau kolaborasi Anda.
              Mari bersama-sama menciptakan solusi pengelolaan sampah yang lebih baik.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Kontak & Kolaborasi
            </span>
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mari Berdiskusi
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Kami senang mendengar dari Anda. Isi formulir atau gunakan informasi kontak di bawah ini.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8" >
              <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 opacity-10">
                  <Sparkles className="w-16 h-16 text-green-500" />
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <span className="w-2 h-2 bg-white rounded-full" />
                  </span>
                  Informasi Kontak
                </h3>

                <ul className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-6 h-6 text-green-500" />,
                      title: "Email",
                      content: "team@trashinno.my.id",
                      subtitle: "Respon dalam 24 jam"
                    },
                    {
                      icon: <Phone className="w-6 h-6 text-green-500" />,
                      title: "Telepon",
                      content: "+77 858-2713-6453",
                      subtitle: "Senin-Jumat, 07:00-15:00"
                    },
                    {
                      icon: <MapPin className="w-6 h-6 text-green-500" />,
                      title: "Kantor",
                      content: "Jl. Lingkungan Hijau No. 123, Kota Berkelanjutan, Indonesia",
                      subtitle: "Kunjungi kami dengan janji"
                    }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-start">
                      <div className="p-2 bg-green-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-700">{item.content}</p>
                        <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 opacity-10">
                  <Leaf className="w-16 h-16 text-green-500" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Lokasi Kami</h3>
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10 pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.35627166739414!2d112.76099871180553!3d-7.274898000089498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd2949c26eb%3A0xebbe57f6a68c5b59!2sJl.%20Karang%20Menur%20II%20No.23%2C%20RT.007%2FRW.07%2C%20Airlangga%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060286!5e0!3m2!1sen!2sid!4v1749665754608!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    title="Lokasi Trashinno"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Kunjungi kantor kami dengan membuat janji terlebih dahulu
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              id="contact-form">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-zinc-900 sticky top-4 overflow-hidden">
                <div className="absolute -top-4 -right-4 opacity-10">
                  <Sparkles className="w-16 h-16 text-green-500" />
                </div>

                <div className="mb-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">Kirim Pesan</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Isi formulir di bawah ini dan tim kami akan segera merespons pesan Anda.
                  </p>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-red-800">Terjadi Kesalahan</h4>
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    </motion.div>
                  )}

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-green-800">Pesan Terkirim!</h4>
                        <p className="text-green-600 text-sm">
                          Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      required/>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Nomor Telepon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="081234567890"
                        className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        required  />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@contoh.com"
                        className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        required />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan Anda</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                      required />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${isLoading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'}`}>
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </span>
                      ) : (
                        <span className="flex items-center font-normal text-sm sm:text-base justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Kirim Pesan
                        </span>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
