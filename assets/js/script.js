//Setting constants for function use
const timeShowEl = $('#now');
const saveBtnEl = $('.saveBtn');
const doneBtnEl = $('.doneBtn');
const hour = $('.hour');
const point = $('#point')


//Sets top of page current date and time
function displayTime() {
    const currentPeriod = moment().format('dddd -  MMM DD, YYYY [@] HHmm A');
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
      }
      else if (present == hour-1) {
        $(this).children('.col-sm-8').attr('class', 'almost col-sm-8')
      } 
      else if (present > hour) {
        $(this).children('.col-sm-8').attr('class', 'past col-sm-8')
      } else {
        $(this).children('.col-sm-8').attr('class', 'future col-sm-8')
      }
    })
  }
  now();

//Store saved data for schedule
saveBtnEl.on('click', function (event) {
    event.preventDefault();
    function createItem() {
        localStorage.setItem('schedule', $('.taskDue')); 
    } 
    createItem() 
    
    function getValue() {
        return localStorage.getItem('nameOfItem');  
    } 
    console.log(getValue()); 
});

  //setting done buttons

  $('#done1').on('click', function (event) {
    event.preventDefault();
    $('#point1').css('color', 'green');
    $('#done1').css('color', 'blue');
    $('#00').css('text-decoration', 'line-through')
  });

  $('#donea').on('click', function (event) {
    event.preventDefault();
    $('#pointa').css('color', 'green');
    $('#donea').css('color', 'blue');
    $('#01').css('text-decoration', 'line-through')
  });

  $('#doneb').on('click', function (event) {
    event.preventDefault();
    $('#pointb').css('color', 'green');
    $('#doneb').css('color', 'blue');
    $('#02').css('text-decoration', 'line-through')
  });

  $('#donec').on('click', function (event) {
    event.preventDefault();
    $('#pointc').css('color', 'green');
    $('#donec').css('color', 'blue');
    $('#03').css('text-decoration', 'line-through')
  });

  $('#doned').on('click', function (event) {
    event.preventDefault();
    $('#pointd').css('color', 'green');
    $('#doned').css('color', 'blue');
    $('#04').css('text-decoration', 'line-through')
  });

  $('#donee').on('click', function (event) {
    event.preventDefault();
    $('#pointe').css('color', 'green');
    $('#donee').css('color', 'blue');
    $('#05').css('text-decoration', 'line-through')
  });

  $('#donef').on('click', function (event) {
    event.preventDefault();
    $('#pointf').css('color', 'green');
    $('#donef').css('color', 'blue');
    $('#06').css('text-decoration', 'line-through')
  });

  $('#done2').on('click', function (event) {
    event.preventDefault();
    $('#point2').css('color', 'green');
    $('#done2').css('color', 'blue');
    $('#7').css('text-decoration', 'line-through')
  });

  $('#done3').on('click', function (event) {
    event.preventDefault();
    $('#point3').css('color', 'green');
    $('#done3').css('color', 'blue');
    $('#7a').css('text-decoration', 'line-through')
  });

  $('#done4').on('click', function (event) {
    event.preventDefault();
    $('#point4').css('color', 'green');
    $('#done4').css('color', 'blue');
    $('#8').css('text-decoration', 'line-through')
  });

  $('#done5').on('click', function (event) {
    event.preventDefault();
    $('#point5').css('color', 'green');
    $('#done5').css('color', 'blue');
    $('#8a').css('text-decoration', 'line-through')
  });

  $('#done6').on('click', function (event) {
    event.preventDefault();
    $('#point6').css('color', 'green');
    $('#done6').css('color', 'blue');
    $('#9').css('text-decoration', 'line-through')
  });

  $('#done7').on('click', function (event) {
    event.preventDefault();
    $('#point7').css('color', 'green');
    $('#done7').css('color', 'blue');
    $('#9a').css('text-decoration', 'line-through')
  });

  $('#done8').on('click', function (event) {
    event.preventDefault();
    $('#point8').css('color', 'green');
    $('#done8').css('color', 'blue');
    $('#10').css('text-decoration', 'line-through')
  });

  $('#done9').on('click', function (event) {
    event.preventDefault();
    $('#point9').css('color', 'green');
    $('#done9').css('color', 'blue');
    $('#10a').css('text-decoration', 'line-through')
  });

  $('#done10').on('click', function (event) {
    event.preventDefault();
    $('#point10').css('color', 'green');
    $('#done10').css('color', 'blue');
    $('#11').css('text-decoration', 'line-through')
  });

  $('#done11').on('click', function (event) {
    event.preventDefault();
    $('#point11').css('color', 'green');
    $('#done11').css('color', 'blue');
    $('#11a').css('text-decoration', 'line-through')
  });

  $('#done12').on('click', function (event) {
    event.preventDefault();
    $('#point12').css('color', 'green');
    $('#done12').css('color', 'blue');
    $('#12').css('text-decoration', 'line-through')
  });

  $('#done13').on('click', function (event) {
    event.preventDefault();
    $('#point13').css('color', 'green');
    $('#done13').css('color', 'blue');
    $('#12a').css('text-decoration', 'line-through')
  });

  $('#done14').on('click', function (event) {
    event.preventDefault();
    $('#point14').css('color', 'green');
    $('#done14').css('color', 'blue');
    $('#13').css('text-decoration', 'line-through')
  });

  $('#done15').on('click', function (event) {
    event.preventDefault();
    $('#point15').css('color', 'green');
    $('#done15').css('color', 'blue');
    $('#13a').css('text-decoration', 'line-through')
  });

  $('#done16').on('click', function (event) {
    event.preventDefault();
    $('#point16').css('color', 'green');
    $('#done16').css('color', 'blue');
    $('#14').css('text-decoration', 'line-through')
  });

  $('#done17').on('click', function (event) {
    event.preventDefault();
    $('#point17').css('color', 'green');
    $('#done17').css('color', 'blue');
    $('#14a').css('text-decoration', 'line-through')
  });

  $('#done18').on('click', function (event) {
    event.preventDefault();
    $('#point18').css('color', 'green');
    $('#done18').css('color', 'blue');
    $('#15').css('text-decoration', 'line-through')
  });

  $('#done19').on('click', function (event) {
    event.preventDefault();
    $('#point19').css('color', 'green');
    $('#done19').css('color', 'blue');
    $('#15a').css('text-decoration', 'line-through')
  });

  $('#done20').on('click', function (event) {
    event.preventDefault();
    $('#point20').css('color', 'green');
    $('#done20').css('color', 'blue');
    $('#16').css('text-decoration', 'line-through')
  });

  $('#done21').on('click', function (event) {
    event.preventDefault();
    $('#point21').css('color', 'green');
    $('#done21').css('color', 'blue');
    $('#16a').css('text-decoration', 'line-through')
  });
  
  $('#done22').on('click', function (event) {
    event.preventDefault();
    $('#point22').css('color', 'green');
    $('#done22').css('color', 'blue');
    $('#17').css('text-decoration', 'line-through')
  });

  $('#done23').on('click', function (event) {
    event.preventDefault();
    $('#point23').css('color', 'green');
    $('#done23').css('color', 'blue');
    $('#17a').css('text-decoration', 'line-through')
  });

  $('#done24').on('click', function (event) {
    event.preventDefault();
    $('#point24').css('color', 'green');
    $('#done24').css('color', 'blue');
    $('#18').css('text-decoration', 'line-through')
  });

  $('#done25').on('click', function (event) {
    event.preventDefault();
    $('#point25').css('color', 'green');
    $('#done25').css('color', 'blue');
    $('#18a').css('text-decoration', 'line-through')
  });

  $('#done26').on('click', function (event) {
    event.preventDefault();
    $('#point26').css('color', 'green');
    $('#done26').css('color', 'blue');
    $('#19').css('text-decoration', 'line-through')
  });

  $('#done27').on('click', function (event) {
    event.preventDefault();
    $('#point27').css('color', 'green');
    $('#done27').css('color', 'blue');
    $('#19a').css('text-decoration', 'line-through')
  });

  $('#done28').on('click', function (event) {
    event.preventDefault();
    $('#point28').css('color', 'green');
    $('#done28').css('color', 'blue');
    $('#20').css('text-decoration', 'line-through')
  });

  $('#done29').on('click', function (event) {
    event.preventDefault();
    $('#point29').css('color', 'green');
    $('#done29').css('color', 'blue');
    $('#20a').css('text-decoration', 'line-through')
  });

  $('#done30').on('click', function (event) {
    event.preventDefault();
    $('#point30').css('color', 'green');
    $('#done30').css('color', 'blue');
    $('#21').css('text-decoration', 'line-through')
  });

  $('#done31').on('click', function (event) {
    event.preventDefault();
    $('#point31').css('color', 'green');
    $('#done31').css('color', 'blue');
    $('#21a').css('text-decoration', 'line-through')
  });

  $('#done32').on('click', function (event) {
    event.preventDefault();
    $('#point32').css('color', 'green');
    $('#done32').css('color', 'blue');
    $('#22').css('text-decoration', 'line-through')
  });

  $('#done33').on('click', function (event) {
    event.preventDefault();
    $('#point33').css('color', 'green');
    $('#done33').css('color', 'blue');
    $('#22a').css('text-decoration', 'line-through')
  });

  $('#done34').on('click', function (event) {
    event.preventDefault();
    $('#point34').css('color', 'green');
    $('#done34').css('color', 'blue');
    $('#23').css('text-decoration', 'line-through')
  });

  $('#done35').on('click', function (event) {
    event.preventDefault();
    $('#point35').css('color', 'green');
    $('#done35').css('color', 'blue');
    $('#23a').css('text-decoration', 'line-through')
  });