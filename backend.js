 function page2() {
    const divElement = document.getElementById("centerdiv");
    const heading = document.getElementById("verfi");

    verfi.textContent = "Citizen Verified";
      // After 3 seconds, open a new HTML page
      setTimeout(function() {
        window.location.href = "./page2.html";
      }, 3000); // 1000 milliseconds = 1 seconds
}
  
// page 3---------------------


