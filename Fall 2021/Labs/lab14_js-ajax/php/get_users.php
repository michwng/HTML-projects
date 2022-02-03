<?php
$dbhost = "localhost";
$dbuser = "regadmin";
$pw     = "SpectralShock6644";
$db     = "jq-user-accounts";

$conn = new mysqli($dbhost, $dbuser, $pw, $db);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// $sql = "SELECT `uid`, `first_name`, `last_name`, `email` FROM `shadow`';";
$sql = "SELECT * FROM passwd;";

$result = $conn->query($sql);

    
while($row = $result->fetch_assoc()){

    $uid        = $row['uid'];
    $firstname  = $row['first_name'];
    $lastname   = $row['last_name'];
    $email      = $row['email'];

    $return_arr[] = array(
                    "uid" => $uid,
                    "firstname" => $firstname,
                    "lastname"  => $lastname,
                    "email"     => $email,
                    );
}

/* send a JSON encoded array to client */
header('Content-type: application/json');
echo json_encode($return_arr);

$conn -> close();
?>