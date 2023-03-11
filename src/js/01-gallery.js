// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function createGalleryItemsMarkup (galleryItems) {
    return galleryItems.map((item) => {
        const {preview, original, description} = item
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}" />
            </a>
        </li>`
        }).join(" ")
}
const galleryContainer = document.querySelector('.gallery')
const gallaryMarkup = createGalleryItemsMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', gallaryMarkup)

new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
