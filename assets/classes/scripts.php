<?php

include "database.php";

// class Questions extends DbConnection{
    $conn=new DbConnection;
    $connDb = $conn->connect() ; 
    // public function __constructor(){
        $request="SELECT * FROM questions";
        $result=$connDb->prepare($request);
        $result->execute();
        // $json_array=array();
        $data=$result->fetchAll();
            // $json_array[]=$data;
        // var_dump($data) ;
           echo json_encode($data);
    
    









