import $ from 'jquery';
import 'mdbootstrap';
import 'picturefill';
import 'lazysizes';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.pricing'), '60%');
const stickyHeader = new StickyHeader();
const modal = new Modal();
