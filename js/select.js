const select = document.querySelectorAll('.select__head');
const activeClass = 'js-active';
const activeClassList = 'js-active-list';
select.forEach(item => {
  const parentElement = item.parentElement;
  item.addEventListener('click', ({ target }) => {
    if (parentElement.closest(`.${activeClass}`)) {
      parentElement.classList.remove(activeClass);
    } else {
      parentElement.classList.add(activeClass);
    }
  })
  parentElement.querySelector('.select__list').addEventListener('click', ({ target }) => {
    parentElement.classList.remove(activeClass);
    item.querySelector('.select__head-text').innerHTML = target.innerHTML;
    parentElement.querySelector('.select__input').value = target.innerHTML;
    parentElement.querySelector(`.${activeClassList}`)?.classList?.remove(activeClassList);
    console.log(target)
    target.classList.add(activeClassList);
  })
})
document.addEventListener('click', (e) => {
  if (e.target.className !== 'select') {
    document.querySelectorAll(`.${activeClass}`).forEach(item => {
      const withinBoundaries = e.composedPath().includes(item);
      if (!withinBoundaries) {
        item.classList.remove(activeClass);
      }
    })
  }
})
console.log(select)