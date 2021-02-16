<?php
  //require("SendMail.php");
  //get the ajax data from client:
  $userInfo = $_POST["userInfo"];
  //then start processing the Received List:
  $userInfoArrayList = $userInfo //json_decode($userInfo);
  echo $userInfoArrayList;
  foreach($userInfoArrayList as $arrayValue){
    $contactName = $arrayValue.contactName;
    $orgName = $arrayValue.orgName;
    $contactPosition = $arrayValue.contactPosition;
    $orgWebsite = $arrayValue.orgWebsite;
    $orgEmail = $arrayValue.orgEmail;
    $subject = $arrayValue.subject;
    $message = $arrayValue.message;
    //try{
      //$SendMailObj = new SendMail
      //$SendMailObj->sendMail($contactName, $orgName, $contactPosition, $orgWebsite, $orgEmail, $subject, $message);
      $contactNameWithPosition = $contactName . "\n" . $contactPosition;
      $messageWithOtherEssentials =   $contactNameWithPosition .".\n" $message . ".\n" . $orgWebsite;

      //Add header contents:
      $headers = "From:"."<".$orgEmail."".$orgName">" . "\r\n";
      $headers .= "Cc: emmanueladediji@gmail.com"."\r\n";

      $egotronmail = "info@egotron.com";

      //call the email function:
      mail($egotronmail, $subject, $messageWithOtherEssentials, $headers);
      //send success code back to the client
      if(true){
        echo "SUCCESS!";
      }
    /*catch(err){
      //send error code back to the client..
      echo "FAILURE!";
    }*/
?>
