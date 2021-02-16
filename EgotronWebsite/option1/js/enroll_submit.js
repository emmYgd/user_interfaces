$(
  //Now call the object literal method when button is clicked:
  $("#submit").click(function(event){
    //event.preventDefault();
    //console.log("Hello World");
    ClientServerComm();
    //alert("Hello World")
  }),
)

  var getTruePass = async function(pass1, pass2){
    if(pass1 == pass2){
      //password great!
      return pass1
    }else{
      alert("Error! Password does not Match!")
    }
  }

  var getUserInfo = async function(){
      //get the values of the user details:
      var UserFirstName = $("#first_name").val();
      var UserLastName = $("#last_name").val();
      var UserEmail = $("#email").val();
      var AppUserName = $("#username").val();

      //get the two passwords and compare if they match:
      var pass1 = $("#password").val();
      var pass2 = $("#conf_pass").val();
      var AppPassword = getTruePass(pass1, pass2);

      var training_choice = $("#training_choice").val();

      //return all in JSON list format:
      return [
        {firstName : UserFirstName},
        {lastName : UserLastName},
        {email : UserEmail},
        {username : AppUserName},
        {password : AppPassword},
        {choice : training_choice}
      ];
  }

  var ClientServerComm = async function(){
    var userInfo = getUserInfo();
    //send over to the server:
    $.ajax({
      url:"../Backend/Implement.php",
      type:"POST",
      //mimeType: "application/json"
      //contentType: "application/json"
      data:{userInfo : JSON.stringify(userInfo)},
      dataType : "json",
      processData : false,
      beforeSend : function(x){
        if(x && x.overrideMimeType){
          x.overrideMimeType("application/json; charset=UTF-8");
        }
      },
      success : function(result){
        //Tell the User that they are successfully registered here...
        //Hide all elements,
        //Display Success
      },
      error : function(){
        //Indicate the error message...
        alert("Error in server Comms");
      }
    });
  }
