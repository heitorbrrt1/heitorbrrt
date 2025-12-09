'use client'

import { useState, useEffect, useCallback } from 'react';

interface ModelLoaderOptions {
  deviceDetection?: boolean;
  loadDelay?: number;
}

export function useModelLoader({
  deviceDetection = true,
  loadDelay = 500
}: ModelLoaderOptions = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!deviceDetection) return;

    const checkDeviceCapability = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isLowPowerDevice = 
        window.innerWidth < 768 || 
        (window.navigator.hardwareConcurrency !== undefined && window.navigator.hardwareConcurrency <= 2);
      
      setShouldRender(!isMobile && !isLowPowerDevice);
    };

    checkDeviceCapability();
    window.addEventListener('resize', checkDeviceCapability);
    
    return () => window.removeEventListener('resize', checkDeviceCapability);
  }, [deviceDetection]);

  const handleModelLoaded = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, loadDelay);
  }, [loadDelay]);

  return {
    isLoading,
    isVisible,
    shouldRender,
    handleModelLoaded
  };
}
