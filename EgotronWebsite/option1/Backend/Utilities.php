<?php
  class Utilities{
    public function SanitizeString($submitted_element){
      //Escapes the user input for security
      $uname = htmlentities($submitted_element, ENT_QUOTES);
      return $uname;
    }
?>
