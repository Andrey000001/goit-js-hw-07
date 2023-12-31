import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryItemsEl = createElGallery(galleryItems);

gallery.addEventListener("click", openModalClick);

function createElGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`
    )
    .join("");
}
gallery.innerHTML = galleryItemsEl;

function openModalClick(e) {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
        <img src="${target.dataset.source}" style="border-radius: 4px;"  alt="${target.description}">
        `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", keyDawnHandler);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", keyDawnHandler);
      },
    }
  );
  instance.show();
}
function keyDawnHandler(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
