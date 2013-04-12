<?php

if ($_POST["action"] == "insert")
    echo '{"result":"inserted"}';
if ($_POST["action"] == "update")
    echo '{"result":"updated"}';
