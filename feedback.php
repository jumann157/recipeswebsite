<?php

include("/Users/jumanmardini/Desktop/coding stuff/config.php");

//create a connection
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

//check connection
if($conn -> connect_error) {
    die("Connection failed: ") . $conn -> connect_error;
}

echo "Connection Successful\n";

if($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "This is the feedback action page";
    $firstname = htmlspecialchars($_POST["firstname"]);
    $lastname = htmlspecialchars($_POST["lastname"]);
    $usabilityrange = htmlspecialchars($_POST["usability"]);
    $feedback = htmlspecialchars($_POST["feedback"]);

    echo "Usability range value: " . $usabilityrange;

    $sql = "INSERT INTO Form_Details (FirstName, LastName, Navigation, Personal_Feedback)
    VALUES ('$firstname', '$lastname', '$usabilityrange', '$feedback')";

    if($conn->query($sql) === TRUE) {
        echo "Feedback Submitted Successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
    header("Location:  ../feedback.html");

} else {
    header("Location:  ../feedback.html");
}

?> 