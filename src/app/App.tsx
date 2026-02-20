import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import AppRouter from '../components/AppRouter/AppRouter';
import { classNames } from '../shared/lib/classNames/classNames';
import { Preloader } from '../shared/ui/Preloader/Preloader';
import './styles/index.css';

const MIN_LOADING_MS = 800;

function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const readyRef = useRef(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  const handleAppReady = useCallback(() => {
    readyRef.current = true;
    if (minTimePassed) setIsAppReady(true);
  }, [minTimePassed]);

  useEffect(() => {
    const t = setTimeout(() => setMinTimePassed(true), MIN_LOADING_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (minTimePassed && readyRef.current) setIsAppReady(true);
  }, [minTimePassed]);

  return (
    <div className={classNames('app', {}, [])}>
      <Preloader isActive={!isAppReady} />
      <motion.div
        className={classNames('wrapper', {}, [])}
        initial={{ opacity: 0 }}
        animate={{ opacity: isAppReady ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          pointerEvents: isAppReady ? 'auto' : 'none',
          visibility: isAppReady ? 'visible' : 'hidden',
        }}
      >
        <AppRouter onAppReady={handleAppReady} />
      </motion.div>
    </div>
  );
}

export default App;
