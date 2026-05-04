import { 
  Phone, 
  Video, 
  MessageCircle, 
  AlertCircle, 
  MapPin, 
  Activity,
  Heart,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EmergencyPanel() {
  const actions = [
    { label: 'Telepon 119', desc: 'Layanan Ambulans Nasional', icon: Phone, color: 'bg-red-600', ring: 'ring-red-100' },
    { label: 'Telepon RS Terdekat', desc: 'Hubungi IGD Rumah Sakit', icon: Phone, color: 'bg-orange-600', ring: 'ring-orange-100' },
    { label: 'Chat Dokter Jaga', desc: 'Pesan Teks Darurat', icon: MessageCircle, color: 'bg-indigo-600', ring: 'ring-indigo-100' },
    { label: 'Video Call Jaga', desc: 'Konsultasi Visual Cepat', icon: Video, color: 'bg-blue-600', ring: 'ring-blue-100' },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-red-50">
          <AlertCircle className="w-10 h-10 text-red-600 animate-pulse" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Layanan Darurat</h1>
        <p className="text-slate-500 mt-2">Gunakan layanan ini hanya untuk situasi medis mendesak yang butuh penanganan segera.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-8 bg-white border border-slate-100 rounded-[2.5rem] card-shadow text-left flex items-center justify-between group transition-all ring-offset-4 hover:ring-4 ${action.ring}`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 ${action.color} text-white rounded-2xl flex items-center justify-center`}>
                <action.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{action.label}</h3>
                <p className="text-sm text-slate-500">{action.desc}</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" />
          </motion.button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center gap-3">
               <div className="px-3 py-1 bg-red-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">Live Status</div>
               <h3 className="text-2xl font-bold">Lokasi & Kondisi Vital Anda</h3>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="p-5 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                 <MapPin className="text-emerald-400 w-6 h-6" />
                 <div>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Lokasi</p>
                   <p className="text-sm font-bold">Jl. Sudirman No. 12</p>
                 </div>
               </div>
               <div className="p-5 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                 <Heart className="text-red-400 w-6 h-6" />
                 <div>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Nadi</p>
                   <p className="text-sm font-bold">78 BPM</p>
                 </div>
               </div>
               <div className="p-5 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                 <Activity className="text-blue-400 w-6 h-6" />
                 <div>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Saturasi</p>
                   <p className="text-sm font-bold">98% SpO2</p>
                 </div>
               </div>
             </div>

             <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-start gap-4">
               <ShieldCheck className="w-10 h-10 text-indigo-400 shrink-0" />
               <div className="space-y-1">
                 <p className="text-sm font-bold">Data Medis Penting Terbagikan Otomatis</p>
                 <p className="text-xs text-white/60 leading-relaxed">Saat menghubungi layanan darurat, riwayat alergi dan penyakit kronis Anda akan otomatis dikirimkan ke tenaga medis yang merespons.</p>
               </div>
             </div>
          </div>

          <div className="bg-white/10 rounded-[2rem] p-8 border border-white/10 text-center space-y-6">
             <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center animate-pulse shadow-lg shadow-red-500/20">
                <Phone className="w-8 h-8" />
             </div>
             <div>
                <p className="text-white/60 text-sm mb-1">Butuh bantuan non-medis?</p>
                <p className="font-bold">Hubungi Customer Service</p>
             </div>
             <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Hubungi CS
             </button>
          </div>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
