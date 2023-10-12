let bilPertama = document.getElementById("pertama");
let bilKedua = document.getElementById("kedua");
let form = document.getElementById("pendaftaran");
let inputNama = document.getElementById("nama");
let inputEmail = document.getElementById("email");
let inputAlamat = document.getElementById("alamat");

function jumlahkan() {
  let hasil = parseFloat(bilPertama.value) + parseFloat(bilKedua.value);
  console.log(
    "Bilangan pertama: " + parseFloat(bilPertama.value),
    "\nBilangan kedua:" + parseFloat(bilKedua.value),
    "\nhasil penjumlahan:" + hasil
  );
  if (!isNaN(hasil)) {
    console.log("Alert sukses");
    alert("Hasil Penjumlahan = " + hasil);
  } else {
    console.log("Alert gagal");
    alert("mohon diisi terlebih dahulu");
  }
}

function hapus() {
  bilPertama.value = "";
  bilKedua.value = "";
}

form.addEventListener("submit", () => {
  if (
    inputNama.value === "" ||
    inputEmail.value === "" ||
    inputAlamat.value === ""
  ) {
    alert("Anda harus mengisi data dengan lengkap !");
  } else {
    alert("Success, Data pendaftaran dikirim!");
  }
});
