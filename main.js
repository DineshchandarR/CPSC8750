const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const experienceMenu = document.querySelector('#experience-page');
  const projectMenu = document.querySelector('#project-page');
  const eduMenu = document.querySelector('#edu-page');
  const skillsMenu = document.querySelector('#skills-page');
  const awardsMenu = document.querySelector('#awards-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) 
  {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 1400) 
  {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    experienceMenu.classList.remove('highlight');
    projectMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 2300) 
  {
    experienceMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    projectMenu.classList.remove('highlight');
    awardsMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 2700) 
  {
    aboutMenu.classList.remove('highlight');
    experienceMenu.classList.remove('highlight');
    skillsMenu.classList.remove('highlight');
    awardsMenu.classList.add('highlight');
    projectMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 3590) 
  {
    experienceMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    projectMenu.classList.add('highlight');
    eduMenu.classList.remove('highlight');
    awardsMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 4400) 
  {
    aboutMenu.classList.remove('highlight');
    experienceMenu.classList.remove('highlight');
    awardsMenu.classList.remove('highlight');
    projectMenu.classList.remove('highlight');
    eduMenu.classList.add('highlight');
    skillsMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 6700) 
  {
    awardsMenu.classList.remove('highlight');
    projectMenu.classList.remove('highlight');
    eduMenu.classList.remove('highlight');
    skillsMenu.classList.add('highlight');
    return;
  }
  // else if (window.innerWidth > 960 && scrollPos < 6700) 
  // {
  //   eduMenu.classList.remove('highlight');
  //   skillsMenu.classList.remove('highlight');
  //   awardsMenu.classList.add('highlight');
  //   return;
  // }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


