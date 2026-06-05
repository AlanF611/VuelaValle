import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="absolute inset-0 bg-dark-900/85 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Content */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={shouldReduceMotion ? {} : { scale: 0.96, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[85dvh] overflow-y-auto overscroll-contain"
          >
            <button
              onClick={onClose}
              className="sticky top-3 left-full mr-3 -mb-10 flex items-center justify-center w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-dark-100 transition-colors z-10 float-right"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-dark-700" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
