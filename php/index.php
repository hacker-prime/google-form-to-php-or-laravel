<?php 

// Google Spreadsheet Post data to MySQL database @local PC - Google Spreadsheet Post data to MySQL database @local PC

// JSON string
$someJSON = file_get_contents("php://input");

// Convert JSON string to Array
$someArray = json_decode($someJSON, true);

// https://stackoverflow.com/questions/9265274/php-create-and-save-a-txt-file-to-root-directory
// https://stackoverflow.com/questions/48457618/php-create-file-in-same-directory-as-script
$fp = fopen(__DIR__ . "/myText.txt","a");
fwrite($fp,print_r($someArray, true));
fclose($fp);


?>