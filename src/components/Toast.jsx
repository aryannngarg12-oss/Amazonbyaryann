import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-2xl border border-zinc-700 animate-slide-up">
      {toast.type === 'info' ? (
        <Info className="w-5 h-5 text-sky-400 shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      )}
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  );
}
