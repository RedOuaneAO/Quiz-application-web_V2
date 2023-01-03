<?php

include "database.php";


class Questions extends DbConnection{
   
     static function getQuestion(){
      $conn=new DbConnection;
      $connDb = $conn->connect() ; 
          $request="SELECT * FROM questions";
          $result=$connDb->prepare($request);
          $result->execute();
          $data=$result->fetchAll();
             echo json_encode($data);
      
     }
    }

Questions::getQuestion();   
    









