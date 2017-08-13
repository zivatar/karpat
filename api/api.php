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

function getRecentArticles($mysqli) {
	$myArray = array();
	$sql = 'SELECT `url` AS `url`, `cim` AS `title` FROM `tartalom` WHERE `kesz` = 1 ORDER BY `modositas` DESC LIMIT 0 , 10';
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_array(MYSQL_ASSOC)) {
			$myArray[] = $row;
		}
	}
	$result->close();
	return $myArray;
}

function getArticleTypes($mysqli) {
	$myArray = array();
	$sql = 'SELECT `menu_url` AS `url`, `menu_nev` AS `title` FROM `menu` WHERE `subject_id` = 1 OR `subject_id` = 2 ORDER BY `menu_nev` ASC LIMIT 0 , 20';
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_array(MYSQL_ASSOC)) {
			$myArray[] = $row;
		}
	}
	$result->close();
	return $myArray;
}

$ENDPOINT = array( "categories", "recent-articles", "article-types" );
$ERROR_MSG = "Something went wrong.";
$value = array();

$link = new mysqli('localhost', 'zivatar_karpat', 'Soldner88:-)', 'zivatar_karpat');
mysqli_set_charset($link,'utf8');

if (isset($_GET["action"]) && in_array($_GET["action"], $ENDPOINT)) {
	switch ($_GET["action"]) {
		case "categories":
			$value = getCategories($link);
			break;
		case "recent-articles":
			$value = getRecentArticles($link);
			break;
		case "article-types":
			$value = getArticleTypes($link);
			break;
	}
}

if (!$value) {
  header(':', true, 404);
}

mysqli_close($link);

exit(json_encode($value));
?>