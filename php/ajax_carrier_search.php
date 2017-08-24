<?php
include('functions.php');
addSessionsDev();
/*
 * searches for a carier
 */
header('Content-Type: application/json');

if (isset($_GET['s_term']) && isset($_SESSION['build_load']['bid']) && isset($_SESSION['agent_id']['aid'])) {
    $s_term = $_GET['s_term'];
} else {
    echo 'error';
    exit();
}

require_once ('../includes_2/database_ajax.php');
/* * *add sql  search query here** */
try {
    $query = "SELECT carrier_id, dot_number, mc_number, legal_name, dba_name,
                    address_street, city_street, state_street, zip_street, country_street,
                    address_mailing, city_mailing, state_mailing, zip_mailing, country_mailing
                    FROM carriers WHERE 
                    dot_number = :dot
                    or 
                    mc_number = :mc";

    $statement = $dba->prepare($query);
    $statement->bindValue(':dot', $s_term);
    $statement->bindValue(':mc', $s_term);
    $statement->execute();
    $carriers = $statement->fetchAll();
//$found = $statement->fetch();
    $statement->closeCursor();

    if (count($carriers) > 0) {
        $return_arr = json_encode($carriers);
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
  

/*

 