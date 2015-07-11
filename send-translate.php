<?php
  require_once('recaptchalib.php');
  $privatekey = "6LeK__sSAAAAAGWydXoJBm7Zl2O36LQoU_wyMAMA";
  $resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." .
         "(reCAPTCHA said: " . $resp->error . ")");
  } else {

    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "team@ev3lessons.com";
 
    $email_subject = "EV3Lessons.com translations";
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
//    if(!isset($_POST['rating'])) {
 
//        died('We are sorry, but you must submit a rating');       
 
//    }
 
     
 
    $comments = $_POST['comments']; // required
 

    $language = $_POST['language']; 

    $translation = $_POST['translation'];

    $text = $_POST['text']; 
     



    $email_from = "translations@ev3lessons.com";
 
    $email_message = "Feeback on slides!!!\n\n";
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
 
    $email_message .= "Language: ".clean_string($language)."\n";
    $email_message .= "Text: ".clean_string($text)."\n";
    $email_message .= "Translation: ".clean_string($translation)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";

    
//    $email_message .= "Email address: ".clean_string($email)."\n";
//    $email_message .= "Updates: ".clean_string($updates)."\n";

    $email_message .= "IP address: ".$_SERVER['REMOTE_ADDR']."\n";    
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 
<meta http-equiv="refresh" content="3;url=translate.html" /> 
 
 
<?php
 
		     }

 
?>
