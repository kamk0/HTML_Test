class ScrollHelper {
  getWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
}
export const scrollHelper = new ScrollHelper()

const body = document.querySelector('body');

export const offScroll = () => {
  if (scrollHelper.getWidth()) {
    body.classList.add('no-scroll')
  } else {
    body.classList.add('no-scroll-mobile')
  }
};
export const onScroll = () => body.classList.remove('no-scroll', 'no-scroll-mobile');
