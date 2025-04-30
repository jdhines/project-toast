import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';
import styles from './Toast.module.css';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, id, children}) {
  const { removeToast } = React.useContext(ToastContext);
  const IconComponent = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer} aria-hidden="true">
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {`${variant} -`}
        </VisuallyHidden>
        {children}
        <VisuallyHidden>
          Press Escape to dismiss
        </VisuallyHidden>
      </p>
      <button
        className={styles.closeButton}
        onClick={() => {removeToast(id)}}
        aria-label="Dismiss pop-up message"
        aria-live="off"
      >
        <X size={24} aria-hidden="true"/>
      </button>
    </div>
  );
}

export default Toast;
