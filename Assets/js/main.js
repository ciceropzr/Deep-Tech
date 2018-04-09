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
  var socialIcon = document.querySelector('.header-social');
  var cases2 = document.querySelector('.box2');
  var casespan = document.querySelector('.cases-show')

  document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2);
  document.getElementById("cases-show").addEventListener("click", showcases);

  function myFunction() {
    menuList.classList.toggle('--drop-menu')
    socialIcon.classList.toggle('--drop-social')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
    socialIcon.classList.toggle('--drop-social')
  };

  function showcases() {
    cases2.classList.toggle('--drop-cases')
    cases2.classList.toggle('box2')
    casespan.classList.add('down')
    casespan.classList.remove('cases-show')
  };


  var modal = document.getElementById('myModal');  // Get the modal
  var btn = document.getElementById("myBtn");   // Get the button that opens the modal
  var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.classList.toggle('modal-show');
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.classList.toggle('modal-show')
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.toggle('modal-show');
      }
  };
})();