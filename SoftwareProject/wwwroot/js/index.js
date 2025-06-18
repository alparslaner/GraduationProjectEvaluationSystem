  // Firebase projenizin yapılandırması
  const firebaseConfig = {
  //API
  };

  // Firebase'i başlat
  firebase.initializeApp(firebaseConfig);

  // Form submit olduğunda
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Formdaki dosya
    const file = document.querySelector('input[type=file]').files[0];
    const username = document.querySelector('input[name=Student]').value;

    // Dosya adı
    const fileName = file.name;

    // Storage referansı oluştur
    const storageRef = firebase.storage().ref(`evaluation-project/Project/GraduationProject/${username}/${fileName}`);

    // Dosyayı yükle
    const task = storageRef.put(file);

    // Yükleme işlemi tamamlandığında
    task.then(snapshot => {
      console.log('Dosya yüklendi');
      alert('Dosya yüklendi');
      // Burada başka işlemler yapabilirsiniz, örneğin veritabanına dosya yolunu kaydedebilirsiniz.
    }).catch(error => {
      console.error('Hata:', error);
      alert('Dosya yüklenirken bir hata oluştu');
    });
  });


document.addEventListener("DOMContentLoaded", function () {
    // Tarih alanını seç
    var submittedDateField = document.getElementById("SubmittedDate");

    // Bugünün tarihini al
    var today = new Date();

    // Yıl, ay ve günü al
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, "0"); // Ay 0'dan başlar, bu yüzden +1 ekliyoruz ve iki haneli olarak formatlıyoruz
    var day = String(today.getDate()).padStart(2, "0"); // Günü iki haneli olarak formatlıyoruz

    // YYYY-MM-DD formatında tarihi oluştur
    var formattedDate = year + "-" + month + "-" + day;

    // Tarih alanına bugünkü tarihi yerleştir
    submittedDateField.value = formattedDate;
});

document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Formun gönderilmesi işlemini burada yapılacak!

    alert("Projeniz Gönderilmiştir");
});