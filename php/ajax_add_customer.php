<?php

include('functions.php');
addSessionsDev();
/*
 * adds carrier to biuld load, also will edit carrier
 */

if (isset($_SESSION['build_load']['bid']) && isset($_SESSION['agent_id']['aid'])) {
    require_once ('../includes_2/database_ajax.php');

    $bid = $_SESSION['build_load']['bid'];
    /*     * ********Build Load ************ */
    $arr = json_decode($_POST['json'], true);
    $cid = filter_var($arr['shipper_id'], FILTER_SANITIZE_NUMBER_INT);

    If (is_numeric($cid) == true && is_numeric($cid) == true) {
        try {
            $q = "UPDATE build_load SET customer_id = :cid WHERE build_load_id = :bid";

            $statement_add = $dba->prepare($q);
            $statement_add->bindValue(':cid', $cid);
            $statement_add->bindValue(':bid', $bid);
            $statement_add->execute();
            $statement_add->closeCursor();
            echo 'success';
        } catch (PDOException $e) {
            $error_message = $e->getMessage();
            //echo "<p>Database error: $error_message</p>";
            echo 'error';
            exit();
        }
    }
} else {
    echo 'error';
}