$(document).ready(function () {
  $("#btn1").click(function () {
    $("#dialog").dialog("open");
  });

  $("#dialog").dialog({
    title: "Title using property",
    draggable: false,
    resizable: false,
    closeOnEscape: false,
    modal: true,
    autoOpen: false,
  });
});
