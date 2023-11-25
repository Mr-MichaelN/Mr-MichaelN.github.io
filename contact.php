<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize form data
    function sanitizeData($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Form validation
    $errors = [];
    $firstname = sanitizeData($_POST['firstname']);
    $lastname = sanitizeData($_POST['lastname']);
    $email = sanitizeData($_POST['email']);
    $phone = sanitizeData($_POST['phone']);
    $message = sanitizeData($_POST['message']);

    if (empty($firstname) || empty($lastname) || empty($email) || empty($message)) {
        $errors[] = "All fields are required.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // If no errors, send email
    if (empty($errors)) {
        // Compose email message
        $to = 'nwariennem@gmail.com';
        $subject = 'New Contact Form Submission';
        $headers = "From: $email";
        $messageBody = "Name: $firstname $lastname\nEmail: $email\nPhone: $phone\n\n$message";

        // Send email
        mail($to, $subject, $messageBody, $headers);

        // Send feedback message to the user
        echo "Your message has been delivered successfully.";
    } else {
        // Display validation errors
        echo implode("<br>", $errors);
    }
} else {
    // Handle other HTTP methods (GET, etc.)
    http_response_code(405); // Method Not Allowed
}
?>
