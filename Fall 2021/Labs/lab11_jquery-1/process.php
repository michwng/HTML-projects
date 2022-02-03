<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Thanks!</title>
		<link rel="icon" href="media/icon.png"/>
		<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="css/style.css" rel="stylesheet">
		<style>
			body { font-size: 1.5em; }
		</style>
	</head>
	<body>		
		<div> 
			<h1>Thanks!</h1>
			<p style="padding:25px; text-align:left;"> 
                Thanks,  
                <span style="color:red;"><?php if(isset($_GET['first_name'])){echo ucfirst($_GET['first_name']);} ?></span>, we appreciate your interest in our site!
			</p>
            <p style="padding:25px; text-align:left;"> 
                According to what you entered on our form, your email address is   
                <span style="color:red;"><?php if(isset($_GET['email'])){echo trim($_GET['email'], " ");} ?></span>, you live in
				<span style="color:red;"><?php if(isset($_GET['state'])){echo ucfirst($_GET['state']);} ?></span>,
				and you're a 
				<span style="color:red;"><?php if(isset($_GET['occupation'])){echo ucfirst($_GET['occupation']);} ?></span>.
			</p>
			<p>
				We're glad you stopped by!
			</p>
			<p style="width: 150px; margin:0 auto;">
				<?php echo "<a style='text-decoration:none;' href='javascript:history.go(-1)'><i class='fa fa-arrow-circle-left' style='font-size:8rem;
				display:block;'></i>GO BACK</a>"; ?>	
			</p>
		 </div>
	</body>
</html>