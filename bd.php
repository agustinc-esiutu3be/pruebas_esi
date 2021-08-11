<?php

const USER = "root" ;
const PASS = "1234";
const DB = "ejercicio_web";
const HOST = "3307";
const DSN = "mysql:host=" . HOST . ";dbname=" . DB ;

$conn = new PDO(DSN, USER, PASS);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


?>