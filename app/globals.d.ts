declare global {
  interface Window {
    showToast: (type: 'success' | 'error' | 'info' | 'warning', message: string) => void
  }
}

export {}
