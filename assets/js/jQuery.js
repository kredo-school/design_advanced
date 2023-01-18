$(function(){
// LP menu open & close button

  $('#open').click(function(){
    $(this).hide();
    $('#close').show();
  })
  $('#close').click(function(){
    $(this).hide();
    $('#open').show();
  })

// LP menu animation

  $('.overlay ul li').hover(
    function(){
      $(this).css('width','110%');
    },
    function(){
      $(this).css('width','100%');
    }
  );


// header-logo animation
  $('header a img').hover(
    function(){   
      $(this).toggleClass('rotate-logo');
    });

// LP sec-2 slider
  // auto slide

  function auto_slide(){
    interval = setInterval(function(){
      moveRight();
    },5000);//4seconds
  }

  auto_slide();

  // hover

  $('#slider ul li').hover(function(){
    clearInterval(interval);
  }, function(){
    auto_slide();
  });

  // slider

  var sliderWidth = $('#slider ul li').width();
  // console.log(sliderWidth);
  var sliderHeight = $('#slider ul li').height();
  // console.log(sliderHeight);
  var slideCount = $('#slider ul li').length;   //how many li
  console.log(slideCount);

  var sliderUIWidth = sliderWidth * slideCount;

  $('#slider').css({
    width: sliderWidth,
    height: sliderHeight
  });
  $('#slider ul').css({
    width: sliderUIWidth,
    height: sliderHeight,
    marginLeft: -sliderWidth
  });
  $('#slider ul li').last().prependTo('#slider ul');

  function moveLeft(){
    $('#slider ul').animate({
      left: sliderWidth,
    },'slow', function(){
      // alert('move next li');
      $('#slider ul li').last().prependTo('#slider ul');
      $('#slider ul').css('left', '0');
    })
  }

  function moveRight(){
    $('#slider ul').animate({
      left: -sliderWidth,
    },'slow', function(){
      // alert('move next li');
      $('#slider ul li').first().appendTo('#slider ul');
      $('#slider ul').css('left', '0');
    })
  }

  //buttons

 $('a.control_prev').click(function(){
  moveLeft();
  // alert('clicked');
 });
 $('a.control_next').click(function(){
  moveRight();
  // alert('clicked');
 });

//  LP menus
$('.about').hover(
  function(){
    $(this).css({
      background: 'url(images/about.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-1.jpg)');
  }
);

$('.rooms').hover(
  function(){
    $(this).css({
      background: 'url(images/rooms.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-2.jpg)');
  }
);

$('.restaurants').hover(
  function(){
    $(this).css({
      background: 'url(images/restaurants.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-1.jpg)');
  }
);

$('.poolbeach').hover(
  function(){
    $(this).css({
      background: 'url(images/pool.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-2.jpg)');
  }
);

$('.spa').hover(
  function(){
    $(this).css({
      background: 'url(images/spa.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-1.jpg)');
  }
);

$('.other').hover(
  function(){
    $(this).css({
      background: 'url(images/other-laundry.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-2.jpg)');
  }
);

$('.activities').hover(
  function(){
    $(this).css({
      background: 'url(images/activities.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-1.jpg)');
  }
);

$('.access').hover(
  function(){
    $(this).css({
      background: 'url(images/map.png)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-2.jpg)');
  }
);

$('.reservation').hover(
  function(){
    $(this).css({
      background: 'url(images/headerimg-1.jpg)',
      backgroundSize: 'cover',
      transition: '1000ms'
    });
  },
  function(){
    $(this).css('background','url(images/menuicon-1.jpg)');
  }
);

// $('#faq').hover(
//   function(){
//     $(this).animate({
//       width: '+=1%'
//     });
//   },
//   function(){
//     $(this).animate({
//       width: '-=1%'
//     });
//   }



// LP wedding
 $('#clickhere').click(function(){
  $(this).text('We wish you both happiness forever!')
 });



// contents page
  $('#read-1').click(function(){
    $('#read-1-detail').slideToggle();
    $(this).hide();
    $('#read-1-down').show()
  });
  $('#read-1-down').click(function(){
    $('#read-1-detail').slideToggle();
    $(this).hide();
    $('#read-1').show()
  });


  $('#read-2').click(function(){
    $('#read-2-detail').slideToggle();
    $(this).hide();
    $('#read-2-down').show()
  });
  $('#read-2-down').click(function(){
    $('#read-2-detail').slideToggle();
    $(this).hide();
    $('#read-2').show()
  });


// table for rooms tabbing
  $('.one-bed').click(function(){
    $('#one-bed').show();
    $('#two-bed').hide();
  })
  $('.two-bed').click(function(){
    $('#one-bed').hide();
    $('#two-bed').show().css('display', 'flex');
  })

// modal for rooms page
  
    $('#modal-btn-1').click(function(){
      $('#modal-1').show();
      // alert('hello');
    });
    $('#modal-btn-2').click(function(){
      $('#modal-2').show();
      // alert('hello');
    });







});