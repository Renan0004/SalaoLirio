'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loading from './Loading';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        children
      )}
    </AnimatePresence>
  );
} 