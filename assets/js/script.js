//Setting constants for function use
const timeShowEl = $('#now');
const saveBtnEl = $('.saveBtn');
const doneBtnEl = $('.doneBtn');


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

  //setting local storage

 
  

