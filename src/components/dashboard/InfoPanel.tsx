import { 
  Play, 
  BookOpen, 
  Users, 
  Search, 
  Heart, 
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

export default function InfoPanel() {
  const articles = [
    { title: 'Nutrisi Penting untuk Pertumbuhan Anak di Bawah 5 Tahun', category: 'Kesehatan Anak', readTime: '5 min' },
    { title: 'Cara Mengelola Stress dengan Teknik Pernapasan Sederhana', category: 'Mental Health', readTime: '8 min' },
    { title: 'Panduan Olahraga Ringan di Rumah Selama Pandemi', category: 'Lifestyle', readTime: '6 min' },
  ];

  const videos = [
    { title: 'Mengapa Tidur Cukup Penting?', duration: '05:24', thumb: 'bg-indigo-100' },
    { title: 'Tutorial Cuci Tangan yang Benar', duration: '03:12', thumb: 'bg-emerald-100' },
    { title: 'Mengenal Alergi pada Balita', duration: '12:45', thumb: 'bg-rose-100' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Informasi Kesehatan</h1>
          <p className="text-slate-500 mt-1">Video edukasi dan artikel kesehatan terpercaya dari para ahli.</p>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Cari topik kesehatan..." className="w-full md:w-80 pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-pink-500/10 transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Live Talk Banner */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-rose-100"
          >
             <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
               <div className="space-y-4 flex-1">
                 <div className="px-3 py-1 bg-white/20 rounded-lg w-fit text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> Live Talk
                 </div>
                 <h2 className="text-3xl font-display font-bold leading-tight">Vaksinasi & Kekebalan Tubuh Keluarga</h2>
                 <p className="text-rose-100 leading-relaxed max-w-md">Bersama Dr. Linda Kusuma Sp.A. Tanya jawab interaktif seputar vaksinasi anak.</p>
                 <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <Calendar className="w-4 h-4" /> 24 Mei, 2024
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold">
                       <Users className="w-4 h-4" /> 120+ Peserta
                    </div>
                 </div>
                 <button className="px-8 py-3 bg-white text-rose-600 rounded-2xl font-bold hover:bg-rose-50 transition-all mt-4">
                   Daftar Sekarang
                 </button>
               </div>
               <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl relative">
                  <Play className="w-16 h-16 fill-white" />
                  <div className="absolute inset-0 border-8 border-white/20 rounded-full animate-ping pointer-events-none"></div>
               </div>
             </div>
             {/* Abstract Shapes */}
             <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl"></div>
          </motion.div>

          <section>
            <div className="flex items-center justify-between mb-6 px-1">
              <h3 className="text-xl font-bold text-slate-900">Video Kesehatan Baru</h3>
              <button className="text-sm font-bold text-pink-600 flex items-center gap-1">Lihat Semua <ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((vid, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className={`aspect-video ${vid.thumb} rounded-[1.5rem] relative mb-3 overflow-hidden flex items-center justify-center`}>
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                      <Play className="w-4 h-4 text-slate-900 fill-slate-900 ml-0.5" />
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/50 text-white text-[10px] font-bold rounded-md backdrop-blur-sm">
                      {vid.duration}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-pink-600 transition-colors">{vid.title}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 card-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" /> Artikel Pilihan
            </h3>
            <div className="space-y-6">
              {articles.map((art, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">{art.category}</p>
                  <h4 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-indigo-600 transition-colors">{art.title}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[10px] text-slate-400 font-medium">Budi Santoso • {art.readTime} baca</span>
                  </div>
                  {idx < articles.length - 1 && <div className="h-px bg-slate-100 mt-6"></div>}
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all">
              Jelajahi Semua Artikel
            </button>
          </section>

          <div className="bg-gradient-to-tr from-amber-400 to-orange-400 rounded-[2.5rem] p-8 text-white">
             <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold mb-2">Tips Hari Ini</h3>
             <p className="text-amber-50 text-sm leading-relaxed mb-6 font-medium italic">
               "Minum air putih minimal 8 gelas sehari dan lakukan peregangan otot setiap 30 menit bekerja."
             </p>
             <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
               Lihat Tips Lain <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
