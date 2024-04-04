import React, { useEffect } from 'react';
import VKBridge from '@vkontakte/vk-bridge';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import ShowImage from './ShowImage';
import RequestNotifications from './RequestNotifications';

export type HomeProps = {
  id: string;
};

export const Home: React.FC<HomeProps> = ({ id }) => {
  useEffect(() => {
    VKBridge.send('VKWebAppInit').catch(error => console.error('VKWebAppInit failed', error));
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <ShowImage />
      <RequestNotifications />
    </Panel>
  );
};

export default Home;
