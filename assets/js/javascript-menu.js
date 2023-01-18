

  // menu for mobile & tablet
  if (window.matchMedia('(max-width: 768px)').matches) {
    function openNav(){
      var open = document.getElementById('mobileNav');
      open.style.width = '100%';
    }
  
    function closeNav(){
      var close = document.getElementById('mobileNav');
      close.style.width = '0';
    }
  } else {
    function openNav(){
      var open = document.getElementById('mobileNav');
      open.style.width = '50%';
    }
  
    function closeNav(){
      var close = document.getElementById('mobileNav');
      close.style.width = '0';
    }
  }


