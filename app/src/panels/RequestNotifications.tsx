import { useState } from 'react';
import VKBridge from '@vkontakte/vk-bridge';
import { Group, Div, Button, Header } from '@vkontakte/vkui';

const RequestNotifications = () => {
  const [notificationPermission, setNotificationPermission] = useState(false);

  const requestNotificationPermission = () => {
    VKBridge.send('VKWebAppAllowNotifications')
      .then(data => {
        if (data.result) {
          setNotificationPermission(true);
          console.log('Notification permission granted');
        } else {
          console.log('User denied notification permission');
        }
      })
      .catch(error => {
        console.error('Error while requesting notification permission', error);
      });
  };

  return (
    <Group header={<Header mode="secondary">Запросить отправку уведомлений</Header>}>
      <Div>
        <Button
          size="l"
          mode="primary"
          onClick={requestNotificationPermission}
          stretched
          style={{ marginTop: 8 }}
          disabled={notificationPermission}
        >
          Запросить отправку уведомлений
        </Button>
        {notificationPermission && (
          <Div>
            <p>Отправка уведомлений разрешена</p>
          </Div>
        )}
      </Div>
    </Group>
  );
};

export default RequestNotifications;
