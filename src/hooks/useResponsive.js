import { useState, useEffect } from 'react'

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  const [deviceType, setDeviceType] = useState('desktop')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setWindowSize({ width, height })
      
      // Mobile First approach - define device types
      if (width < 640) {
        setDeviceType('mobile')
      } else if (width < 768) {
        setDeviceType('mobile-lg')
      } else if (width < 1024) {
        setDeviceType('tablet')
      } else if (width < 1280) {
        setDeviceType('laptop')
      } else {
        setDeviceType('desktop')
      }
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    windowSize,
    deviceType,
    isMobile: deviceType === 'mobile' || deviceType === 'mobile-lg',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'laptop' || deviceType === 'desktop',
    isSmallScreen: windowSize.width < 768,
  }
}

export default useResponsive