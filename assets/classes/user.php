<?php
include 'database.php';


class user extends DbConnection{
public  $userName;
public function __construct($userName) {
  $this->userName = $userName;
}
 public  function login(){
  session_start();
    $request ="SELECT name FROM `users` WHERE name='$this->userName'";
    $result=$this->connect()->prepare($request);
    $result->execute();
    $data=$result->fetch();
    $_SESSION['nameUser']=$data["name"];
    echo $_SESSION['nameUser'];
   header('Location:../pages/Quiz.php');
 }

}

  $log =new user($_GET['name']);
  $log->login();







