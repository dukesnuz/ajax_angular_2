<?php
include('functions.php');
addSessionsDev();
/*
 * searches for a shipper
 */
header('Content-Type: application/json');

if (isset($_GET['s_term']) && isset($_SESSION['build_load']['bid']) && isset($_SESSION['agent_id']['aid'])) {
    $s_term = $_GET['s_term'];
} else {
    echo 'error';
    exit();
}
//connect ot forum loaded data base to add search input
require_once ('../includes_2/database_ajax.php');
/* * *add sql  search query here** */
$aid = $_SESSION['agent_id']['aid'];
try {
    $query = "SELECT  shipper_id, legal_name FROM shippers WHERE 
                    legal_name = :legal_name
                    and
                    agent_id = :aid";

    $statement = $dba->prepare($query);
    $statement->bindValue(':legal_name', $s_term);
    $statement->bindValue(':aid', $aid);
    $statement->execute();
    $shippers = $statement->fetchAll();
//$found = $statement->fetch();
    $statement->closeCursor();

    if (count($shippers) > 0) {
        $return_arr = json_encode($shippers);
        echo $return_arr;
    } else {
        echo json_encode(array(0 => 'not'));
    }
} catch (PDOException $e) {
    $error_message = $e->getMessage();
    //echo "<p>Database error: $error_message</p>";
    echo 'error';
    exit();
}
