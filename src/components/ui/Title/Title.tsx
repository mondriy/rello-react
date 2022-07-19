import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import title from './Title.module.scss';

type TitleTypes = {
  className?: string;
  variant?: string;
};

const Title: FC<PropsWithChildren<TitleTypes>> = ({
  className,
  variant = 'h2',
  children,
}) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;

  return <Tag className={classNames(title.params, className)}>{children}</Tag>;
};

export default Title;
