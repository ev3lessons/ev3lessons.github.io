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
 
    $email_to = "team@droidsrobotics.org";
 
    $email_subject = "EV3Lessons.com Feedback";
     
 
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
 
//    $rating = $_POST['rating'];

    $name = $_POST['name']; 

    $email = $_POST['email']; 
     
    $updates = $_POST['updates'];
    if ($updates=="") {
       $updates="no";
     }


    $email_from = $_POST['email'];
 
    $email_message = "Feeback on slides!!!\n\n";
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
 
    $email_message .= "Email: ".clean_string($email)."\n";
 
//  $email_message .= "Location: ".clean_string($rating)."\n";

    $email_message .= "Name: ".clean_string($name)."\n";

    $email_message .= "Comments: ".clean_string($comments)."\n";
    
//    $email_message .= "Email address: ".clean_string($email)."\n";
     
    $email_message .= "Updates: ".clean_string($updates)."\n";
    $email_message .= "IP address: ".$_SERVER['REMOTE_ADDR']."\n";    
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 
Thank you for your feedback. We hope you found the lessons useful. Your browser will redirect you back in 3 seconds. If you are not automatically redirected, click <a href="http://www.ev3lessons.com/">here</a>.
<meta http-equiv="refresh" content="3;url=http://www.ev3lessons.com/" /> 
 
 
<?php
 
		     }

 
?>
