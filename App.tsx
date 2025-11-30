import React, { useState } from 'react';
import DailyPage from './components/DailyPage';
import ToolsPage from './components/ToolsPage';
import SecretaryPage from './components/SecretaryPage';
import NotesPage from './components/NotesPage';
import { TabView } from './types';
import { Home, Briefcase, MessageCircleHeart, Notebook } from './components/Icons';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabView>('daily');

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#FDFBF7] shadow-2xl relative overflow-hidden text-milktea-800">
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-5 scrollbar-hide">
        <div className={`${currentTab === 'daily' ? 'block' : 'hidden'} h-full`}>
          <DailyPage />
        </div>
        <div className={`${currentTab === 'tools' ? 'block' : 'hidden'} h-full`}>
          <ToolsPage />
        </div>
        <div className={`${currentTab === 'notes' ? 'block' : 'hidden'} h-full`}>
          <NotesPage />
        </div>
        <div className={`${currentTab === 'secretary' ? 'block' : 'hidden'} h-full`}>
          <SecretaryPage />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="h-[88px] bg-white border-t border-milktea-200 flex items-start justify-around pt-3 pb-6 px-2 shadow-[0_-5px_10px_rgba(0,0,0,0.02)] z-50 shrink-0">
        <NavButton 
          active={currentTab === 'daily'} 
          onClick={() => setCurrentTab('daily')} 
          icon={<Home size={24} />} 
          label="日常" 
        />
        <NavButton 
          active={currentTab === 'tools'} 
          onClick={() => setCurrentTab('tools')} 
          icon={<Briefcase size={24} />} 
          label="工具" 
        />
        <NavButton 
          active={currentTab === 'notes'} 
          onClick={() => setCurrentTab('notes')} 
          icon={<Notebook size={24} />} 
          label="記事" 
        />
        <NavButton 
          active={currentTab === 'secretary'} 
          onClick={() => setCurrentTab('secretary')} 
          icon={<MessageCircleHeart size={24} />} 
          label="小秘書" 
        />
      </nav>

      {/* Decorative floating blurred orbs for aesthetic */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-milktea-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-milktea-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 pointer-events-none"></div>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, icon, label }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 w-16 transition-all duration-300 ${
        active ? 'text-milktea-700 transform -translate-y-1' : 'text-milktea-300 hover:text-milktea-400'
      }`}
    >
      <div className={`p-1.5 rounded-xl transition-all ${active ? 'bg-milktea-50 ring-4 ring-milktea-50' : ''}`}>
        {icon}
      </div>
      <span className={`text-xs font-medium ${active ? 'opacity-100' : 'opacity-80'}`}>{label}</span>
    </button>
  );
};

export default App;