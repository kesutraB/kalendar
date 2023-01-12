$(document).ready(function() {
      $("#generovatKalendar").click(function() {
        var zadaneDatum = $("#date").val();
        if (zadaneDatum === "") {
          alert("Vyber datum aby se mohl vygenerovat kalendář.");
          return;
        }
        var datum = new Date(zadaneDatum);
        var firstDay = new Date(datum.getFullYear(), datum.getMonth(), 1);
        var dnyMesice = new Date(datum.getFullYear(), datum.getMonth() + 1, 0).getDate();
        $("#kalendar").html("");
        var dnyTydnu = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
        var vybraneDatum = new Date(zadaneDatum).getDate();
        var tabulka = $("<table>");
        var radek = $("<tr>");
        for (var i = 0; i < 7; i++) {
          var cell = $("<th>").html(dnyTydnu[i]);
          radek.append(cell);
        }
        tabulka.append(radek);
        var den = 1;
        for (var i = 0; i < 6; i++) {
          radek = $("<tr>");
          for (var j = 0; j < 7; j++) {
            var cell = $("<td>");
            if (i === 0) {
              if (j < firstDay.getUTCDay()) {
                cell.html("");
                radek.append(cell);
                continue;
              }
            }
            if (den > dnyMesice) {
              cell.html("");
              radek.append(cell);
              continue;
            } else {
              if (den === vybraneDatum) {
                cell.addClass("bold");
              }
              cell.html(den);
              den++;
              radek.append(cell);
            }
          }
          tabulka.append(radek);
        }
        $("#kalendar").append(tabulka);
      });
    });