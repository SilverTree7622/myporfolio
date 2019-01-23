
function mouse_click() {
  var toggle = document.getElementById('inventory');
  if (toggle.style.visibility == 'visible') {
    toggle.style.visiblity = 'hidden';
    console.log('mouse_click function activated');
  }
}
