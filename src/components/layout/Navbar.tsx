import { Bell, Search, Menu, User } from 'lucide-react';

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-slate-50 rounded-lg text-slate-600"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari layanan atau informasi..." 
            className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full w-64 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-50 rounded-full text-slate-600 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-1"></div>
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 leading-none">Budi Santoso</p>
            <p className="text-xs text-slate-500 mt-1">Kepala Keluarga</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
            <User className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
