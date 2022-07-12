<?php
require_once '../header.php';
if (isset($_GET['to']) & isset($_GET['subject']) & isset($_GET['message'])) {
    $to = $_GET['to'];
    $subject = $_GET['subject'];
    $message = $_GET['message'];

    if ($to != '' & $subject != '' & $message != '') {
        $headers = 'From: SecretMail@dominio.com' . "\r\n" .
            'Reply-To: SecretMail@dominio.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        mail($to, $subject, $message, $headers);
        $obj = array("message_success" => utf8_encode("Email successfully sent"));
        echo json_encode($obj, JSON_UNESCAPED_SLASHES);
    } else {
        $obj = array("warning_error" => utf8_encode("form incomplete"));
        echo json_encode($obj, JSON_UNESCAPED_SLASHES);
    }
}else{
  $obj = array("warning_error" => utf8_encode("form incomplete"));
        echo json_encode($obj, JSON_UNESCAPED_SLASHES);
}
?>
