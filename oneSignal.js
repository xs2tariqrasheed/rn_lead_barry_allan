//OneSignal Init Code
import OneSignal from 'react-native-onesignal';

OneSignal.setLogLevel(6, 0);
OneSignal.setAppId('251cc0cc-8b2f-4e33-934d-4a1afba7ba86');
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  console.log('Prompt response:', response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  (notificationReceivedEvent) => {
    let notification = notificationReceivedEvent.getNotification();
    const data = notification.additionalData;
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  }
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {
  console.log('OneSignal: notification opened:', notification);
});
