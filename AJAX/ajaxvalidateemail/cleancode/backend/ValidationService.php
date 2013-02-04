<?php
/**
 * This class can perform serverside validation-functions using helper-classes
 * like DB and EmailAddress.
 * 
 * @author Rody Middelkoop
 */
class ValidationService {
    /**
     * When the method exists, it will be called by its name.
     * @param $method
     */
    function executeRequestMethod($method) {
        if (!is_null($method) && method_exists($this, $method)) {
            call_user_method($method, $this);
        } else {
            echo "You need to supply the right method and parameters. Your input was: " . $_REQUEST["method"];
        }
    }

    /**
     * Returns whether the given emailaddress is free or not
     */
    function emailExists() {
        $emailaddresses = EmailAddress::exists($_REQUEST["emailaddress"]);
        echo json_encode($emailaddresses);
    }
}
?>