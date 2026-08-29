/* =====================================================
   GALLERY FILES
===================================================== */

/*
    Add your filenames here.

    Images:
    .jpg
    .jpeg
    .png
    .webp

    Videos:
    .mp4
    .webm
*/


const galleries = {


    home: [

        "image-01.jpg",
        "image-02.jpg",
        "image-03.jpg",
        "image-04.jpg",
        "image-05.jpg",
        "image-06.jpg"

    ],


    "commercial-photography": [

        "image-01.jpg",
        "image-02.jpg",
        "image-03.jpg",
        "image-04.jpg"

    ],


    "commercial-videography": [

        "video-01.mp4",
        "video-02.mp4",
        "video-03.mp4"

    ],


    "portrait-photography": [

        "image-01.jpg",
        "image-02.jpg",
        "image-03.jpg",
        "image-04.jpg"

    ],


    "wedding-photography": [

        "image-01.jpg",
        "image-02.jpg",
        "image-03.jpg",
        "image-04.jpg",
        "image-05.jpg",
        "video-01.mp4"

    ],


    "event-photography-videography": [

        "image-01.jpg",
        "image-02.jpg",
        "image-03.jpg",
        "video-01.mp4"

    ]

};



/* =====================================================
   HEADER
===================================================== */

const header =
    document.querySelector(".site-header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.querySelector(".menu-button");


const mobileMenu =
    document.querySelector(".mobile-menu");


if (menuButton && mobileMenu) {


    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );


    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

}



/* =====================================================
   CREATE GALLERY
===================================================== */

function createGallery(
    container,
    galleryName
) {


    if (!container) return;


    const files =
        galleries[galleryName] || [];


    container.innerHTML = "";


    files.forEach(
        (file, index) => {


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "gallery-item reveal";


            const wrapper =
                document.createElement(
                    "div"
                );


            wrapper.className =
                "gallery-image-wrapper";


            const extension =
                file
                    .split(".")
                    .pop()
                    .toLowerCase();


            const isVideo =
                [
                    "mp4",
                    "webm",
                    "mov"
                ].includes(
                    extension
                );


            let media;


            if (isVideo) {


                media =
                    document.createElement(
                        "video"
                    );


                media.muted = true;

                media.loop = true;

                media.autoplay = true;

                media.playsInline = true;

                media.controls = false;


                const source =
                    document.createElement(
                        "source"
                    );


                source.src =
                    "../gallery/" +
                    galleryName +
                    "/" +
                    file;


                source.type =
                    "video/" +
                    extension;


                media.appendChild(
                    source
                );


            } else {


                media =
                    document.createElement(
                        "img"
                    );


                media.src =
                    "../gallery/" +
                    galleryName +
                    "/" +
                    file;


                media.alt =
                    "Pumudu Perera Photography";


                media.loading =
                    "lazy";

            }


            media.className =
                "gallery-media";


            wrapper.appendChild(
                media
            );


            item.appendChild(
                wrapper
            );


            const caption =
                document.createElement(
                    "div"
                );


            caption.className =
                "gallery-caption";


            caption.innerHTML = `

                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span>
                    PUMUDU PERERA
                </span>

            `;


            item.appendChild(
                caption
            );


            container.appendChild(
                item
            );


        }
    );


}



/* =====================================================
   HOME GALLERY
===================================================== */

const homeGallery =
    document.querySelector(
        "#home-gallery"
    );


if (homeGallery) {


    createHomeGallery(
        homeGallery
    );

}


function createHomeGallery(
    container
) {


    const files =
        galleries.home || [];


    files.forEach(
        (file, index) => {


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "gallery-item reveal";


            const wrapper =
                document.createElement(
                    "div"
                );


            wrapper.className =
                "gallery-image-wrapper";


            const extension =
                file
                    .split(".")
                    .pop()
                    .toLowerCase();


            const isVideo =
                [
                    "mp4",
                    "webm",
                    "mov"
                ].includes(
                    extension
                );


            let media;


            if (isVideo) {


                media =
                    document.createElement(
                        "video"
                    );


                media.muted = true;

                media.loop = true;

                media.autoplay = true;

                media.playsInline = true;


                const source =
                    document.createElement(
                        "source"
                    );


                source.src =
                    "gallery/home/" +
                    file;


                source.type =
                    "video/" +
                    extension;


                media.appendChild(
                    source
                );


            } else {


                media =
                    document.createElement(
                        "img"
                    );


                media.src =
                    "gallery/home/" +
                    file;


                media.alt =
                    "Pumudu Perera Photography";


                media.loading =
                    "lazy";

            }


            media.className =
                "gallery-media";


            wrapper.appendChild(
                media
            );


            item.appendChild(
                wrapper
            );


            const caption =
                document.createElement(
                    "div"
                );


            caption.className =
                "gallery-caption";


            caption.innerHTML = `

                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span>
                    PUMUDU PERERA
                </span>

            `;


            item.appendChild(
                caption
            );


            container.appendChild(
                item
            );


        }
    );

}



