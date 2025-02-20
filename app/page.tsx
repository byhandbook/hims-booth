"use client";

import { useRef, useEffect } from 'react';
import * as deepar from 'deepar';

export default function Home() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeDeepAR = async () => {
      if (canvasRef.current) {
        try {
          const deepAR = await deepar.initialize({
            licenseKey: '1234',
            previewElement: canvasRef.current,
            effect: '/filters/aviators',
            additionalOptions: {
              cameraConfig: {
                facingMode: 'environment',
              }
            }
          });
        } catch (error) {
          console.error('Failed to initialize DeepAR:', error);
        }
      }
    };

    initializeDeepAR();
  }, []);

  return (
    <div className="items-center justify-items-center h-screen w-screen]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <div id="testing" ref={canvasRef} className="w-full h-full">
          {/* Canvas content */}
        </div>
      </main>
    </div>
  );
}