"use client";

import React, { useState } from 'react';
import DesktopView from '../components/DesktopView';
import MobileView from '../components/MobileView';
import PrankModal from '../components/PrankModal';

import CertificateModal from '../components/CertificateModal';

// Safelist for Tailwind (in case string interpolation misses these in v4)
// border-blue-400 bg-blue-100 bg-blue-500 text-blue-700 pop-shadow-blue border-blue-600
// border-pink-400 bg-pink-100 bg-pink-500 text-pink-700 pop-shadow-pink
// border-yellow-400 bg-yellow-100 bg-yellow-500 text-yellow-700 pop-shadow-yellow
// border-gray-400 bg-gray-100 bg-gray-500 text-gray-700 pop-shadow-gray
// border-green-400 bg-green-100 bg-green-500 text-green-700 pop-shadow-green border-green-500

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Gimmick States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPrankTriggered, setIsPrankTriggered] = useState(false);
  const [tempName, setTempName] = useState('Fero Fasya');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-blue-50 font-anime text-blue-900 select-none">

      <CertificateModal 
        isOpen={isCertModalOpen}
        setIsOpen={setIsCertModalOpen}
      />

      <PrankModal 
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        isPrankTriggered={isPrankTriggered}
        setIsPrankTriggered={setIsPrankTriggered}
        tempName={tempName}
        setTempName={setTempName}
      />

      <DesktopView 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setIsCertModalOpen={setIsCertModalOpen}
      />

      <MobileView 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setIsCertModalOpen={setIsCertModalOpen}
      />

    </div>
  );
}
