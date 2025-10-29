import { useState, useCallback } from 'react';

interface UseImageModalReturn {
  imageSrc: string | null;
  showImage: (src: string) => void;
  closeModal: () => void;
}

/**
 * Custom hook for managing image modal state
 */
export const useImageModal = (): UseImageModalReturn => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const showImage = useCallback((src: string) => {
    setImageSrc(src);
  }, []);

  const closeModal = useCallback(() => {
    setImageSrc(null);
  }, []);

  return {
    imageSrc,
    showImage,
    closeModal,
  };
};
