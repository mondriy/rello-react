import { FC } from 'react';
import switcher from './Switcher.module.scss';

type SwitcherType = {
  toggle: boolean;
  onToggle: () => void;
};

const Switcher: FC<SwitcherType> = ({ toggle, onToggle }) => {
  return (
    <label className={switcher.container}>
      <input type='checkbox' checked={toggle} onChange={onToggle} />
      <span className={switcher.slider}></span>
    </label>
  );
};

export default Switcher;
