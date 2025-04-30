import React from 'react';

import useKeydown from '../../hooks/use-keydown';
export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  useKeydown(
    'Escape',
    () => { setToasts([])}
  );

   function addToast({message, toastVariant}) {
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: toastVariant,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function removeToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{toasts, addToast, removeToast, }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
