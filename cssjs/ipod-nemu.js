const menuItems = document.querySelectorAll('.menu-item');
let currentIndex = 0;
let direction = 1; // 1表示向下，-1表示向上

function updateMenuSelection() {
  // 移除当前选中状态
  menuItems.forEach(item => item.classList.remove('active'));

  // 为当前菜单项添加选中状态
  const currentItem = menuItems[currentIndex];
  currentItem.classList.add('active');

  // 更新 circle 的位置到选中菜单项的右侧
  const circle = document.querySelector('.control-buttons .circle');
  const offsetTop = currentItem.offsetTop;
  circle.style.top = `${offsetTop}px`; // 直接使用选项的 offsetTop 确保精准对齐
}

// 自动更新菜单选项
setInterval(() => {
  updateMenuSelection();

  // 更新索引和方向
  currentIndex += direction;
  if (currentIndex === menuItems.length - 1) {
    direction = -1; // 到达底部时反向
  } else if (currentIndex === 0) {
    direction = 1; // 到达顶部时正向
  }
}, 1000); // 每隔1秒切换
