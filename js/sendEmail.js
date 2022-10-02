function getDetails(){
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var msg = document.getElementById("msg").value;
  var mobile = document.getElementById("mobile").value;
  // sendEmail(email, name,subject ,msg)

  var vEmail, vName, vMobile, vSubject, vMsg = 0;
  document.getElementById("vEmail").style.display="none"
  document.getElementById("vName").style.display="none"
  document.getElementById("vMobile").style.display="none"
  document.getElementById("vSubject").style.display="none"
  document.getElementById("vMsg").style.display="none"

  if(name=="" || name == null){
    document.getElementById("vName").innerHTML = "Please enter your name";  
    document.getElementById("vName").style.display="inline"
    vName = 0;
  }else{
    vName = 1;
  }

  if(subject=="" || subject == null){
    document.getElementById("vSubject").innerHTML = "Please enter the subject";  
    document.getElementById("vSubject").style.display="inline"
    vSubject = 0;
  }else{
    vSubject = 1;
  }

  if(mobile=="" || mobile == null){
    document.getElementById("vMobile").innerHTML = "Please enter your contact number";  
    document.getElementById("vMobile").style.display="inline"
    vMobile = 0;
  }else{
    vMobile = 1;
  }

  if(msg=="" || msg == null){
    document.getElementById("vMsg").innerHTML = "Please enter your message";  
    document.getElementById("vMsg").style.display="inline"
    vMsg = 0;
  }else{
    vMsg = 1;
  }

  if(email=="" || email == null){
    document.getElementById("vEmail").innerHTML = "Please enter your E-mail";  
    document.getElementById("vEmail").style.display="inline"
    vEmail = 0;
  }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    vEmail = 1;
  }else{
    vEmail = 0;
    document.getElementById("vEmail").innerHTML = "You have entered an invalid email address";  
    document.getElementById("vEmail").style.display="inline"
  }


  if(vEmail + vName + vMobile + vSubject + vMsg == 5){
    // console.log("done");   
    sendEmail(email,name,subject,msg, mobile)
  }
}


    function sendEmail(email, name,subject ,msg, mobile) { 
 
      Email.send({ 
        Host: "smtp.gmail.com",         
        Username: "shaaz.virtual.assistant@gmail.com", 
        Password: "q$cn4RjD7bK^3$Mp",         
        To: 'shafrazmohamed444@gmail.com',          
        From: 'Shaaz-Portfolio<shaaz.virtual.assistant@gmail.com>', 
        Subject: 'Shaaz-Portfolio | ' +  subject, 
        Body: "<h4>Name: " + name+ "</h4>" +
              "<h4>Email: " + email+"</h4>" +
              "<h4>Contact number: " + mobile+"</h4>" +
              "<h4>Message Subject: " + subject+"</h4>" +
              "<h4> Message: " +  msg +"</h4>"
      }) 

      Email.send({ 
        Host: "smtp.gmail.com",         
        Username: "shaaz.virtual.assistant@gmail.com", 
        Password: "q$cn4RjD7bK^3$Mp",         
        To: email ,         
        From: 'Shaaz-Portfolio<shaaz.virtual.assistant@gmail.com>', 
        Subject: 'Shaaz-Portfolio', 
        Body: 
        "<h4>Hi " + name +"</h4>" +
        "<h4>Thank you for reaching out to us. One of our representatives will be in contact with you shortly.</h4><br><br>"+
        "<p>Summary of your email are as follows: <p>"+
        "<p>Name: " + name +"</p>" +
        "<p>E-Mail: " + email +"</p>" +
        "<p>Mobile Number: " + mobile +"</p>" +
        "<p>Subject: " + subject +"</p>" +
        "<p>Message: " + msg +"</p>" 
      }) 

        .then(function (message) { 
          // alert("mail sent successfully")           
        }); 

        setTimeout(function () {
           window.location.href = "https://shaaz-portfolio.web.app/";
       }, 3000);
    } 