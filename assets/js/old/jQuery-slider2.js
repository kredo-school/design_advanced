$(function(){





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








});