import { 
  UserCircle, 
  MessageCircle, 
  Info, 
  AlertCircle, 
  Stethoscope, 
  ArrowRight,
  TrendingUp,
  Activity,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { ViewType } from '@/src/types';

interface OverviewProps {
  setView: (view: ViewType) => void;
}

export default function Overview({ setView }: OverviewProps) {
  const cards = [
    { 
      id: 'profile', 
      title: 'Profil & Laporan', 
      desc: 'Kelola data kesehatan Anda dan keluarga.', 
      icon: UserCircle, 
      color: 'bg-brand-primary', 
      textColor: 'text-brand-primary',
      bgColor: 'bg-brand-light'
    },
    { 
      id: 'chat', 
      title: 'Konsultasi Online', 
      desc: 'Hubungi dokter melalui chat atau video call.', 
      icon: MessageCircle, 
      color: 'bg-[#D4A373]', 
      textColor: 'text-[#D4A373]',
      bgColor: 'bg-[#FAF1E6]'
    },
    { 
      id: 'wellness', 
      title: 'Wellness Service', 
      desc: 'Program hidup sehat dan paket pencegahan.', 
      icon: Sparkles, 
      color: 'bg-[#5D6D5E]', 
      textColor: 'text-[#5D6D5E]',
      bgColor: 'bg-[#E8EDE9]'
    },
    { 
      id: 'homecare', 
      title: 'Layanan Homecare', 
      desc: 'Layanan kesehatan langsung di rumah Anda.', 
      icon: Stethoscope, 
      color: 'bg-brand-primary', 
      textColor: 'text-brand-primary',
      bgColor: 'bg-brand-light'
    },
    { 
      id: 'info', 
      title: 'Informasi Kesehatan', 
      desc: 'Video dan tips kesehatan terpercaya.', 
      icon: Info, 
      color: 'bg-[#D4A373]', 
      textColor: 'text-[#D4A373]',
      bgColor: 'bg-[#FAF1E6]'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section>
        <h1 className="text-3xl font-serif font-bold text-brand-primary tracking-tight">Selamat Datang, Budi!</h1>
        <p className="text-slate-500 mt-2">Apa yang bisa kami bantu hari ini untuk kesehatan keluarga Anda?</p>
      </section>

      {/* Emergency Quick Action */}
      <motion.button 
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setView('emergency')}
        className="w-full bg-[#8B1E1E] rounded-3xl p-6 flex items-center justify-between group overflow-hidden relative"
      >
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
            <AlertCircle className="text-white w-6 h-6 animate-pulse" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-serif font-bold text-white">Butuh bantuan darurat?</h3>
            <p className="text-red-100/80">Layanan 119 dan konsultasi darurat 24 jam</p>
          </div>
        </div>
        <div className="relative z-10 bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-white font-semibold transition-all">
          Hubungi Sekarang
        </div>
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-red-400/10 rounded-full blur-3xl"></div>
      </motion.button>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 card-shadow flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tekanan Darah</p>
            <p className="text-2xl font-bold text-slate-900">120/80 <span className="text-sm font-normal text-slate-400">mmHg</span></p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Normal</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-slate-100 card-shadow flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FAF1E6] rounded-2xl flex items-center justify-center text-[#D4A373]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Detak Jantung</p>
            <p className="text-2xl font-bold text-slate-900">72 <span className="text-sm font-normal text-slate-400">bpm</span></p>
          </div>
          <div className="ml-auto text-emerald-600">
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 card-shadow flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Jadwal Terdekat</p>
            <p className="text-base font-bold text-slate-900">Besok, 09:00</p>
            <p className="text-xs text-slate-400">Konsultasi Dr. Sarah</p>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-6 px-1 font-serif">Layanan Utama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.id}
                whileHover={{ y: -8 }}
                onClick={() => setView(card.id as ViewType)}
                className="bg-white p-6 rounded-[2rem] border border-slate-100 card-shadow text-left group transition-all"
              >
                <div className={`w-14 h-14 ${card.bgColor} ${card.textColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">{card.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all mt-auto">
                  Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            )
          })}
        </div>
      </section>
    </div>
  );
}
