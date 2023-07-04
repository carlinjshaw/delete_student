// $: This is the jQuery function, which is used to select elements and perform operations on them.

// (document): This is the argument passed to the jQuery function and represents the document object, which refers to the entire HTML document.

// .ready(): This is a method in jQuery that allows you to specify a function to be executed when the DOM has finished loading. It ensures that the JavaScript code inside the function is executed only after the DOM is ready.
// Add your code here to perform some actions when the button is clicked

//    
    
//     //
//     // 
 
//     //
//     // 
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.//  local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the

$(document).ready(function () {
  //  TODO: Add code to get any user input that was saved in localStorage and set
// TODO: Add a listener for click events on the save button. 
  $('.saveBtn').on('click', function () {
    $('#saved').show();
    document.textContent("saved")
    // get nearby values
    var input = $(this).siblings('.description').val();


    localStorage.setItem(time, input);

  });

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


// TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
  // display current day on page


  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

