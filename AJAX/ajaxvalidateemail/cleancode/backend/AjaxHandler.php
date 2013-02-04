<?php
    include 'headers.php';
    include 'ValidationService.php';
    include 'EmailAddress.php';
    include_once 'DB.php';
    
    $service = new ValidationService();
    $service->executeRequestMethod($_REQUEST["method"]);
?>