
// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector("#vimeo-player");
const iframe = document.querySelector('iframe');

    const player = new Player(iframe);

player.on('timeupdate', throttle(event => {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));


const savedTime = localStorage.getItem('videoplayer-current-time');



/////// ДЯКУЮ ІЛЛІ /////////

if (savedTime !== null) {
  player.setCurrentTime(savedTime);
};
////////////////////////////
