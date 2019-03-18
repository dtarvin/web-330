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


  // function bubblesFadingInAndOut() {
  //   $('.bubble1').fadeIn(1000);
  //   setTimeout(function() {
  //     $('.bubble1').fadeOut(1000, function() {
  //       $('.bubble2').fadeIn(1000);
  //       setTimeout(function() {
  //         $('.bubble2').fadeOut(1000, function() {
  //           $('.bubble3').fadeIn(1000);
  //           setTimeout(function() {
  //             $('.bubble3').fadeOut(1000, function() {
  //               $('.after-bubbles').fadeIn(1000);
  //             });
  //           }, 3000);
  //         });

  //       }, 3000);
  //     });
  //     }, 3000);
  //   }

  $('.bubble1').fadeIn(1000);
  setTimeout(function() {
    $('.bubble1').fadeOut(1000);
  }, 3000);

  setTimeout(function() {
    $('.bubble2').fadeIn(1000);
    setTimeout(function() {
      $('.bubble2').fadeOut(1000, function() {
        $('div').remove('.container1');
      });
    }, 3000);
  }, 5000);

  setTimeout(function() {
    // $('div').remove('.container1');
    $('.bubble3').fadeIn(1000);
    setTimeout(function() {
      $('.bubble3').fadeOut(1000, function() {
        $('div').remove('.container2');
      });
    }, 3000);
  }, 10000);

