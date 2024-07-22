<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Zbierz dane z formularza
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Ustawienia e-maila
    $to = 'rena1199@gmail.com'; // Zaktualizowany adres e-mail
    $subject = 'Nowa wiadomość kontaktowa';
    
    // Treść e-maila
    $body = "Imię: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Wiadomość:\n$message\n";
    
    // Nagłówki e-maila
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Wyślij e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Wiadomość została wysłana!</p>";
    } else {
        echo "<p>Wystąpił problem podczas wysyłania wiadomości.</p>";
    }
}
?>
