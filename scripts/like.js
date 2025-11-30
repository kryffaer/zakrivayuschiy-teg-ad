/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

// Обработчик для кнопки с иконкой
iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

// Обработчик для текстовой кнопки Like
likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if (heart.classList.contains('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}