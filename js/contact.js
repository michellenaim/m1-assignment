function showBox (event) {
    answer = document.getElementById("select").value;
    document.getElementById("email-or-phone").innerHTML = "<label>Please enter your " + answer + "</label> <input type='text'>";
  }