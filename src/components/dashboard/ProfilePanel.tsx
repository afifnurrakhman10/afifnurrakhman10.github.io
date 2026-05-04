import { useState } from 'react';
import { 
  User, 
  Users, 
  Plus, 
  ChevronRight, 
  Activity, 
  Heart, 
  Scale, 
  Calendar,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ProfilePanel() {
  const [activeTab, setActiveTab] = useState<'saya' | 'keluarga'>('saya');
  const [activeMember, setActiveMember] = useState(0);

  const familyMembers = [
    { name: 'Siti Aminah', relation: 'Istri', age: 34, lastCheck: '2 jam yang lalu' },
    { name: 'Raka Santoso', relation: 'Anak', age: 8, lastCheck: 'Kemarin' },
    { name: 'Nita Santoso', relation: 'Anak', age: 3, lastCheck: '3 hari yang lalu' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-primary tracking-tight">Profil Kesehatan</h1>
          <p className="text-slate-500 mt-1">Pantau dan kelola data kesehatan keluarga Anda.</p>
        </div>
        
        <div className="bg-white p-1 rounded-2xl flex border border-slate-100 shadow-sm">
          <button
            onClick={() => setActiveTab('saya')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'saya' ? 'bg-brand-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <User className="w-4 h-4" /> Saya
          </button>
          <button
            onClick={() => setActiveTab('keluarga')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'keluarga' ? 'bg-brand-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" /> Keluarga
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Member List or Main Info */}
        <div className="lg:col-span-1 space-y-6">
          {activeTab === 'saya' ? (
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 card-shadow text-center">
              <div className="w-24 h-24 bg-brand-light rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-inner">
                <User className="w-12 h-12 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-brand-primary">Budi Santoso</h2>
              <p className="text-slate-500 font-medium">Laki-laki, 38 Tahun</p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Tinggi</p>
                  <p className="text-xl font-bold text-slate-900">175 <span className="text-sm font-normal">cm</span></p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Berat</p>
                  <p className="text-xl font-bold text-slate-900">78 <span className="text-sm font-normal">kg</span></p>
                </div>
              </div>

              <button className="w-full mt-6 py-4 bg-brand-light text-brand-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all">
                <Plus className="w-5 h-5" /> Ubah Data Profil
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-serif font-bold text-brand-primary">Anggota Keluarga</h3>
                <button className="text-brand-primary p-2 hover:bg-brand-light rounded-lg">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              {familyMembers.map((member, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMember(idx)}
                  className={`w-full p-6 rounded-[2rem] border transition-all text-left flex items-center justify-between ${
                    activeMember === idx 
                      ? 'bg-white border-brand-primary/20 shadow-md ring-4 ring-brand-light' 
                      : 'bg-white border-slate-100 hover:border-brand-light'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center">
                      <User className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.relation} • {member.age} Th</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${activeMember === idx ? 'text-brand-primary' : 'text-slate-300'}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Reports & Charts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 card-shadow h-full">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-serif font-bold text-brand-primary">Laporan Kesehatan Terkini</h3>
              <button className="text-sm font-bold text-brand-secondary hover:underline flex items-center gap-1">
                Unduh PDF <FileText className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-900">Tanda-tanda Vital</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Tekanan Darah</span>
                    <span className="font-bold text-slate-900">120/80 mmHg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Detak Jantung</span>
                    <span className="font-bold text-slate-900">72 bpm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Suhu Tubuh</span>
                    <span className="font-bold text-slate-900">36.5 °C</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-900">BMI & Nutrisi</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">BMI</span>
                    <span className="font-bold text-slate-900">24.5 (Normal)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Target Air Minum</span>
                    <span className="font-bold text-slate-900">2.5 L / hari</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Kolesterol</span>
                    <span className="font-bold text-slate-900">180 mg/dL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-100 rounded-3xl p-6 bg-slate-50/50">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="font-bold text-slate-900">Riwayat Grafik BMI</h4>
                 <select className="bg-white border text-sm rounded-lg p-1 px-2 outline-none">
                    <option>6 Bulan Terakhir</option>
                    <option>1 Tahun Terakhir</option>
                 </select>
               </div>
               <div className="h-48 flex items-end justify-between gap-4 px-4 pt-8">
                  {[40, 55, 65, 60, 75, 80].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className="flex-1 bg-brand-primary/40 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h} kg
                      </div>
                    </motion.div>
                  ))}
               </div>
               <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>Mei</span>
                  <span>Jun</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
