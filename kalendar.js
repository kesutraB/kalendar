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
  });
});