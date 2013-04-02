<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" );
header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" );
header("Cache-Control: no-cache, must-revalidate" );
header("Pragma: no-cache" );
header("Content-Type: text/xml; charset=utf-8");

if ($_REQUEST["method"] == "validateEmail")
{
	$emailaddresses = getDataFromDataSource("SELECT COUNT(*) AS emailaddressCount
		from adresboek where emailaddress = '" . $_REQUEST["emailaddress"] ."'");
	$emailaddressesForJSON = array();
	while( $row = mysql_fetch_assoc($emailaddresses))
	{
		array_push($emailaddressesForJSON, $row);
	}
	$jsonText = json_encode( $emailaddressesForJSON );
	echo $jsonText;
}
else {
	echo "You need to supply the right method and parameters. Your input was: " . $_REQUEST["method"];
}

function getDataFromDataSource($query)
{
	mysql_connect("127.0.0.1", "root", "") or die("Connection Failure to Database");
	mysql_select_db("criademo") or die ("Database criademo not found.");
	$result = mysql_query($query);
	return $result;
}

?>