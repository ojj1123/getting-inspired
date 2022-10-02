const bgColorList = ['#ffb457', '#ff96bd', '#9999fb', '#ffe797', '#cffff1'];
const body = document.body;
const menu = document.querySelector('menu');
const menuItemBtnList = Array.from(document.querySelectorAll('.menu_item'));
const menuBorder = document.querySelector('.menu_border');
let activeBtn = document.querySelector('.active');

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();

  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + 'px';
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeBtn, menuBorder);

menuItemBtnList.forEach((menuItemBtn, index) => {
  menuItemBtn.addEventListener('click', () => {
    activeBtn.classList.remove('active');
    menuItemBtn.classList.add('active');
    activeBtn = document.querySelector('.active');
    body.style.backgroundColor = bgColorList[index];
    offsetMenuBorder(activeBtn, menuBorder);
  });
});

window.addEventListener('resize', () => {
  offsetMenuBorder(activeBtn, menuBorder);
});
