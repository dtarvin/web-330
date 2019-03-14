function typeWriter(text, n) {
    if (n < (text.length)) {
      $('.test').html(text.substring(0, n+1));
      n++;
      setTimeout(function() {
        typeWriter(text, n)
      }, 100);
    }
  }
  
  var text = $('.test').data('text');
  typeWriter(text, 0);
  
  
//   function bubblesFadingInAndOut() {
//     $('.bubble1').fadeIn(2000);
//     setTimeout(function() {
//       $('.bubble1').fadeOut(2000, function() {
//         $('.bubble2').fadeIn(2000);
//         setTimeout(function() {
//           $('.bubble2').fadeOut(2000, function() {
//             $('.bubble3').fadeIn(2000);
//             setTimeout(function() {
//               $('.bubble3').fadeOut(2000);
//             }, 5000);          
//           });
//         }, 5000);
//       });
//       }, 5000);
//     }
  
  bubblesFadingInAndOut();
  