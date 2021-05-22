<?php
/**

Template Name: Register PHP
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

<?php if ( astra_page_layout() == 'left-sidebar' ) : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

	<div id="primary" <?php astra_primary_class(); ?>>
	
	<?php astra_primary_content_top(); ?>
	<?php astra_content_page_loop(); ?>
	<?php // Enter your host name, database username, password, and database name.
			// If you have not set database password on localhost then set empty.
			  $con = mysqli_connect("localhost:50748","root","root","calyxx");
			// Check connection
			if (mysqli_connect_errno()){
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}

    // When form submitted, insert values into the database.
    if (isset($_REQUEST['username'])) {
        // removes backslashes
        $username = stripslashes($_REQUEST['username']);
        //escapes special characters in a string
        $username = mysqli_real_escape_string($con, $username);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $password);
        $query    = "INSERT into `users` (username, password) VALUES ('$username', '" . md5($password) . "')";
        $result   = mysqli_query($con, $query);
        if ($result) {
            echo "<div class='form'>
                  <h3>You are registered successfully.</h3><br/>
                  <p class='link'>Click here to <a href='login()'>Login</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                  <h3>Something went wrong. Please try to register yourself again.</h3><br/>
                  <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>
                  </div>";
        }
    } else {
		echo"<form class='form' action='' method='post'>
        <h1 class='login-title'>Registration</h1>
		<p class='login-info'>Please fill in the below details to create an account.</p>
        <input type='text' class='login-input' name='username' placeholder='Username' required />
        <input type='password' class='login-input' name='password' placeholder='Password' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters' required>
        <h5 class='password-text'>Password must contain the following:</h5>
		<ul>
			<li>A <b>lowercase</b> letter</li>
			<li>A <b>capital (uppercase)</b> letter</li>
			<li>A <b>number</b></li>
			<li>Minimum <b>8 characters</b></li>
		</ul>
		<input type='submit' name='submit' value='Register' class='login-button'>
		
        <p class='link'>Already have an account? <a href='login.php'>Login here</a></p>
    </form>";
}
?>

		<?php astra_primary_content_bottom(); ?>

<?php if ( astra_page_layout() == 'right-sidebar' ) : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

<?php get_footer(); ?>
