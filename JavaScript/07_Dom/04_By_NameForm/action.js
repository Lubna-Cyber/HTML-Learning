function myFunction() {
    
    let name = document.getElementById("name").value;
    let pswd = document.getElementById("pswd").value;
    let show = document.getElementById("namelist");

    if (name == "Lubna" && pswd == 1992 || name == "Mohit" && pswd == 1993) {
      show.innerHTML =
        "<div class='success'>" + "Login Successfully" + "</div>";
          } 
          
    else {
      show.innerHTML = "<div class='failed'>" + "Login Failed" + "</div>";
        }
    
  } 

  function cleartext(){
    document.getElementById('name').value='';
    document.getElementById('pswd').value='';
  }