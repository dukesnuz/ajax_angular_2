<?php

include('functions.php');
addSessionsDev();
/*
 * script checks if shipper added to build shipper table, if not adds a column, if is then edits the selected column
 */

if (isset($_SESSION['build_load']['bid']) && isset($_SESSION['agent_id']['aid'])) {

    require_once ('../includes_2/database_ajax.php');

    $bid = $_SESSION['build_load']['bid'];
    //$bid = 1876680;
    /*     * ********Build Load ************ */
    $arr = json_decode($_POST['json'], true);
    $sid = filter_var($arr['shipper_id'], FILTER_SANITIZE_NUMBER_INT);
    $check_flag = filter_var($arr['check_flag'], FILTER_VALIDATE_BOOLEAN);
    //If (is_numeric($sid) == true && is_numeric($lid) == true){
    //  check if shipper already in build_load_shipper    
    $query = "SELECT build_load_id FROM build_load_shippers WHERE build_load_id = :bid";
    $statement = $dba->prepare($query);
    $statement->bindValue(':bid', $bid);
    $statement->execute();
    $result = $statement->fetch();
    $statement->closeCursor();

    if ($result && $check_flag == false) {

        try {
            // if in edit
            $query = "UPDATE build_load_shippers SET shipper_id = :sid WHERE build_load_id = :bid";

            $statement_add = $dba->prepare($query);
            $statement_add->bindValue(':sid', $sid);
            $statement_add->bindValue(':bid', $bid);
            $statement_add->execute();
            $statement_add->closeCursor();
            echo "sucess";
        } catch (PDOException $e) {
            $error_message = $e->getMessage();
            //echo "<p>Database error: $error_message</p>";
            echo "error";
            exit();
        } //END try
    } else {

        // 2 if not in then add
        try {
            $query = "INSERT INTO build_load_shippers (build_load_id, shipper_id)
                                VALUES(:bid, :sid)";
            $statement = $dba->prepare($query);
            $statement->bindValue(':bid', $bid);
            $statement->bindValue('sid', $sid);
            $statement->execute();
            $statement->closeCursor();

            echo "sucess";
        } catch (PDOException $e) {
            $error_message = $e->getMessage();
            //echo "<p>Database error: $error_message</p>";
            echo "error";
            exit();
        } //END try
    }// END if($reults)
} else {
    echo 'error';
} 
