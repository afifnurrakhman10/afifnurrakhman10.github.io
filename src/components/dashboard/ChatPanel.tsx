import { useState } from 'react';
import { 
  Video, 
  Phone, 
  MessageCircle, 
  Calendar,
  Clock,
  Search,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ChatPanel() {
  const [activeTab, setActiveTab] = useState<'now' | 'schedule'>('now');

  const doctors = [
    { name: 'Dr. Alidha Nur Rakhmani', spec: 'Kesehatan Keluarga', online: true, experience: '15 th', rating: 4.9 },
    { name: 'Dr. Ahmad Fauzi', spec: 'Pediatri', online: true, experience: '12 th', rating: 4.8 },
    { name: 'Dr. Linda Kusuma', spec: 'Kesehatan Keluarga', online: false, experience: '15 th', rating: 5.0 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-primary tracking-tight">Konsultasi Dokter</h1>
        <p className="text-slate-500 mt-1">Konsultasikan keluhan kesehatan Anda kapan saja dan di mana saja.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-6">
          <div className="bg-white p-1 rounded-2xl flex border border-slate-100 shadow-sm w-fit">
            <button
              onClick={() => setActiveTab('now')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'now' ? 'bg-brand-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Clock className="w-4 h-4" /> Konsultasi Sekarang
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'schedule' ? 'bg-brand-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-4 h-4" /> Buat Jadwal
            </button>
          </div>

          {activeTab === 'now' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Cari spesialisasi atau nama dokter..." className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl outline-none text-sm" />
                </div>
                <button className="p-3 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-100 transition-all">
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctors.map((doc, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 rounded-[2.5rem] border border-slate-100 card-shadow flex gap-4"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center">
                         <span className="text-xl font-bold text-slate-400">{doc.name[4]}</span>
                      </div>
                      {doc.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-900">{doc.name}</p>
                        <div className="flex items-center gap-1 text-xs font-bold text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded-lg">
                          ★ {doc.rating}
                        </div>
                      </div>
                      <p className="text-xs text-brand-primary font-bold uppercase tracking-wider mt-0.5">{doc.spec}</p>
                      <p className="text-xs text-slate-400 mt-2">Pengalaman {doc.experience}</p>
                      
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex-1 py-2 bg-brand-light text-brand-primary text-xs font-bold rounded-xl hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5" /> Chat
                        </button>
                        <button className="flex-1 py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-1">
                          <Video className="w-3.5 h-3.5" /> Video
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 card-shadow">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-brand-primary">Pilih Jadwal Konsultasi</h3>
                  <p className="text-sm text-slate-500">Tentukan waktu yang paling sesuai untuk Anda.</p>
                </div>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mb-8">
                {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, i) => (
                  <button key={day} className={`flex flex-col items-center p-4 rounded-2xl border transition-all ${i === 2 ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-white border-slate-100 text-slate-600 hover:border-brand-primary/20'}`}>
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1 opacity-70">{day}</span>
                    <span className="text-lg font-bold">{12 + i}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                 <h4 className="font-bold text-slate-900 text-sm mb-4">Waktu Tersedia</h4>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                   {['09:00', '10:00', '11:00', '13:00', '14:00', '16:00'].map(time => (
                     <button key={time} className="py-3 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:border-brand-primary hover:text-brand-primary transition-all">
                       {time}
                     </button>
                   ))}
                 </div>
              </div>

              <button className="w-full mt-10 py-5 bg-brand-primary text-white rounded-3xl font-bold text-lg shadow-xl shadow-brand-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Konfirmasi Jadwal
              </button>
            </div>
          )}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-brand-secondary rounded-[2.5rem] p-8 text-white sticky top-24 overflow-hidden shadow-2xl shadow-brand-secondary/20">
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">Paket Premium Pencegahan Keluarga</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Dapatkan akses tanpa batas ke konsultasi dokter dan pemeriksaan rutin untuk seluruh anggota keluarga.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Konsultasi Chat 24/7',
                  'Video Call Bulanan',
                  'Laporan Lab Lengkap',
                  'Diskon Obat 20%'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/60" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-white text-brand-secondary rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Langganan Sekarang <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            {/* Background decoration */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
