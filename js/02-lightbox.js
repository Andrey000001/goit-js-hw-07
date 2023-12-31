import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

createELGallery(galleryItems);

function createELGallery(galleryItems) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    </li>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
}

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open();
});
