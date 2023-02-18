<?php

// database connection parameters
$host = "localhost";
$dbname = "tsr_account";
$username = "root";
$password = "Mahdi@786";

// create a PDO connection to the database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Failed to connect to database: " . $e->getMessage();
    exit();
}

// prepare a SQL statement to fetch the users
$stmt = $pdo->prepare("SELECT id, name, email FROM users LIMIT 100");

// execute the SQL statement
$stmt->execute();

// fetch all rows from the result set as an associative array
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// close the database connection
$pdo = null;

// set the response header to indicate that the response is in JSON format
header('Content-Type: application/json');


// encode the users array as JSON and return it
echo json_encode($users);
