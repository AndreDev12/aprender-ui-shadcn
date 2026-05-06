import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { DirectionProvider, TooltipProvider } from '@/components/ui';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DirectionProvider direction="rtl" dir="rtl">
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </DirectionProvider>
  </StrictMode>,
);
