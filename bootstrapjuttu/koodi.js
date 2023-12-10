


function ResetForms() {
    var forms = document.getElementsByTagName('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }
  }

  function laheta() {
    var nimi = document.getElementById('nimi').value;
    var sahkoposti = document.getElementById('sahkoposti').value;
    var puh = document.getElementById('puh').value;
    var palaute = document.getElementById('palaute').value;

    var valittuPizza = document.querySelector('input[name="fav_pizza"]:checked');
    var tilaatkoUudestaan = document.querySelectorAll('input[name="pos"]:checked, input[name="maybe"]:checked, input[name="neg"]:checked');
    var ravintola = document.getElementById('missa').value;

   
    var tuloste = "Kiitos palautteestasi: " + nimi + "<br>";
    tuloste += "Sähköposti: " + sahkoposti + "<br>";
    tuloste += "Puhelinnumero: " + puh + "<br>";
    tuloste += "Palaute: " + palaute + "<br>";
    tuloste += "Paras pizzamme: " + (valittuPizza ? valittuPizza.value : "Ei valittu") + "<br>";

    if (tilaatkoUudestaan.length > 0) {
      tuloste += "Tilaatko uudestaan: ";
      tilaatkoUudestaan.forEach(function (checkbox) {
        tuloste += checkbox.value + " ";
      });
      tuloste += "<br>";
    }

    tuloste += "Missä ravintolassa kävit: " + ravintola + "<br>";

    document.getElementById('vastaus').innerHTML = tuloste;
  }