import { 
  Home, 
  UserCircle, 
  MessageCircle, 
  Info, 
  AlertCircle, 
  Stethoscope, 
  LayoutDashboard,
  LogOut,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { ViewType } from '@/src/types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

export default function Sidebar({ currentView, setView }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profil Keluarga', icon: UserCircle },
    { id: 'chat', label: 'Konsultasi Dokter', icon: MessageCircle },
    { id: 'wellness', label: 'Wellness Service', icon: Sparkles },
    { id: 'homecare', label: 'Layanan Homecare', icon: Stethoscope },
    { id: 'info', label: 'Informasi Kesehatan', icon: Info },
    { id: 'emergency', label: 'Layanan Darurat', icon: AlertCircle, variant: 'emergency' },
  ];

  return (
    <aside className="w-64 h-full bg-white border-r border-slate-200 flex flex-col hidden lg:flex">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-brand-primary">MediKeluarga</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            const isEmergency = item.variant === 'emergency';

            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewType)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? isEmergency ? 'bg-brand-emergency/10 text-brand-emergency' : 'bg-brand-light text-brand-primary'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {isActive && (
                  <motion.div layoutId="active-pill">
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 p-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Keluar</span>
        </button>
      </div>
    </aside>
  );
}
