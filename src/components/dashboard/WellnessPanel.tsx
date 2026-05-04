import { 
  Sparkles, 
  Leaf, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Zap,
  Coffee,
  Apple
} from 'lucide-react';
import { motion } from 'motion/react';

export default function WellnessPanel() {
  const packages = [
    {
      title: 'Healthy Life Basic',
      price: 'Rp 450k',
      period: '/ bulan',
      features: [
        'Konsultasi Ahli Gizi (1x)',
        'E-book Panduan Diet Sehat',
        'Pelacak Aktivitas Harian',
        'Diskon Produk Sehat 5%'
      ],
      color: 'bg-brand-primary',
      highlight: false
    },
    {
      title: 'Family Prevention Pro',
      price: 'Rp 1.2jt',
      period: '/ bulan',
      features: [
        'Cek Darah Lengkap Keluarga',
        'Vaksin Influenza Tahunan',
        'Konsultasi Dokter Pribadi',
        'Prioritas Layanan Homecare'
      ],
      color: 'bg-brand-secondary',
      highlight: true
    },
    {
      title: 'Golden Age Wellness',
      price: 'Rp 850k',
      period: '/ bulan',
      features: [
        'Pemantauan Tensi Mingguan',
        'Menu Diet Khusus Lansia',
        'Senam Sehat Virtual',
        'Konsultasi Geriatri'
      ],
      color: 'bg-brand-primary',
      highlight: false
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-primary tracking-tight">Wellness Service</h1>
        <p className="text-slate-500 mt-1">Hidup lebih sehat dan bermakna dengan program pencegahan penyakit terpadu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className={`relative bg-white p-8 rounded-[2.5rem] border border-slate-100 card-shadow flex flex-col ${pkg.highlight ? 'ring-2 ring-brand-secondary' : ''}`}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-secondary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Paling Diminati
              </div>
            )}
            
            <div className={`w-12 h-12 ${pkg.color} text-white rounded-2xl flex items-center justify-center mb-6`}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-slate-900">{pkg.price}</span>
              <span className="text-slate-400 text-sm ml-1">{pkg.period}</span>
            </div>
            
            <ul className="space-y-4 flex-1 mb-8">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              pkg.highlight 
                ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20 hover:bg-brand-secondary/90' 
                : 'bg-brand-light text-brand-primary hover:bg-brand-primary hover:text-white'
            }`}>
              Pilih Paket
            </button>
          </motion.div>
        ))}
      </div>

      <section className="bg-brand-light rounded-[2.5rem] p-10 overflow-hidden relative">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-brand-primary font-bold tracking-widest uppercase text-xs">
              <Sparkles className="w-4 h-4" /> Program Hidup Sehat
            </div>
            <h2 className="text-3xl font-serif font-bold leading-tight">Mulai Perubahan Kecil Hari Ini</h2>
            <p className="text-slate-600 leading-relaxed">
              Kesehatan bukan hanya tentang tidak sakit, tapi tentang energi optimal setiap hari. 
              Ikuti program lifestyle coaching kami yang didesain khusus untuk profil kesehatan Anda.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-amber-500">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-700">Manajemen Tidur</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-emerald-500">
                  <Apple className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-700">Nutrisi Seimbang</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-secondary">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-700">Olahraga Terukur</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-indigo-500">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-700">Kesehatan Mental</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all pt-4">
              Konsultasi Wellness Gratis <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center border-8 border-brand-primary/5 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-secondary rounded-3xl rotate-12 flex items-center justify-center text-white shadow-xl">
                 <Leaf className="w-12 h-12" />
              </div>
              <Sparkles className="w-32 h-32 text-brand-primary/20 animate-pulse" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-50">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                 <span className="text-xs font-bold text-slate-700">Live Status: Sehat</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>
    </div>
  );
}
