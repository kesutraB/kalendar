$(document).ready(function () {
  $("#generateCalendar").click(function () {
    var dateInput = $("#date").val();
    if (dateInput === "") {
      alert("Vyberte datum aby se mohl vygenerovat kalendář.");
      return;
    }
    var date = new Date(dateInput);
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var weekdays = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
    var selected = new Date(dateInput).getDate();
    $("#weekdays").html("");
    for (var i = 0; i < 7; i++) {
      $("#weekdays").append("<th>" + weekdays[i] + "</th>");
    }
    $("#days").html("");
    var day = 1;
    for (var i = 0; i < 6; i++) {
      var row = $("<tr>");
      for (var j = 0; j < 7; j++) {
        var cell = $("<td>");
        if (i === 0) {
          if (j < firstDay.getUTCDay() - 1) {
            cell.html("");
            row.append(cell);
            continue;
          }
        }
        if (day > numDays) {
          cell.html("");
          row.append(cell);
        } else {
          if (day === selected) {
            cell.addClass("bold");
          }
          cell.html(day);
          row.append(cell);
          day++;
        }
      }
      $("#days").append(row);
    }
  });
});