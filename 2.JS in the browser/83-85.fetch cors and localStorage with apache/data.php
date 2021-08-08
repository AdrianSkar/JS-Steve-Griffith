<?php

// $time = time();
// $key = "abd654e9d6cc52a1297dfee";
$people = ["Cersei", "Arya", "Sansa", "Jon", "Brienne","Daenerys","Theon", "Jorah", "Margaery", "Jamie", "Sandor", "Samwell", "Ramsay", "Bran", "Rob", "Eddard", "Missandei", "Tyrion"];

$obj = array();
// $obj['time'] = $time;
$obj['time'] = time();
// $obj['key'] = $key;
$obj['key'] = "abd654e9d6cc52a1297dfee";
$obj['people'] = array();

for($i=0; $i<3; $i++){
    $rand = mt_rand(0, count($people)-1);
    $obj['people'][] = $people[$rand];
}

echo json_encode($obj);
?>