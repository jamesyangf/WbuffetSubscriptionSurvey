function addSubscriber() {
  var email = document.getElementById('emailId').value;
  var phoneNumber = document.getElementById('phoneId').value;
  var firstName = document.getElementById('firstId').value;
  var lastName = document.getElementById('lastId').value;

  var jsonObj = new Object();
  jsonObj.email = email;
  jsonObj.phoneNumber = phoneNumber;
  jsonObj.firstName = firstName;
  jsonObj.lastName = lastName;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // document.getElementById("response").innerHTML = this.responseText;
          console.log(this.responseText);
      }
  };
  xhttp.open("POST", "https://us-central1-warehouse-buffet.cloudfunctions.net/subscribers/addSubscriber", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(jsonObj));
  // location.href = 'https://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page';
}