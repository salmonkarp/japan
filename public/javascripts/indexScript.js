window.addEventListener('load', function() {
  var errorMessage = document.getElementById('error-message');
  
  function checkScreenWidth() {
      if (window.innerWidth <= 1400) {
          var elementsToHide = document.body.children;
          for (var i = 0; i < elementsToHide.length; i++) {
              elementsToHide[i].style.display = 'none';
          }
          errorMessage.style.display = 'block';
      } else {
          errorMessage.style.display = 'none';
      }
  }
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

document.addEventListener('DOMContentLoaded', function () {
  const heading = document.getElementById('vertical-text');
  const text = heading.innerText;
  heading.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('div');
    span.innerText = text[i];
    heading.appendChild(span);
  }
  const menu = document.getElementById("main")

  Array.from(document.getElementsByClassName("link"))
    .forEach((item, index) => {
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
      }
    })
});

var outClick = false;

function animateTransition(section) {
  // Move the images and links upwards out of the page
  document.getElementById('main').style.marginTop = '-50%';
  document.getElementById(section).style.top = '-2.5%'
  outClick = false;
}

function animateTransitionBack(section) {
  // Move the images and links upwards out of the page
  document.getElementById(section).style.top = '100%';
  document.getElementById('main').style.marginTop = '-2.5%';
  handleBackHoverOut();
}

function handleBackHover() {
  document.querySelector('.background-pattern').style.opacity = '60%';
  document.querySelector('.background-pattern').style.backgroundSize = '20vmin 20vmin';
  document.querySelector('.background-image').style.opacity = '0.1';
  document.querySelector('.background-image').style.backgroundSize = '220vh';
}



function handleBackHoverOut() {
  console.log('achieved')
  if (outClick == false) {
    console.log('usual out')
    document.querySelector('.background-pattern').style.opacity = '35%';
    document.querySelector('.background-pattern').style.backgroundSize = '25vmin 25vmin';
    document.querySelector('.background-image').style.opacity = '0.2';
    document.querySelector('.background-image').style.backgroundSize = '200vh';
  }
}

function realHandleBackHoverOut() {
  outClick = true;
  console.log('out achieved')
  document.querySelector('.background-pattern').style = '';
  document.querySelector('.background-image').style = '';
}

