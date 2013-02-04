<?php
	include 'dbConnection.php';

	function generateSelectInput()
	{
		$result = getPersonsFromDatabase();
		echo "<select id='adresboek'>";
		generateSelectOptions($result);
		echo "</select>";
	}
	
	function getPersonsFromDatabase()
	{
		$conn = new dbConnection();
		$conn->open();
		return $conn->executeQuery("SELECT * FROM adresboek");
	}
	
	function generateSelectOptions(&$result)
	{
		echo "<option value='-1'>- Select a Person.... -</option>";
		while ($row = mysql_fetch_array($result))
		{
			echo "<option value='" . $row['id'] . "''>" . $row['name'] . "</option>";
		}
	}
	
	function generatePersonsAsJavaScript()
	{
		echo "<script type='text/javascript'>persons = new Array();";
		$result = getPersonsFromDatabase();
		generatePersonsAsJSObjects($result);
		echo "document.getElementById('adresboek').onchange=function() {showDetails(persons[this.selectedIndex])};";
		echo "</script>";
	}
	 
	function generatePersonsAsJSObjects(&$result)
	{
		while ($row = mysql_fetch_array($result))
		{
			echo "persons[". $row['id'] ."] = {phonenumber:'" . $row['phonenumber']. "',photourl:'" . $row["photourl"] ."'};";
		}
	}
?>
