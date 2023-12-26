// buat fungsi
// ambil nilai username 
// ambil nilai password 
// kita cek apakah username dan password benar dengan yang kita kasih nilainya 
// jika benar berikan alert berhasil login dan arahkan ke file index 
// jika password dan username kosong 
// maka berikan alert password dan internet kosong 
// jika passsword dan username salah 
// tampilkan username dan password salah
function login() {
    var username = document.getElementById("username").value;
    var passsword = document.getElementById("password").value;

    if (username == "admin" && passsword == "123456") {
        alert('Anda Berhasil Login')
        window.location="index.html"
        return false;
    } 
    else if (username == "" || passsword==""){
        alert('username / password tidak boleh kosong')
        return false;
    }
    else{
        alert("username / password yang anda inputkan salah")
    }
}

