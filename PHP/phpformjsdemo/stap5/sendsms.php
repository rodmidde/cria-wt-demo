<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<?php 
	include 'includes/pageBuilder.php';
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>Untitled Document</title>
        <link href="style/style.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="script/script.js">
        </script>
    </head>
    <body onload="handleOnLoad();">
        <form action="sentsms.php" method="post" onsubmit="return validateFields();">
        	<div id="foutmeldingen">
        		<ul id="foutmeldingenlijst" />
        	</div>
            <div id="smstextcontainer" class="guicontainer">
                <textarea id="smstextArea" rows="5" cols="40" maxlength="200" name="SMS"></textarea>
                <label accesskey="m" id="smstextLabel" class="infolabel">
                    <u>S</u>MS
                </label>
				<label class="required">
                    *
                </label>
                <label id="smstextLength">0</label>
            </div>
            <div id="phonenumbercontainer" class="guicontainer">
            	<div id="addressbookpicker">
            		<?php
            			generateSelectInput();
					generatePersonsAsJavaScript();
				?>				
                	<input type="text" maxlength="11" id="phoneNumber" name="Phonenumber" />
				</div>
                <label accesskey="p" id="phonenumberLabel" class="infolabel">
	                <u>P</u>honenumber
                </label>
                <label class="required">
                    *
                </label>
                <img id="personImage" />
            </div>
			<div id="buttonContainer">
                <input id="sendButton" type="submit" value="Send SMS" />
				<input id="resetButton" type="reset" />
			</div>
        </form>
    </body>
</html>