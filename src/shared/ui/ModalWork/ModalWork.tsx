import { useEffect, useState } from 'react';
import s from './ModalWork.module.scss';

interface ModalWorkProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWork = ({ isOpen, onClose }: ModalWorkProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`${s.modalOverlay} ${isOpen ? s.open : ''}`}>
      <div className={s.modalContent}>
          <div className={s.textContainer}>
              <h2>В разработке</h2>
          </div>
          <div className={s.buttonContainer}>
              <button onClick={onClose} className={s.modalButton}>
                ОК
              </button>
          </div>
      </div>
    </div>
  );
};