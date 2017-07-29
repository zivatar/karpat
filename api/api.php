<?php

function getCategories($mysqli) {
	$myArray = array();
	$sql = 'SELECT `kat_url` AS `id`, `kat_nev` AS `text` FROM `kategoriak` WHERE `latszik`=1 ORDER BY `sorrend`';
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_array(MYSQL_ASSOC)) {
			$myArray[] = $row;
		}
		//echo '<pre>'; print_r($myArray); echo '</pre>';
		//echo "<br>";
		//echo json_encode($myArray);
	}
	$result->close();
	return $myArray;
}

$ENDPOINT = array( "categories" );
$ERROR_MSG = "Something went wrong.";
$value = array();

$link = new mysqli('localhost', 'zivatar_karpat', 'Soldner88:-)', 'zivatar_karpat');
mysqli_set_charset($link,'utf8');

if (isset($_GET["action"]) && in_array($_GET["action"], $ENDPOINT)) {
	switch ($_GET["action"]) {
		case "categories":
			$value = getCategories($link);
			break;
	}
}

if (!$value) {
  http_response_code(404); // TODO undefined
  die(mysqli_error());
}

mysqli_close($link);

exit(json_encode($value));
?>