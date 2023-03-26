window.openBox = product => {
  let element = document.getElementById(product);
  element.classList.add('open');
};

window.closeBox = product => {
  let element = document.getElementById(product);
  element.classList.remove('open');
};
