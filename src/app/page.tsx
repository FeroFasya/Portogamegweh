"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import DesktopView from '../components/DesktopView';
import MobileView from '../components/MobileView';
import PrankModal from '../components/PrankModal';
import CertificateModal from '../components/CertificateModal';

function AppContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'home';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Sync state if URL changes
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

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

export default function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-blue-50 flex items-center justify-center">Loading...</div>}>
      <AppContent />
    </Suspense>
  );
}
