import { mainInit } from './main.js';
import { navBarMenu } from './menu.js';
import { swiperInit } from './swiper.js';
import { form } from './form.js';
import { footerDate } from './footer-date.js';

// not all script files are being loaded byt default (example: faqs...)

document.addEventListener("DOMContentLoaded", function () {
    mainInit();
    navBarMenu();
    swiperInit();
    form();
    footerDate();
});

console.log("Loading main scripts loader");