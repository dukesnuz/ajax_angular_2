<?php

include('functions.php');
addSessionsDev();

if (isset($_SESSION['agent_id']['aid'])) {
    require_once ('../includes_2/database_ajax.php');

    /*     * ********Build Load ************ */
    $arr = json_decode($_POST['json'], true);
//$aid = filter_var($arr['agent_id'], FILTER_SANITIZE_NUMBER_INT);
    $aid = $_SESSION['agent_id']['aid'];
    $aid = filter_var($aid, FILTER_SANITIZE_NUMBER_INT);
    If (is_numeric($aid) == true) {

        $bid = substr(time() . mt_rand(1, 100000), 6, 9);
        $_SESSION['build_load_id']['bid'] = $bid;

        try {
            $q = "INSERT INTO build_load (agent_id, build_load_id)
                         VALUES(:aid, :bid)";

            $statement_add = $dba->prepare($q);
            $statement_add->bindValue(':aid', $aid);
            $statement_add->bindValue(':bid', $bid);
            $statement_add->execute();
            $statement_add->closeCursor();
            echo 'sucess';
        } catch (PDOException $e) {
            $error_message = $e->getMessage();
            //echo "<p>Database error: $error_message</p>";
            echo "error";
            exit();
        }
    }
} else {
    echo 'error';
}
