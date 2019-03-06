

let raf = window.requestAnimationFrame;
let transform = [`transform`];
let transformProperty = getSupportPropertyName(transform);

let imageContainer = document.querySelector('#parallaxContainer');
let scrolling = false;
let mouseWheelActive = false;

let count = 0;
let mouseDelta = 0;


function getSupportPropertyName(props) {
  for (let i = 0; i <props.length ; i++) {
    if (typeof document.body.style[props[i]] !== "undefined"){
      return props[i];
    }
  }
  return null;
}

function setup() {
  window.addEventListener(`scroll`, setScrolling, false);

  window.addEventListener(`mousewheel`, mouseScroll, false);
  window.addEventListener(`DOMMouseScroll`, mouseScroll, false);
  animationLoop();
}
setup();

function mouseScroll(e) {
  mouseWheelActive = true;

  if (e.preventDefault){
    e.preventDefault();
  }
  
  if (e.wheelDelta){
    mouseDelta = e.wheelDelta / 160;
  } else if (e.detail) {
    mouseDelta = -e.detail / 3;
  } 
}

function setScrolling() {
  scrolling = true;
}

function getScrollPosition() {
  if (document.documentElement.scrollTop === 0) {
    return document.body.scrollTop;
  } else {
    return document.documentElement.scrollTop;
  }
}

function setTranslate3DTransform(element, yPosition) {
  element.style[transformProperty] = `translate3d(0px, ${yPosition}px, 0)`;
}

function animationLoop() {
  if (scrolling) {
    setTranslate3DTransform(imageContainer, -1 * getScrollPosition() / 2);
    scrolling = false;
  }

  if (mouseWheelActive) {
    window.scrollBy(0, -mouseDelta * 10);
    count++;

    if (count > 20) {
      count = 0;
      mouseWheelActive = false;
      mouseDelta = 0;
    }
  }
  requestAnimationFrame(animationLoop);
}
