document.getElementById("btnInput").addEventListener("click", function(){
    let angka = document.getElementById("input").value;
    let jenis = document.getElementById("konversi").value;

if (isNaN(angka)) {
    document.getElementById("hasil").innerText = "Masukan suhu yang valid!"
    return;
    }
    let hasil;

    switch (jenis) {
        case "ckf":
            hasil = (9/5*angka) +32;
            break;
        case "ckr":
            hasil = (4/5*angka);
            break;
        case "fkc":
            hasil = (5/9*(angka-32));
            break;
        case "fkr":
            hasil = (4/9*(angka-32));
            break;
        case "rkc":
            hasil = (5/4*angka);
            break;
        case "rkf":
            hasil = (9/4*angka)+32;
            break;
        default:
            alert("Pilihan tidak valid!");
            return;
    }

    document.getElementById("hasil").innerText = "Hasil Konversi:" + hasil.toFixed(2);
});

