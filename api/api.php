<?php

function getCategories() {
	$cats = array(
			array("id" => "epitett", "text" => "Épített értékek", "submenu" => array( array("id" => "ipari", "text" => "Ipari létestímények") )),
			array("id" => "termeszet", "text" => "Természet", "submenu" => array( array("id" => "var", "text" => "Várak")))
		);
	return $cats;
}

$ENDPOINT = array( "categories" );
$ERROR_MSG = "Something went wrong.";
$value = array();

if (isset($_GET["action"]) && in_array($_GET["action"], $ENDPOINT)) {
	switch ($_GET["action"]) {
		case "categories":
			$value = getCategories();
			break;
	}
}

exit(json_encode($value));

// Dummy.MENU = [
// 	{ id: "epitett", text: "Épített értékek", submenu: 
// 		[ { id: "ipari", text: "Ipari létestímények"}, { id: "muzeum", text: "Múzeumok"}, { id: "var", text: "Várak"}
// 		] },
// 	{
// 		id: "termeszet", text: "Természeti értékek", submenu: 
// 		[ { id: "ipari", text: "Ipari létestímények"}, { id: "muzeum", text: "Múzeumok"}, { id: "var", text: "Várak"}
// 		]
// 	}
// ];