/* =====================================================
   SERVICE GALLERY
===================================================== */

document
    .querySelectorAll(
        ".service-gallery"
    )
    .forEach(
        container => {

            createGallery(
                container,
                container.dataset.gallery
            );

        }
    );



/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .08
        }
    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);



/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox =
    document.querySelector(
        ".lightbox"
    );


const lightboxContent =
    document.querySelector(
        ".lightbox-content"
    );


const closeButton =
    document.querySelector(
        ".lightbox-close"
    );


const previousButton =
    document.querySelector(
        ".lightbox-prev"
    );


const nextButton =
    document.querySelector(
        ".lightbox-next"
    );


const currentCounter =
    document.querySelector(
        ".current-image"
    );


const totalCounter =
    document.querySelector(
        ".total-images"
    );


let galleryItems = [];

let currentIndex = 0;



function refreshGalleryItems() {


    galleryItems =
        Array.from(
            document.querySelectorAll(
                ".gallery-item"
            )
        );


    if (totalCounter) {

        totalCounter.textContent =
            String(
                galleryItems.length
            ).padStart(2, "0");

    }


    galleryItems.forEach(
        (item, index) => {


            const media =
                item.querySelector(
                    ".gallery-media"
                );


            if (!media) return;


            media.addEventListener(
                "click",
                () => {

                    openLightbox(
                        index
                    );

                }
            );


        }
    );

}


setTimeout(
    refreshGalleryItems,
    100
);



/* =====================================================
   OPEN LIGHTBOX
===================================================== */

function openLightbox(
    index
) {


    if (!lightbox) return;


    if (!galleryItems.length)
        return;


    currentIndex =
        index;


    const item =
        galleryItems[
            currentIndex
        ];


    const media =
        item.querySelector(
            ".gallery-media"
        );


    lightboxContent.innerHTML =
        "";


    if (
        media.tagName.toLowerCase()
        === "video"
    ) {


        const video =
            document.createElement(
                "video"
            );


        video.src =
            media.currentSrc ||
            media.querySelector(
                "source"
            )?.src ||
            media.src;


        video.controls = true;

        video.autoplay = true;

        video.playsInline = true;


        lightboxContent.appendChild(
            video
        );


    } else {


        const image =
            document.createElement(
                "img"
            );


        image.src =
            media.src;


        image.alt =
            media.alt;


        lightboxContent.appendChild(
            image
        );

    }


    if (currentCounter) {

        currentCounter.textContent =
            String(
                currentIndex + 1
            ).padStart(2, "0");

    }


    lightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   NEXT
===================================================== */

function nextImage() {


    if (!galleryItems.length)
        return;


    currentIndex =
        (
            currentIndex + 1
        ) %
        galleryItems.length;


    openLightbox(
        currentIndex
    );

}



/* =====================================================
   PREVIOUS
===================================================== */

function previousImage() {


    if (!galleryItems.length)
        return;


    currentIndex =
        (
            currentIndex -
            1 +
            galleryItems.length
        ) %
        galleryItems.length;


    openLightbox(
        currentIndex
    );

}



if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextImage
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousImage
    );

}



/* =====================================================
   CLOSE
===================================================== */

function closeLightbox() {


    if (!lightbox)
        return;


    lightbox.classList.remove(
        "active"
    );


    lightboxContent.innerHTML =
        "";


    document.body.style.overflow =
        "";

}


if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {


    lightbox.addEventListener(
        "click",
        event => {


            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );

}



/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    event => {


        if (!lightbox)
            return;


        if (
            !lightbox.classList.contains(
                "active"
            )
        )
            return;


        if (
            event.key ===
            "Escape"
        ) {

            closeLightbox();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextImage();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousImage();

        }

    }
);



/* =====================================================
   TOUCH SWIPE
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


if (lightbox) {


    lightbox.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0]
                .screenX;

        }
    );


    lightbox.addEventListener(
        "touchend",
        event => {


            touchEndX =
                event.changedTouches[0]
                .screenX;


            const distance =
                touchStartX -
                touchEndX;


            if (
                Math.abs(distance) <
                50
            )
                return;


            if (
                distance > 0
            ) {

                nextImage();

            } else {

                previousImage();

            }

        }
    );

}