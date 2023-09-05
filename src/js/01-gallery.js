
// Додай бібліотеку як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була 
// встановлена через npm(синтаксис import /export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.


import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simpleLightbox.min.css';


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


console.log(galleryItems);



const ulEl = document.querySelector(".gallery");



function renderGalleryItems(galleryItems) {
    const markup = galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
        })
        .join('');
    
    ulEl.innerHTML = markup;
}
renderGalleryItems(galleryItems);


let imgsGallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionsDelay: 2500, captionPosition: "bottom"});
