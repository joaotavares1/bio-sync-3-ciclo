'use client'

import React, { useState, useEffect } from 'react'
import { Wifi, WifiOff } from 'lucide-react'

export function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    // Verificar o estado inicial
    setIsOnline(navigator.onLine)

    // Adicionar event listeners
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Remover event listeners no cleanup
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div 
      className={`fixed bottom-4 right-4 p-2 rounded-full transition-all duration-300 ${
        isOnline ? 'bg-green-1' : 'bg-red-1'
      }`}
      role="status"
      aria-live="polite"
    >
      {isOnline ? (
        <Wifi className="text-white-1" size={24} />
      ) : (
        <WifiOff className="text-white-1" size={24} />
      )}
      <span className="sr-only">
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}
