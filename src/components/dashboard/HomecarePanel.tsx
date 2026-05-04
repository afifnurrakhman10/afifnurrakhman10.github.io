import { 
  Home, 
  Calendar, 
  MapPin, 
  Stethoscope, 
  FlaskConical, 
  Syringe, 
  ChevronRight,
  Clock,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HomecarePanel() {
  const services = [
    { title: 'Pemeriksaan Umum', icon: Stethoscope, price: 'Rp 150k', color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Tes Laboratorium', icon: FlaskConical, price: 'Rp 250k+', color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Vaksinasi Homecare', icon: Syringe, price: 'Rp 200k+', color: 'text-teal-600', bg: 'bg-teal-50' },
    { title: 'Fisioterapi', icon: Home, price: 'Rp 300k', color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Layanan Homecare</h1>
        <p className="text-slate-500 mt-1">Hadirkan dokter dan tenaga kesehatan profesional langsung ke depan pintu rumah Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {services.map((svc, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-[2rem] border border-slate-100 card-shadow text-left group"
              >
                <div className={`w-12 h-12 ${svc.bg} ${svc.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{svc.title}</h3>
                <p className="text-xs text-slate-400 mb-4 tracking-wide font-bold">MULAI {svc.price}</p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-2 py-1 bg-indigo-50 w-fit rounded-lg">
                  Booking <ChevronRight className="w-3 h-3" />
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-100">
             <div className="relative z-10 flex items-center gap-6">
               <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shrink-0">
                 <MapPin className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-xl font-bold">Layanan Area Sekitar</h3>
                 <p className="text-emerald-100 text-sm mt-1">Saat ini melayani seluruh wilayah Jakarta, Depok, dan Tangerang.</p>
               </div>
             </div>
             <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 -translate-y-12 translate-x-12 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 card-shadow space-y-8">
          <h3 className="text-xl font-bold text-slate-900">Formulir Pemesanan</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Jenis Layanan</label>
              <select className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                <option>Pilih Layanan</option>
                <option>Pemeriksaan Umum</option>
                <option>Vaksinasi</option>
                <option>Fisioterapi</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Tanggal</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Pilih Tanggal" className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Waktu</label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Pilih Waktu" className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium outline-none" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Alamat Lengkap</label>
              <textarea 
                rows={3} 
                className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder="Masukkan alamat penjemputan/kunjungan lengkap..."
              ></textarea>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-2xl flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-indigo-600" />
              </div>
              <p className="text-xs text-indigo-700 leading-relaxed">Tenaga kesehatan kami akan menghubungi Anda 1 jam sebelum kunjungan untuk konfirmasi kedatangan.</p>
            </div>

            <button className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-200 hover:scale-[1.02] active:scale-95 transition-all">
              Beres, Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
