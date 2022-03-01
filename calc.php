<?php

$startDate = $_POST['startDate'];
$sum = $_POST['sum'];
$term = $_POST['term'];
$percent = $_POST['percent'];
$sumAdd = $_POST['sumAdd'];
$errors = [];

if ($sum < 1000 || $sum > 3000000) {
  $errors[] = $sum;
}
if ($term < 1 || $term > 60) {
  $errors[] = $term;
}
if ($sumAdd < 0 || $sumAdd > 3000000) {
  $errors[] = $sumAdd;
}
if ($percent < 3 || $percent > 100) {
  $errors[] = $percent;
}

if ($term[1] == 2) {
  $term[0] = $term[0] * 12;
}

$month = strval(mb_substr($startDate, 5, 2)); // месяц
$year = strval(mb_substr($startDate, 0, 4)); // году
$daysYear = date('L', mktime(0, 0, 0, 1, 1, $year)) ? 366 : 365; // дней в году

$month_percent = $percent / $daysYear;
for ($i=0; $i < $term[0]; $i++) {
  $daysMonth = date('t', mktime(0, 0, 0, $month+$i, 1, $year));
  $sum = $sum + ($sum + $sumAdd) * $daysMonth * $month_percent;
}
$response = [
  "sum" => $sum
];
echo json_encode($response);
