import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Toaster } from './components/ui/sonner';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <div id="top" className="App bg-[#0a0a0a] text-[#f5f5f4]">
      <SmoothScroll />
      <Home />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
