$(
  //Now call the object literal method when button is clicked:
  $("#submit").click(function(event){
    //event.preventDefault();
    //console.log("Hello World");
    ClientServerComm();
    //alert("Hello World")
  }),
)

  var getUserInfo = async function(){
      //get the values of the user details:
      var contactName = $("#contact_name").val();
      var orgName = $("#org_name").val();
      var contactPosition = $("#contact_pos").val();
      var orgWebsite = $("#org_web").val();
      var orgEmail = $("#email").val();
      var subject = $("#subject").val();
      var message = $("#message").val();

      //return all in JSON list format:
      return [
        {contactName : contactName},
        {orgName :orgName},
        {contactPosition : contactPosition},
        {orgWebsite : orgWebsite},
        {orgEmail : orgEmail},
        {subject : subject},
        {message : message},
      ];
  }

  var ClientServerComm = async function(){
    var contactInfo = await getUserInfo();
    console.log(contactInfo);
    //send over to the server:
    $.ajax({
      url:"../option1/Backend/ImplementContact.php",
      type:"POST",
      //mimeType: "application/json"
      //contentType: "application/json"
      data:{userInfo : JSON.stringify(contactInfo)},
      dataType : "json",
      processData : false,
      beforeSend : function(x){
        if(x && x.overrideMimeType){
          x.overrideMimeType("application/json; charset=UTF-8");
        }
      },
      success : function(result){
        if(result == "SUCCESS!"){
          //Tell the User that they are successfully registered here...
          //Hide all elements,
          //Display Success
          alert("Mail sent successfully!");
        }
      },
      error : function(err){
        //Indicate the error message...
        //if(err == "FAILURE!"){
          alert("Error in server Comms!");
        //}
      }
    });
  }
