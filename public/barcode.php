<?php
$servername = "Admin";
$username = "dev";
$password = "devcoding";
$dbname = "bar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO barcodes (barcode) VALUES (?)");
$stmt->bind_param("s", $barcode);

// Set parameters and execute
$barcode = $_POST['barcode'];
$stmt->execute();

echo "New barcode stored successfully";

$stmt->close();
$conn->close();
?>