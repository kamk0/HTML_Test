import { offScroll, onScroll } from './scrollHelpers';

const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.header__burger-btn');
const navigationItems = burgerBtn.querySelectorAll('.navigation__item');

const activeHeaderClassName = 'js-header_active';
const activeNavigationItemClassName = 'js-navigation__item_active';

const headerParams = {
  isActive: false,
  on(cb) {
    this.isActive = true;
    header.classList.add(activeHeaderClassName);
    cb && cb();
  },
  off(cb) {
    header.classList.remove(activeHeaderClassName);
    this.isActive = false;
    cb && cb();
  },
  toggle(onActive, onDisable) {
    this.isActive ? this.off(onActive) : this.on(onDisable);
  }
};

const closeAllOpenedItems = () => {
  navigationItems.forEach(item => {
    item.classList.contains(activeNavigationItemClassName) &&
    item.classList.remove(activeNavigationItemClassName);
  });
};

const onActive = () => {
  closeAllOpenedItems();
  onScroll();
};
const onDisabled = () => {
  offScroll();
};

const onBurgerMenuClick = (target) => {
  headerParams.toggle(onActive, onDisabled);
};


burgerBtn.addEventListener('click', (event) => onBurgerMenuClick(event.target), true);

navigationItems.forEach(node =>
  node.addEventListener('click',
    () => node.classList.toggle(activeNavigationItemClassName)
  )
);
