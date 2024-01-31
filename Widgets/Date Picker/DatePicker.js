$(document).ready(function () {
  $("#date").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    minDate: new Date(2003, 9, 19),
    maxDate: new Date(2024, 9, 19),
    numberOfMonths: 1,
  });
});
