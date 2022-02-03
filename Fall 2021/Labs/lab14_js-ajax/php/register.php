<?php
$dbhost     = "localhost"; /* Database server name */
$dbuser     = "regadmin";  /* Database user name */
$dbpw       = "SpectralShock6644"; /* User's password */
$db         = "jq-user-accounts";  /* Database name */
/***** Form Data *****/
$uid        = $_POST['uid'];
$pw         = $_POST['pw'];
$firstName  = $_POST['firstName'];
$lastName   = $_POST['lastName'];
$email      = $_POST['email'];

/* Connect to the database. */
$conn = new mysqli($dbhost, $dbuser, $dbpw, $db);

/* Check connection */
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

/* Inserts information from the form into the database. */
$sql = "INSERT INTO `passwd` (`uid`, `pw`, `first_name`, `last_name`, `email`) values ('" .
        $uid . "', '" . 
        $pw . "', '" . 
        $firstName . "', '" . 
        $lastName . "', '" . 
        $email . "');";

if($result = $conn->query($sql)) {
    /* send a JSON encoded array to client */
    header('Content-type: application/json');
} else {
    /* send a JSON encoded array to client */
    header('Content-type: application/json');
    echo json_encode(null);
}

$conn -> close();
?>