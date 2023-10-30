import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery')
const galleryImegs = createELGallery(galleryItems)
function createELGallery(galleryItems) {
    // galleryItems.preventDefault()
    const markup = galleryItems.reduce((acc,{preview,original,description})=>  acc + `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`,'')
    gallery.innerHTML = markup

    gallery.addEventListener('click',(e) => {
        e.preventDefault()
    })
    var lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });    
}



