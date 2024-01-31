$(document).ready(function () {
  $("#input").autocomplete(
    {
      source: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      delay: 500,
      minLength: 3,
      autoFocus: false,
    }
  );
});
