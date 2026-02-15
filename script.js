function checkPassword() {
  const pass = document.getElementById('password').value;
  const user = document.getElementById('username').value;
  const result = document.getElementById('result');
  
  let strength = 0;
  let messages = [];
  
  if (pass.length < 8) {
    messages.push("Terlalu pendek! Minimal 12 karakter lebih baik.");
  } else {
    strength += 20;
  }
  
  if (/[A-Z]/.test(pass)) strength += 20;
  else messages.push("Tambah huruf besar (uppercase).");
  
  if (/[a-z]/.test(pass)) strength += 20;
  else messages.push("Tambah huruf kecil (lowercase).");
  
  if (/\d/.test(pass)) strength += 20;
  else messages.push("Tambah angka.");
  
  if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength += 20;
  else messages.push("Tambah simbol khusus (!@#$ dll).");
  
  if (pass.toLowerCase().includes(user.toLowerCase())) {
    messages.push("Jangan pakai username di password!");
    strength -= 30;
  }
  
  let scoreText = "";
  let color = "";
  
  if (strength >= 80) {
    scoreText = "KUAT BANGET! 💪 (Score: " + strength + "/100)";
    color = "#22c55e"; // hijau
  } else if (strength >= 50) {
    scoreText = "CUKUP, tapi bisa lebih kuat (Score: " + strength + "/100)";
    color = "#eab308"; // kuning
  } else {
    scoreText = "LEMAH! Rawan dibobol 😱 (Score: " + strength + "/100)";
    color = "#ef4444"; // merah
  }
  
  result.innerHTML = `<span style="color:\( {color}"> \){scoreText}</span><br><br>` +
                     (messages.length > 0 ? "Saran perbaikan:<br>- " + messages.join("<br>- ") : "Bagus! Lanjutkan pakai pola ini.");
}