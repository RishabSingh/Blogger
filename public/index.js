function toggleVisibility() {
    var div = document.getElementById("modal");
    if (div.style.display === "none") {
      div.style.display = "block"; // or any other appropriate value to show the div
    } else {
      div.style.display = "none"; // hide the div
    }
  }

  jQuery('#frm').validate({
    rules:{
        username:'required',
        password:{
          required:true,
          minlength:4,
        }
          
    },messages:{
      username:'Please enter your name',
      password:{
        required:"Please enter your password",
        minlength:"Password too small",
      }
      
    }
  })


 
  
  