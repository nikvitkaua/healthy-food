require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import form from './modules/form';
import slider from './modules/slider';
import {openModal} from './modules/modal'

"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 10000000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal('[data-modal]', '.modal', modalTimerId);
  timer(".timer", '2025-12-31');
  cards();
  calculator();
  form('form', modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    slide: ".offer__slide",
    totalCounter: "#total",
    currCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
});
