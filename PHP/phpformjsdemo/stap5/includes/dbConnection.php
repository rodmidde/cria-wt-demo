<?php
	class dbConnection {
		private $username = 'root';
		private $password = '';
		private $dbname = 'criademo';
		private $hostname = '127.0.0.1';	
			
		public function open()
		{
			mysql_connect($this->hostname, $this->username, $this->password) or die("Connection Failure to Database: ");
			mysql_select_db($this->dbname) or die ("Database criademo  not found.");
		}
		
		public function executeQuery($query)
		{
			return mysql_query($query);
		}
		
		public function close(&$result)
		{
	        mysql_free_result($result);
	        mysql_close();		
		}
	};
?>