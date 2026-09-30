function hitungUsia(tahunLahir){
    const tahunSekarang = new Date().getFullYear();
    const usia = tahunSekarang-tahunLahir;
    return usia;
}
document.getElementById('formUsia').addEventListener('submit', function(event){
    event.preventDefault();

    const tahunLahirInput = document.getElementById('tahunLahir').value;
    const tahunLahir = parseInt(tahunLahirInput, 10);
    if (isNaN(tahunLahir)||tahunLahir<=0) {
        document.getElementById('hasil').innerText = "Masukan Tahun Lahir yang Valid!";
        return
    }
    const usia = hitungUsia(tahunLahir);
    if (tahunLahir < 0) {
        document.getElementById('hasil').innerText="Tahun Lahir lebih besar dari tahun sekarang!";
    }else if (tahunLahir >1 && tahunLahir < 1900) {
        document.getElementById('hasil').innerText="Tahun Lahir tidak masuk akal untuk saat ini!";
    } 
    else{
        document.getElementById('hasil').innerText=`Usia Anda adalah ${usia} tahun.`;
    }
});