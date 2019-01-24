
function mouse_click() {
  var toggle = document.getElementById('inventory');
  if (toggle.style.display == 'visible') {
    toggle.style.display = 'hidden';
    console.log('mouse_click function activated');
  }
}
