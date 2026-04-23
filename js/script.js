document.addEventListener("DOMContentLoaded", function () {

    const art = document.getElementById("art");
    const adresseFeld = document.getElementById("adresseFeld");
    const formular = document.getElementById("spendenForm");

    toggleAdresse();

    art.addEventListener("change", toggleAdresse);

    function toggleAdresse() {
        const kontakt = document.getElementById("kontakt");
        const kontaktFeld = document.getElementById("kontaktFeld");
        if (art.value === "geschaeftsstelle") {
            adresseFeld.style.display = "none";
            kontaktFeld.style.display = "none";
            kontakt.required = false;
        } else {
            adresseFeld.style.display = "block";
            kontaktFeld.style.display = "block";
            kontakt.required = true;
        }
    }
    formular.addEventListener("submit", function (e) {
        e.preventDefault();

        let artValue = document.getElementById("art").value;
        let adresse = document.getElementById("adresse").value;
        let kontakt = document.getElementById("kontakt").value;
        let kleidung = document.getElementById("kleidung").value;
        let krise = document.getElementById("krise").value;

        if (artValue === "abholung") {
            let plz = adresse.substring(0, 2);

            if (plz !== "01") {
                alert("Abholung nur im Bereich der Geschäftsstelle möglich.");
                return;
            }
        }

        localStorage.setItem("art", artValue);
        localStorage.setItem("adresse", adresse);
        localStorage.setItem("kontakt", kontakt);
        localStorage.setItem("kleidung", kleidung);
        localStorage.setItem("krise", krise);
        localStorage.setItem("datum", new Date().toLocaleString());

        window.location.href = "confirm.html";
    });

});