<?php
require 'mailer/PHPMailerAutoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail = new PHPMailer;

//From email address and name
$mail->From = $email;
$mail->FromName = $name;

//To address and name
$mail->addAddress("jason.zhengxin@gmail.com", "Jason");
//$mail->addAddress("recepient1@example.com"); //Recipient name is optional

//Address to which recipient will reply
//$mail->addReplyTo("reply@yourdomain.com", "Reply");

//CC and BCC
//$mail->addCC("cc@example.com");
//$mail->addBCC("bcc@example.com");

//Send HTML or Plain Text email
$htmlcontent .= "";
$htmlcontent .= "<br /><b>Hi Mansion Village, there is a new message:</b><br /><hr />";
$htmlcontent .= "<br />From: ".$name;
$htmlcontent .= "<br />Email: ".$email;
$htmlcontent .= "<br />Message: ".$message;



$mail->isHTML(true);

$mail->Subject = "Request from ".$name;
$mail->Body = $htmlcontent;
//$mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
    echo "Message has been sent successfully";
}