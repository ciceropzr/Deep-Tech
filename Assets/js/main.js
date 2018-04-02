(function() {

  let header = document.querySelector(".header-container");
  let isScrolling;
  let section = document.querySelectorAll('section');
  let sections = {};
  let sectionItem = 0;
  let home = document.querySelector(".home");

  window.addEventListener('scroll', function ( event ) {
    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(function() {
      header.classList.add('fade-in');
    }, 66);

    if(isScrolling) {
      header.classList.remove('fade-in')
    }
  }, false);

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (sectionItem in sections) {
      if ((sections[sectionItem]) - 100 <= scrollPosition) {
        if (sectionItem === 'home') {
          header.classList.add('hidden')
        }
        else {
          header.classList.remove('hidden')
        }
      }
    }
  };

  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  var socialIcon = document.querySelector('.header-social')

  document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2); 

  function myFunction() {
    menuList.classList.toggle('--drop-menu')
    socialIcon.classList.toggle('--drop-social')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
  };
})();