$(document).ready(function () {
  $("#dialog").dialog({
    draggable: true,
    resizable: true,
    closeOnEscape: true,
    modal: false,
    autoOpen: true,
    height: 250,
    width: 250,
  });

  $("#btn1").click(function () {
    var modal = $("#dialog").dialog("option", "height");
    alert(modal);
  });

  $("#btn2").click(function () {
    $("#dialog").dialog("option", "height", 300);
    alert("Success!");
  });
});
