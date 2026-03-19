import { mainInit } from './main.js';
import { navBarMenu } from './menu.js';
import { homepage } from './homepage.js';
import { about } from './about.js';
import { swiperInit } from './swiper.js';
import { works } from './works.js';
import { form } from './form.js';
import { footerDate } from './footer-date.js';

// not all script files are being loaded by default (example: faqs...)

mainInit();
navBarMenu();
homepage();
about();
works();
swiperInit();
form();
footerDate();

console.log("Loading main scripts loader");