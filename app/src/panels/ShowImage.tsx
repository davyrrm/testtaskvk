import { useState } from 'react';
import VKBridge from '@vkontakte/vk-bridge';
import { Group, Div, Input, Button, Header } from '@vkontakte/vkui';

const ShowImage = () => {
  const [inputValue, setInputValue] = useState('');

  const openImage = () => {
    if (inputValue && /\.(jpg|jpeg|png)$/i.test(inputValue)) {
      VKBridge.send('VKWebAppShowImages', {
        images: [inputValue],
      })
      .then(data => console.log('VKWebAppShowImages success', data))
      .catch(error => console.error('VKWebAppShowImages failed', error));
    }
    
    setInputValue('');
  };

  return (
    <Group header={<Header mode="secondary">Вставьте ссылку на картинку</Header>}>
      <Div>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ссылка"
        />
        <Button size="l" mode="primary" onClick={openImage} stretched style={{ marginTop: 8 }}>
          Открыть картинку
        </Button>
      </Div>
    </Group>
  );
};

export default ShowImage;
