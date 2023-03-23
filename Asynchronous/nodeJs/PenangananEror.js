try {
  console.log("Awal Blok try");
  errorCode;
  console.log("akhir block try");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("Aku tetap di jalankan loh");
}