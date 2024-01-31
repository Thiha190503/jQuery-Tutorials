$(document).ready(function () {
  $(".sort").sortable({
    opacity: 0.5,
    cursor: "grabbing",
    containment: "parent",
    delay: 300,
    distance: 50,
  });
});
