import { FC } from 'react';
import dashboard from './Dashboard.module.scss';
import { Header } from 'components/layout';
import { Title, Switcher, ThemeChanger } from 'components/ui';
import { useToggle } from 'hooks';

const Dashboard: FC = () => {
  const [toggle, setToggle] = useToggle();

  return (
    <div className={dashboard.container}>
      <Header className={dashboard.header}>
        <Title variant='h1' className={dashboard.title}>
          Rello
        </Title>
        <Switcher toggle={toggle} onToggle={setToggle} />
      </Header>
      <div className={dashboard.workspace}></div>
      <ThemeChanger toggle={toggle} />
    </div>
  );
};

export default Dashboard;
