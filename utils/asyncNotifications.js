import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFICATION_KEY = "NOTIFICATION_KEY";

function createNotification() {
  return {
    title: "Time to study !",
    body: "👋 dDon't forget to solve some quizes for today!",
    sound: true,
    priority: "high",
    vibrate: true,
  };
}

// export function getPermission() {
//   return Notifications.requestPermissionsAsync()
//     .then((response) => response.status)
//     .then((status) => {
//       if (status === "undetermined") {
//         return Notifications.requestPermissionsAsync().then(
//           ({ status }) => status
//         );
//       }
//       return status;
//     });
// }

// export function getToday() {
//   return AsyncStorage.getItem(DECKS_KEY).then((res) => {
//     return res ? JSON.parse(res) : {};
//   });
// }

// export function setNotificationForTomorrow() {
//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   tomorrow.setHours(20, 0, 0);

//   Notifications.cancelAllScheduledNotificationsAsync().then(() => {
//     Notifications.scheduleNotificationAsync({
//       content: {
//         title: "Study Time",
//         body: "It's Time to solve some quizes !!",
//         sound: true,
//         priority: "high",
//       },
//       trigger: {
//         seconds: 60 * 60 * 24,
//         repeats: true,
//       },
//     });
//   });
// }

export function setLocalNotification() {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync().then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleNotificationAsync(createNotification(), {
              time: tomorrow,
              repeats: true,
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
      return Notifications.getPermissionsAsync().then((res) => res.status);
    });
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// Notifications.getPermissionsAsync().then((x) => console.log("res is : ", x));
