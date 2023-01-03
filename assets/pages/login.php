<?php
// include '../classes/scripts.php'; 
// include '../classes/database.class.php'; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Php | Quiz</title>
<!-- ================== BEGIN core-css ================== -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
<link rel="stylesheet" href="../css/loginstyle.css">
<!-- ================== END core-css ================== -->
</head>
<body>

<a href="../../index.php" class="backBtn fontWeight text-white  ms-3 mt-2"><i class="bi bi-arrow-left"></i> Back</a>

<div class="contentContainer">
    <div class="loginForm">
        <div>
            <h2 class="fontWeight">Login</h2>
            <hr>
        </div>
        <form action="../classes/user.php" method="GET">
        <div>
            <label for="">Full Name</label><br>
            <input type="text" class="form-control" name="name"><br>
        </div>
        <div>
            <button type="submit" class="submitBtn" name="Submit">
                Login
            </button>
        </div>
        </form>
        
    </div>
</div>
    <!--==================================== scripts ======================================-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>





