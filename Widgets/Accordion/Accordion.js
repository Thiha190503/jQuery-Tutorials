$(document).ready(function () {
  $("#div1").accordion({
    collapsible: true,
    icons: {
      header: "ui-icon-triangle-1-s",
      activeHeader: "ui-icon-triangle-1-e",
    },
    animate: 2000,
    event: "mouseover",
  });
});
