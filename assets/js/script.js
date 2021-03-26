//Setting constants for function use
const timeShowEl = $('#now');
const saveBtnEl = $('.saveBtn');
const doneBtnEl = $('.doneBtn');
const hour = $('.hour');
const point = $('#point')


//Sets top of page current date and time
function displayTime() {
    const currentPeriod = moment().format('dddd -  MMM DD, YYYY [@] HH MM a');
    timeShowEl.text(currentPeriod);
  }
  
  setInterval(displayTime, 1000);

//Setting parameters for timing
  function now() {
    const present = moment().hours()
    const time = $('.clock');

   time.each(function () {
      const hour = parseInt($(this).attr('id'))


      if (hour === present) {
        $(this).children('.col-sm-8').attr('class', 'present col-sm-8')
      } else if (present > hour) {
        $(this).children('.col-sm-8').attr('class', 'past col-sm-8')
      } else {
        $(this).children('.col-sm-8').attr('class', 'future col-sm-8')
      }
    })
  }
  now();



  //setting done buttons

  $('#done1').on('click', function (event) {
    event.preventDefault();
    $('#point1').css('color', 'green');
    $('#done1').css('color', 'blue');
  });

  $('#done2').on('click', function (event) {
    event.preventDefault();
    $('#point2').css('color', 'green');
    $('#done2').css('color', 'blue');
  });

  $('#done3').on('click', function (event) {
    event.preventDefault();
    $('#point3').css('color', 'green');
    $('#done3').css('color', 'blue');
  });

  $('#done4').on('click', function (event) {
    event.preventDefault();
    $('#point4').css('color', 'green');
    $('#done4').css('color', 'blue');
  });

  $('#done5').on('click', function (event) {
    event.preventDefault();
    $('#point5').css('color', 'green');
    $('#done5').css('color', 'blue');
  });

  $('#done6').on('click', function (event) {
    event.preventDefault();
    $('#point6').css('color', 'green');
    $('#done6').css('color', 'blue');
  });

  $('#done7').on('click', function (event) {
    event.preventDefault();
    $('#point7').css('color', 'green');
    $('#done7').css('color', 'blue');
  });

  $('#done8').on('click', function (event) {
    event.preventDefault();
    $('#point8').css('color', 'green');
    $('#done8').css('color', 'blue');
  });

  $('#done9').on('click', function (event) {
    event.preventDefault();
    $('#point9').css('color', 'green');
    $('#done9').css('color', 'blue');
  });

  $('#done10').on('click', function (event) {
    event.preventDefault();
    $('#point10').css('color', 'green');
    $('#done10').css('color', 'blue');
  });

  $('#done11').on('click', function (event) {
    event.preventDefault();
    $('#point11').css('color', 'green');
    $('#done11').css('color', 'blue');
  });

  $('#done12').on('click', function (event) {
    event.preventDefault();
    $('#point12').css('color', 'green');
    $('#done12').css('color', 'blue');
  });

  $('#done13').on('click', function (event) {
    event.preventDefault();
    $('#point13').css('color', 'green');
    $('#done13').css('color', 'blue');
  });

  $('#done14').on('click', function (event) {
    event.preventDefault();
    $('#point14').css('color', 'green');
    $('#done14').css('color', 'blue');
  });

  $('#done15').on('click', function (event) {
    event.preventDefault();
    $('#point15').css('color', 'green');
    $('#done15').css('color', 'blue');
  });

  $('#done16').on('click', function (event) {
    event.preventDefault();
    $('#point16').css('color', 'green');
    $('#done16').css('color', 'blue');
  });

  $('#done17').on('click', function (event) {
    event.preventDefault();
    $('#point17').css('color', 'green');
    $('#done17').css('color', 'blue');
  });

  $('#done18').on('click', function (event) {
    event.preventDefault();
    $('#point18').css('color', 'green');
    $('#done18').css('color', 'blue');
  });

  $('#done19').on('click', function (event) {
    event.preventDefault();
    $('#point19').css('color', 'green');
    $('#done19').css('color', 'blue');
  });

  $('#done20').on('click', function (event) {
    event.preventDefault();
    $('#point20').css('color', 'green');
    $('#done20').css('color', 'blue');
  });

  $('#done21').on('click', function (event) {
    event.preventDefault();
    $('#point21').css('color', 'green');
    $('#done21').css('color', 'blue');
  });
  
  $('#done22').on('click', function (event) {
    event.preventDefault();
    $('#point22').css('color', 'green');
    $('#done22').css('color', 'blue');
  });

  $('#done23').on('click', function (event) {
    event.preventDefault();
    $('#point23').css('color', 'green');
    $('#done23').css('color', 'blue');
  });

  $('#done24').on('click', function (event) {
    event.preventDefault();
    $('#point24').css('color', 'green');
    $('#done24').css('color', 'blue');
  });

  $('#done25').on('click', function (event) {
    event.preventDefault();
    $('#point25').css('color', 'green');
    $('#done25').css('color', 'blue');
  });

  $('#done26').on('click', function (event) {
    event.preventDefault();
    $('#point26').css('color', 'green');
    $('#done26').css('color', 'blue');
  });

  $('#done27').on('click', function (event) {
    event.preventDefault();
    $('#point27').css('color', 'green');
    $('#done27').css('color', 'blue');
  });

  $('#done28').on('click', function (event) {
    event.preventDefault();
    $('#point28').css('color', 'green');
    $('#done28').css('color', 'blue');
  });

  $('#done29').on('click', function (event) {
    event.preventDefault();
    $('#point29').css('color', 'green');
    $('#done29').css('color', 'blue');
  });

  $('#done30').on('click', function (event) {
    event.preventDefault();
    $('#point30').css('color', 'green');
    $('#done30').css('color', 'blue');
  });

  $('#done31').on('click', function (event) {
    event.preventDefault();
    $('#point31').css('color', 'green');
    $('#done31').css('color', 'blue');
  });

  $('#done32').on('click', function (event) {
    event.preventDefault();
    $('#point32').css('color', 'green');
    $('#done32').css('color', 'blue');
  });

  $('#done33').on('click', function (event) {
    event.preventDefault();
    $('#point33').css('color', 'green');
    $('#done33').css('color', 'blue');
  });

  $('#done34').on('click', function (event) {
    event.preventDefault();
    $('#point34').css('color', 'green');
    $('#done34').css('color', 'blue');
  });

  $('#done35').on('click', function (event) {
    event.preventDefault();
    $('#point35').css('color', 'green');
    $('#done35').css('color', 'blue');
  });