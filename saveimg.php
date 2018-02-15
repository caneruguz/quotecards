<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Save your image | Typographics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/docs.css" rel="stylesheet">
    <link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet">
    
 	 <link href="main.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
    
	 <style type="text/css">
	 #canvas {
	    font-family: 'Comfortaa', sans-serif; 
	 }
	 
	 #final_image img {
	 	-webkit-box-shadow: 0 0 10px 0 #ccc;
		-moz-box-shadow: 0 0 10px 0 #ccc;
		box-shadow: 0 0 10px 0 #ccc;
		margin: 20px auto;
	 }
	 
	 </style>
 
    
  </head>

  <body data-spy="scroll" data-target=".subnav" data-offset="50">


    <div class="container" id="saveimg">
		
		<!-- Masthead
		================================================== -->
		<header class="jumbotron subhead" id="overview" >
		  <p class="lead">Your image is ready. Right click on the image to save. <a href='http://www.typographics.co/#tool'>Create another image </a></p>
		  
		  <div class="alert alert-error">
		<strong> Important! </strong> Your image is now saved on the server, but the server images are deleted periodically. Make sure you save your image locally.
		</div>
		
		 <div id="final_image"> 
		 <?php
		    define('UPLOAD_DIR', 'images/');
		    $img = $_POST['canvas_info'];
		    $img = str_replace('data:image/png;base64,', '', $img);
		    $img = str_replace(' ', '+', $img);
		    $data = base64_decode($img);
		
		    $file = UPLOAD_DIR . uniqid() . '.png';
		    $success = file_put_contents($file, $data);
		    //print $success ? $file : 'Unable to save the file.';
		    print "<p><img src='" . $file . "' /> </p>";  
		    
		  ?>
		</div>
		</header>


    <!-- Footer
      ================================================== -->
      <footer class="footer">
        <p class="pull-right"><a href="#">Back to top</a></p>
          <p><a href="index.html">Back home</a> </p>
      </footer>

    </div><!-- /container -->


  </body>
</html>