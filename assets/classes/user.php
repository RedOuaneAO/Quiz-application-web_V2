<?php
include 'database.php';


class user extends DbConnection{
public  $userName;
 public  function login($name){
  session_start();
    $request ="SELECT name FROM `users` WHERE name='$name'";
    $result=$this->connect()->prepare($request);
    $result->execute();
    $data=$result->fetchAll();
    $_SESSION['nameUser']=$data['name'];
    echo $_SESSION['name'];
   // header('Location:../pages/login.php');
 }

}
if(isset($_GET['Submit'])) {
  $log =new user();
  $log->login($_GET['name']);
};
// $log =new user();
// $log->login($name);
// session_start();
// echo $_SESSION['nameUser'];

// $log =new user();
// $log->login($name);




