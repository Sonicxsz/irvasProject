import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';
import forms from './modules/forms';
import calc from './modules/calc';
import image from './modules/image';
document.addEventListener('DOMContentLoaded', () =>{
    "use strict"
    let modalState = {};
    calc(modalState);
    image();

    modal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modal('.mod_phone', '.popup', '.popup_close');
    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    modal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    timer('2022-10-10');
    forms(modalState);
    tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');
    tabs('.glazing_block', '.glazing_content','.glazing_slider' , 'active');
    tabs('.no_click','.decoration_content > div > div','.decoration_slider','after_click');
});