<?php
$dbhost     = "localhost";
$dbuser     = "regadmin";
$pw         = "SpectralShock6644";
$db         = "jq-user-accounts";
$uid        = filter_var($_GET['uid'], FILTER_SANITIZE_STRING);
$pwFromUser = $_GET['pw'];
$returnVal  = false;

$conn = new mysqli($dbhost, $dbuser, $pw, $db);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT pw FROM passwd WHERE uid ='" . $uid . "';";

$result = $conn->query($sql);

    while($row = $result->fetch_assoc()){

        $pwFromDb      = str_replace("+", " ", $row['pw']);

        if ($pwFromUser == $pwFromDb) {
            $returnVal = true;
        } else {
            $returnVal = false;
        }
        
    }

    /* send a JSON encoded array to client */
    header('Content-type: application/json');
    echo json_encode($returnVal);

    $conn -> close();
?>