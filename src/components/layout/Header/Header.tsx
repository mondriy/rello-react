import { FC, PropsWithChildren } from 'react';
import header from './Header.module.scss';
import classNames from 'classnames';

type HeaderType = {
  className?: string;
};

const Header: FC<PropsWithChildren<HeaderType>> = ({ className, children }) => {
  return (
    <header className={classNames(header.container, className)}>
      {children}
    </header>
  );
};

export default Header;
