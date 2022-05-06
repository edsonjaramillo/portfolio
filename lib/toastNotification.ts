import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

/**
 * @summary Toast notification caller
 * @param {ToastType} type 'success' | 'error' | 'info' | 'warning'
 * @param {string} message
 * @param {number} ms default: 3000 (3 seconds)
 */
export const toastNotification = (type: ToastType, message: string, ms: number = 3000) => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: ms,
  };

  switch (type) {
    case 'info':
      toast.info(message, options);
      break;
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'warning':
      toast.warn(message, options);
      break;
    default:
      break;
  }
};
