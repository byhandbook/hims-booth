"use client";

import { useRef, useEffect } from 'react';
import * as deepar from 'deepar';

export default function Home() {

  useEffect(() => {
    const initializeDeepAR = async () => {
      const previewCanvas = document.getElementById('testing');
      console.log(previewCanvas);

      if (previewCanvas) {
        try {
          const deepAR = await deepar.initialize({
            licenseKey: '098c0d38bada8b5db7197325fa6f0ff5833227c5e4cc433e627c2d9e0651a8a5d017b403aa9efaaa',
            previewElement: previewCanvas as HTMLElement, 
            effect: '/filters/aviators',
            additionalOptions: {
              cameraConfig: {
                facingMode: 'environment',
              }
            }
          });

          const hasCameraAccess = await navigator.mediaDevices.getUserMedia({ video: true })
            .then(() => true)
            .catch(() => false);

          if (!hasCameraAccess) {
            console.error('Camera access is denied or unavailable.');
          }
        } catch (error) {
          console.error('Failed to initialize DeepAR:', error);
        }
      }
    };

    initializeDeepAR();
  }, []);

  return (
    <div className="items-center justify-items-center h-screen w-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <div id="testing" className="w-full h-full">
          {/* Canvas content */}
        </div>
      </main>
    </div>
  );
}