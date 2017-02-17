// //Add a click handler for your img.
// When users click on your photo on  your profile page,
// a previously-hidden blurb should be revealed with a jQuery animation

$('#mainimage img').on('click', function(){
  $('#mainimage img').hide();
  $('#myBlurb').show();
})

$('#myBlurb').on('click', function(){
  $('#myBlurb').hide();
  $('#mainimage img').show();
})
