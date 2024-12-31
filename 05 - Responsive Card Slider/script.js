const swiper = new Swiper('.card-wrapper', {
    spaceBetween: 30,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2, // Limit the number of dynamic bullets to two
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 5
        },
    },
    on: {
        slideChange: function () {
            if (this.isEnd) {
                this.allowSlideNext = false;
            } else {
                this.allowSlideNext = true;
            }
            if (this.isBeginning) {
                this.allowSlidePrev = false;
            } else {
                this.allowSlidePrev = true;
            }
        }
    }
});
