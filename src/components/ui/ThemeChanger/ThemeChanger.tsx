import { FC, useEffect, useRef, useState } from 'react';
import { Portal } from 'components/layout';
import theme from './ThemeChanger.module.scss';

type ThemeChangerType = {
  toggle: boolean;
};

const ThemeChanger: FC<ThemeChangerType> = ({ toggle }) => {
  const [show, setShow] = useState<boolean>(false);
  const render = useRef<boolean>(false);

  useEffect(() => {
    if (render.current) {
      setShow(true);
      const root = document.querySelector('#root') as HTMLDivElement;
      const body = document.body;
      body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        root.setAttribute('data-theme', toggle ? 'dark' : 'light');
        body.style.removeProperty('overflow');
        setShow(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }

    render.current = true;
  }, [toggle]);

  if (!show) return null;

  return (
    <Portal>
      <span className={theme.ripples}></span>
    </Portal>
  );
};

export default ThemeChanger;
