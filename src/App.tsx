/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ViewType } from '@/src/types';
import Sidebar from '@/src/components/layout/Sidebar';
import Navbar from '@/src/components/layout/Navbar';
import Overview from '@/src/components/dashboard/Overview';
import ProfilePanel from '@/src/components/dashboard/ProfilePanel';
import ChatPanel from '@/src/components/dashboard/ChatPanel';
import HomecarePanel from '@/src/components/dashboard/HomecarePanel';
import InfoPanel from '@/src/components/dashboard/InfoPanel';
import EmergencyPanel from '@/src/components/dashboard/EmergencyPanel';
import WellnessPanel from '@/src/components/dashboard/WellnessPanel';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('overview');

  const renderView = () => {
    switch (currentView) {
      case 'overview': return <Overview setView={setCurrentView} />;
      case 'profile': return <ProfilePanel />;
      case 'chat': return <ChatPanel />;
      case 'homecare': return <HomecarePanel />;
      case 'info': return <InfoPanel />;
      case 'emergency': return <EmergencyPanel />;
      case 'wellness': return <WellnessPanel />;
      default: return <Overview setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-1 flex flex-col min-w-0">
        <Navbar />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
