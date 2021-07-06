<?php 
session_start();
	require_once('dbconfig/config.php');
 ?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Input Form UI Design</title>
	<link rel="stylesheet"  href="new.css">
</head>

<body>
<div class="box">
	<h2>LOGIN</h2>
	<form class="myform" action="Index.php" method="post">
		<div class="inputBox">
	          <input type="text" name="username" required="">
	          <label>Username</label>
	      </div>

<div class="inputBox">
	          <input type="password" name="password" required="">
	          <label>Password</label>
	      </div>

 <input type="submit" name="login" required="">	  


	 </form>

	<?php
			if(isset($_POST['login']))
			{
				@$username=$_POST['username'];
				@$password=$_POST['password'];
				$query = "select * from userinfotbl where username='$username' and password='$password' ";
				//echo $query;
				$query_run = mysqli_query($con,$query);
				//echo mysql_num_rows($query_run);
				if($query_run)
				{
					if(mysqli_num_rows($query_run)>0)
					{
					$row = mysqli_fetch_array($query_run,MYSQLI_ASSOC);
					
					$_SESSION['username'] = $username;
					$_SESSION['password'] = $password;
					
					header( "Location: homepage.php");
					}
					else
					{
						echo '<script type="text/javascript">alert("No such User exists. Invalid Credentials")</script>';
					}
				}
				else
				{
					echo '<script type="text/javascript">alert("Database Error")</script>';
				}
			}
			else
			{
			}
		?>

   </div>
 </body>
</html>