$(document).ready(function() {
      $("#generateCalendar").click(function() {
        // Get the selected date from the form
        var dateInput = $("#date").val();
        if (dateInput === "") {
          alert("Please select a date to generate calendar!");
          return;
        }
        var date = new Date(dateInput);
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        // Create the table elements for the calendar
        $("#calendar").html("");
        var weekdays = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
        var selected = new Date(dateInput).getDate();
        var table = $("<table>");
        var row = $("<tr>");
        // Insert cells for the weekdays
        for (var i = 0; i < 7; i++) {
          var cell = $("<th>").html(weekdays[i]);
          row.append(cell);
        }
        table.append(row);
        var day = 1;
        for (var i = 0; i < 6; i++) {
          row = $("<tr>");
          for (var j = 0; j < 7; j++) {
            var cell = $("<td>");
            if (i === 0) {
              if (j < firstDay.getUTCDay()) {
                cell.html("");
                row.append(cell);
                continue;
              }
            }
            if (day > numDays) {
              cell.html("");
              row.append(cell);
              continue;
            } else {
              if (day === selected) {
                cell.addClass("bold");
              }
              cell.html(day);
              day++;
              row.append(cell);
            }
          }
          table.append(row);
        }
        $("#calendar").append(table);
      });
    });