export { Home } from './Home';
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit");

export type { HomeProps } from './Home';
