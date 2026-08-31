import React from 'react';

interface PrankModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  isPrankTriggered: boolean;
  setIsPrankTriggered: (triggered: boolean) => void;
  tempName: string;
  setTempName: (name: string) => void;
}

export default function PrankModal({
  isEditModalOpen,
  setIsEditModalOpen,
  isPrankTriggered,
  setIsPrankTriggered,
  tempName,
  setTempName
}: PrankModalProps) {
  if (!isEditModalOpen) return null;

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white border-4 border-blue-500 rounded-3xl p-6 pop-shadow-blue max-w-sm w-full animate-slide-in relative text-center flex flex-col items-center">

        {!isPrankTriggered ? (
          <>
            <h2 className="text-2xl font-black text-blue-900 mb-2">Edit Profile</h2>
            <p className="text-xs font-bold text-gray-500 mb-6">Ubah nama sesuka hati Anda di bawah ini:</p>

            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="w-full bg-blue-50 border-2 border-blue-200 rounded-xl px-4 py-2 text-blue-900 font-bold text-center mb-6 focus:outline-none focus:border-pink-400 focus:bg-pink-50 transition-colors"
            />

            <div className="flex gap-3 w-full">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-2 rounded-xl border-2 border-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const nameInput = tempName.toLowerCase().trim();
                  if (nameInput === 'fero fasya' || nameInput === 'fero' || nameInput === 'fasya') {
                    setIsEditModalOpen(false);
                    setTempName('Fero Fasya'); // Reset format
                  } else {
                    setIsPrankTriggered(true);
                  }
                }}
                className="flex-1 bg-blue-500 hover:bg-pink-500 text-white font-bold py-2 rounded-xl border-2 border-blue-600 hover:border-pink-600 shadow-[0_4px_0_rgba(29,78,216,1)] hover:shadow-[0_4px_0_rgba(219,39,119,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <div className="animate-slide-in">
            <div className="text-6xl mb-4 animate-bounce">
              <img src="/Portogamegweh/images/projects/wagu.jpg" className="w-20 h-20 rounded-lg mx-auto" alt="" />
            </div>
            <h2 className="text-xl font-black text-pink-600 mb-2 leading-snug">
              Mweheh, enak aja ganti-ganti nama orang!
            </h2>
            <p className="text-sm font-bold text-blue-800 mb-6 border-2 border-dashed border-pink-300 bg-pink-50 p-3 rounded-xl">
              Ini porto Fero tau! Ngapain diganti jadi "{tempName}"?? :b
            </p>
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setTimeout(() => {
                  setIsPrankTriggered(false);
                  setTempName('Fero Fasya');
                }, 500);
              }}
              className="w-full bg-pink-500 hover:bg-blue-500 text-white font-black py-3 rounded-xl border-2 border-pink-600 hover:border-blue-600 shadow-[0_4px_0_rgba(219,39,119,1)] active:translate-y-1 active:shadow-none transition-all"
            >
              Gomen 🙏
            </button>
          </div>
        )}

        {/* Decorative Stars */}
        <div className="absolute -top-4 -left-4 text-yellow-400 text-3xl font-bold animate-pulse drop-shadow-md pointer-events-none">★</div>
        <div className="absolute -bottom-2 -right-2 text-blue-400 text-2xl font-bold animate-pulse drop-shadow-md pointer-events-none" style={{ animationDelay: '0.5s' }}>✦</div>
      </div>
    </div>
  );
}
