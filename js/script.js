// to calculate the BMI
function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight && height) {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    document.getElementById("bmi-value").innerText = bmi;

    let resultText = "";
    let description = "";
    if (bmi < 18.5) {
      resultText = "Kekurangan berat badan";
      description =
        "Anda berada dalam kategori kekurangan berat badan. Untuk mengatasi kondisi ini, ada beberapa langkah yang bisa Anda lakukan guna menaikkan berat badan dengan cara yang sehat dan berkelanjutan. Cara terbaik untuk menaikkan berat badan adalah dengan meningkatkan asupan kalori dan nutrisi secara seimbang.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText = "Normal (ideal)";
      description =
        "Anda berada dalam kategori berat badan ideal, yang merupakan indikasi bahwa Anda telah menjaga keseimbangan antara asupan kalori dan aktivitas fisik dengan baik. Namun, untuk mempertahankan kondisi tubuh yang sehat ini, penting untuk terus mempraktikkan pola makan yang sehat dan rutin berolahraga.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText = "Kelebihan berat badan";
      description =
        "Anda berada dalam kategori kelebihan berat badan. Hal ini menandakan bahwa berat badan Anda berada di atas kisaran yang dianggap sehat untuk tinggi badan Anda. Untuk menurunkan berat badan hingga batas normal dan meningkatkan kesehatan secara keseluruhan, ada beberapa langkah yang bisa Anda ambil. Mengatur pola makan dan rutin berolahraga adalah dua kunci utama dalam mencapai tujuan ini.";
    } else {
      resultText = "Kegemukan (Obesitas)";
      description =
        "Anda berada dalam kategori kegemukan (obesitas). Kondisi ini menunjukkan bahwa berat badan Anda jauh di atas kisaran yang dianggap sehat untuk tinggi badan Anda. Obesitas dapat meningkatkan risiko berbagai masalah kesehatan serius, seperti penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan beberapa jenis kanker. Oleh karena itu, sangat penting untuk segera melakukan konsultasi dengan ahli gizi dan dokter untuk mendapatkan penanganan yang tepat dan efektif.";
    }

    document.getElementById("bmi-status").innerText = resultText;
    document.getElementById("bmi-description").innerText = description;
  } else {
    alert("Mohon isi semua bidang!");
  }
}

// to reset form
function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";
  document.getElementById("bmi-value").innerText = "";
  document.getElementById("bmi-result").children[0].innerText = "";
  document.getElementById("bmi-result").children[2].innerText = "";
}

// to download the result
function downloadBMIResult() {
  const bmiValue = document.getElementById("bmi-value").innerText;
  const bmiStatus = document.getElementById("bmi-status").innerText;
  const bmiDescription = document.getElementById("bmi-description").innerText;

  const result = `BMI: ${bmiValue}\nStatus: ${bmiStatus}\nDescription: ${bmiDescription}`;
  const blob = new Blob([result], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Hasil_BMI.txt";
  link.click();
}
