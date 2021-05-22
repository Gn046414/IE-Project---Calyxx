<?php
/**
 * Astra functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define Constants
 */
define( 'ASTRA_THEME_VERSION', '3.3.0' );
define( 'ASTRA_THEME_SETTINGS', 'astra-settings' );
define( 'ASTRA_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'ASTRA_THEME_URI', trailingslashit( esc_url( get_template_directory_uri() ) ) );


/**
 * Minimum Version requirement of the Astra Pro addon.
 * This constant will be used to display the notice asking user to update the Astra addon to the version defined below.
 */
define( 'ASTRA_EXT_MIN_VER', '3.3.0' );

/**
 * Setup helper functions of Astra.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-theme-options.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-theme-strings.php';
require_once ASTRA_THEME_DIR . 'inc/core/common-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-icons.php';

/**
 * Update theme
 */
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-update.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/astra-update-functions.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-background-updater.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-pb-compatibility.php';


/**
 * Fonts Files
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-font-families.php';
if ( is_admin() ) {
	require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts-data.php';
}

require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts.php';

require_once ASTRA_THEME_DIR . 'inc/dynamic-css/container-layouts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-walker-page.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-enqueue-scripts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-gutenberg-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-dynamic-css.php';

/**
 * Custom template tags for this theme.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-attr.php';
require_once ASTRA_THEME_DIR . 'inc/template-tags.php';

require_once ASTRA_THEME_DIR . 'inc/widgets.php';
require_once ASTRA_THEME_DIR . 'inc/core/theme-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/admin-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/sidebar-manager.php';

/**
 * Markup Functions
 */
require_once ASTRA_THEME_DIR . 'inc/markup-extras.php';
require_once ASTRA_THEME_DIR . 'inc/extras.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog-config.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog.php';
require_once ASTRA_THEME_DIR . 'inc/blog/single-blog.php';
/**
 * Markup Files
 */
require_once ASTRA_THEME_DIR . 'inc/template-parts.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-loop.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-mobile-header.php';

/**
 * Functions and definitions.
 */
require_once ASTRA_THEME_DIR . 'inc/class-astra-after-setup-theme.php';

// Required files.
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-helper.php';

require_once ASTRA_THEME_DIR . 'inc/schema/class-astra-schema.php';

if ( is_admin() ) {

	/**
	 * Admin Menu Settings
	 */
	require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-settings.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/notices/class-astra-notices.php';

	/**
	 * Metabox additions.
	 */
	require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-boxes.php';
}

require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-box-operations.php';


/**
 * Customizer additions.
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-customizer.php';


/**
 * Compatibility
 */
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-jetpack.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/woocommerce/class-astra-woocommerce.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/edd/class-astra-edd.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/lifterlms/class-astra-lifterlms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/learndash/class-astra-learndash.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bb-ultimate-addon.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-contact-form-7.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-visual-composer.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-site-origin.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gravity-forms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bne-flyout.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-ubermeu.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-divi-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-amp.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-yoast-seo.php';
require_once ASTRA_THEME_DIR . 'inc/addons/transparent-header/class-astra-ext-transparent-header.php';
require_once ASTRA_THEME_DIR . 'inc/addons/breadcrumbs/class-astra-breadcrumbs.php';
require_once ASTRA_THEME_DIR . 'inc/addons/heading-colors/class-astra-heading-colors.php';
require_once ASTRA_THEME_DIR . 'inc/builder/class-astra-builder-loader.php';

// Elementor Compatibility requires PHP 5.4 for namespaces.
if ( version_compare( PHP_VERSION, '5.4', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor-pro.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-web-stories.php';
}

// Beaver Themer compatibility requires PHP 5.3 for anonymus functions.
if ( version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-themer.php';
}

require_once ASTRA_THEME_DIR . 'inc/core/markup/class-astra-markup.php';

/**
 * Load deprecated functions
 */
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-filters.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-functions.php';

function console_log($data) {
		echo '<script>';
		echo 'console.log('.json_encode($data).')';
		echo '</script>';
	}
?>

<?php
	function register()
	{
		echo "<head>
		<meta charset='utf-8'/>
		<title>Registration</title>
		<link rel='stylesheet' href='style.css'/>
		</head>";
		// Enter your host name, database username, password, and database name.
		// If you have not set database password on localhost then set empty.
		$con = mysqli_connect("localhost:50748","root","root","calyxx");
		// Check connection
		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		// When form submitted, insert values into the database.
		if (isset($_REQUEST['regusername'])) 
		{
			// removes backslashes
			$username = stripslashes($_REQUEST['regusername']);
			//escapes special characters in a string
			$username = mysqli_real_escape_string($con, $username);
			$password = stripslashes($_REQUEST['regpassword']);
			$password = mysqli_real_escape_string($con, $password);
			$query = $con->prepare("INSERT into `users` (username, password) VALUES (?, ?)");
			$password = md5($password);
			$query->bind_param('ss', $username,$password);
			$result = $query->execute();
			if ($result) 
			{
				//header("Location: https://www.calyxx.cf/login/");
				echo "<div class='form'>
					  <h3>You have successfully registered.</h3><br/>
					  <p class='link'>Click here to <a href='/login/'>login</a>.</p>
					  </div>";
			} 
			else 
			{
				echo "<div class='form'>
					  <h3>Something went wrong. Please try to register yourself again.</h3><br/>
					  <p class='link'>Click here to <a href='/register/'> register </a> again.</p>
					  </div>";
			}
			$query->close();
			$con->close();
		} 
		else 
		{
			echo"<form class='form' action='' method='post'>
					<h1 class='login-title'>Registration</h1>
					<p class='login-info'>Please fill in the below details to create an account.</p>
					<input type='text' class='login-input' name='regusername' placeholder='Username' required />
					<input type='password' class='login-input' name='regpassword' placeholder='Password' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
					title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters' required>
					<h5 class='password-text'>Password must contain the following:</h5>
					<ul>
						<li>A <b>lowercase</b> letter</li>
						<li>A <b>capital (uppercase)</b> letter</li>
						<li>A <b>number</b></li>
						<li>Minimum <b>8 characters</b></li>
					</ul>
					<input type='submit' name='submit' value='Register' class='login-button' >
					<p class='link'>Already have an account? <a href='/login/'>Login here</a></p>
				</form>";
		}
	}
	add_shortcode ('registersc','register');
?>

<?php
	function login()
	{
		// Enter your host name, database username, password, and database name.
		// If you have not set database password on localhost then set empty.
		$con = mysqli_connect("localhost:50748","root","root","calyxx");
		// Check connection
		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		session_start();
		// When form submitted, check and create user session.
		if (isset($_POST['username'])) 
		{
			$username = stripslashes($_REQUEST['username']);    // removes backslashes
			$username = mysqli_real_escape_string($con, $username);
			$password = stripslashes($_REQUEST['password']);
			$password = mysqli_real_escape_string($con, $password);
			// Check user is exist in the database
			/*$query = $con->prepare("SELECT * FROM `users` WHERE username=? AND password=?");
			$password = md5($password);
			$query->bind_param('ss', $username,$password);
			$result = $query->execute();
			$result = $exec->get_result(); // get the mysqli result
			$rows = $result->fetch_assoc();	
			echo print_r($rows);
			$rows = mysqli_num_rows($result);*/
		   $query    = "SELECT * FROM `users` WHERE username='$username' AND password='" . md5($password) . "'";
			$result = mysqli_query($con, $query) or die(mysql_error());
			$rows = mysqli_num_rows($result);
			if ($rows == 1) 
			{
				$_SESSION['username'] = $username;
					home();
			} 
			else 
			{
				echo "<div class='form'>
					  <h3>Incorrect Username/password.</h3><br/>
					  <p class='link'>Click here to <a href='/login/'>Login</a> again.</p>
					  </div>";
			}
			/*$query->close();
			$con->close();*/
		} 
		else 
		{
			echo "<form class='form' method='post' name='login'>
					<h1 class='login-title'>Login</h1>
					<p class='login-info'>Please enter your credentials to login.</p>
					<input type='text' class='login-input' name='username' placeholder='Username' autofocus='true'/>
					<input type='password' class='login-input' name='password' placeholder='Password'/>
					<p><input type='submit' value='Login' name='login_button' class='login-button'/></p>
					<p class='link'>Don't have an account? <a href='/register/'>Sign up now.</a></p>
				</form>";
		}
	}
	add_shortcode ('loginsc','login');
?>

<?php
	function insert_contact()
	{
		// Enter your host name, database username, password, and database name.
		// If you have not set database password on localhost then set empty.
		$con = mysqli_connect("localhost:50748","root","root","calyxx");
		// Check connection
		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		$username = stripslashes($_GET['username']);
		$username = mysqli_real_escape_string($con, $username);
		$contactname = stripslashes($_GET['contactname']);
		//escapes special characters in a string
		$contactname = mysqli_real_escape_string($con, $contactname);
		$contactemail = stripslashes($_GET['contactemail']);	
		$contactemail = mysqli_real_escape_string($con, $contactemail);

		$query    = "INSERT into emergency_contacts (username, contactname, contactemail, response)
						 VALUES ('$username','$contactname','$contactemail','No')";
		$result   = mysqli_query($con, $query);
		/*if ($query = $con->prepare("INSERT into `emergency_contacts` (username, contactname, contactemail, response) VALUES (?, ?, ?, ?)"))
		{
			$query->bind_param('ssss', $username,$contactname,$contactemail,"No");
			echo "Query is: " . $query;
			$result = $query->execute();*/
			if ($result) 
			{
				echo "<div class='form'>
						<p>You have successfully added your emergency contact. An email has been sent to your emergency contact to give consent for being added as an emergency contact. Only if the emergency contact gives consent, would he/she be notified while sending a SOS Alert.</p><br/>
						<p class='link'>Click here to go back to your <a href='/home%3fusername=$username'>homepage</a>.</p>
					  </div>";
			} 
			else 
			{
				echo $result->error;
			}
		/*}
		else
		{
			echo "SQLi problem!!";
		}*/
	}
	add_shortcode ('insertsc','insert_contact');
?>

<?php
	function emergency_contact()
	{
		if (isset($_REQUEST['cancel_add'])) 
		{
			login();
		}
		else
		{
?>
	<script> 
		function showPosition() 
		{
			if(navigator.geolocation) 
			{
				navigator.geolocation.getCurrentPosition(function(position) 
				{
					var positionInfo = "My current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + 									position.coords.longitude + ")";
					document.getElementById("locid").innerHTML = positionInfo;
				});
			} 
			else 
			{
				alert("Sorry, your browser does not support HTML5 geolocation.");
			}
		}
	</script>
	<form id="emergency-contact" class="form" method='get'>
		<p><label>User Name</label>
			<input type="text" id="user_name" name="username" class='login-input'> <br/></p>
		<p><label>Emergency Contact Name</label>
			<input type="text" id="contact_name" name="contactname" class='login-input'> <br/></p>
		<p><label>Emergency Contact Email</label>
			<input type="email" id="contact_email" name="contactemail" class='login-input'> <br/></p>
		<label for="myLocation">Please select this checkbox to share your user location :</label> 
		<input type="checkbox" id="myLocation" onclick="showPosition()">
		<p><label>Message</label>
			<textarea name="message" id="locid" placeholder="Please accept my request for adding you as an emergency contact and give me your consent."></textarea> <br/></p>
		<p><input type="submit" name="add_cont" value="Send" style="display: inline-block; margin: 0 auto;">
			<a href="/login/">
		   <input type='submit' name='cancel_add' value='Cancel' style="display: inline-block; margin: 0px 0px 0px 130px;"/></a></p>
	</form>
		
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
	<script type="text/javascript">
		(function()
		 {
			// https://dashboard.emailjs.com/admin/integration
			emailjs.init('user_NDY9bjJZTUSIlZ5F1Ncxw');
		})();
	</script>
	<script type="text/javascript">
		window.onload = function() 
		{
			document.getElementById('emergency-contact').addEventListener('submit', function(event) 
			{
				event.preventDefault();
				emailjs.sendForm('service_b7j88ik', 'template_7b80esk', this)
				.then(function() 
				{
					console.log('SUCCESS!');
					window.location = '/insert_consent/?username='+document.getElementById("user_name").value+'&contactname='+document.getElementById("contact_name").value+'&contactemail='+document.getElementById("contact_email").value;
				},  
				function(error)
				{
					console.log('FAILED...', error);
				});
			});
		}
	</script>

	<?php
	}
	}
	add_shortcode ('emergencysc','emergency_contact');
?>

<?php
function home(){
	session_start();
	// Enter your host name, database username, password, and database name.
	// If you have not set database password on localhost then set empty.
	$con = mysqli_connect("localhost:50748","root","root","calyxx");
	// Check connection
	if (mysqli_connect_errno())
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
		echo"<div class='form'>
				<p>Hey ";

	$username = $_SESSION['username'];
	if(isset($username))
	{
		echo $username . "!";
	}
	else{
		$username = stripslashes($_GET['username']);
		$username = mysqli_real_escape_string($con, $username);
		echo $username . "!";
	}
				echo"</p>
				<p>You are logged in.</p>
				<input type='button' name='sos' value='SOS Alert' class='login-button' onClick='document.location.href=\"/sos-2%3fusername=$username\"'></br><br>
				<input type='button' name='add' value='Add Emergency Contact' class='login-button' onClick='document.location.href=\"/add_emergency%3fusername=$username\"'></br><br>
				<input type='button' name='view' value='View Emergency Contact' class='login-button' onClick='document.location.href=\"/view-contacts%3fusername=$username\"'></br><br>
				<p class='link'><a href='/login/'>Logout</a></p>
			</div>";
}
add_shortcode ('homesc','home');
?>

<?php
	function sos_alert()
	{
		$con = mysqli_connect("localhost:50748","root","root","calyxx");
		// Check connection
		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		
		echo "<form id='send-sos' class='form2'>
			<h3>Sent SOS Alerts</h3><br/>";
	
		$username = stripslashes($_GET['username']);
		$username = mysqli_real_escape_string($con, $username);
		$query = "SELECT contactemail, contactname FROM emergency_contacts WHERE username='$username' AND upper(response)=upper('Yes') limit 1";
		$result = $con->query($query);
		
		if ($result->num_rows > 0) 
		{
			$contactname = array();
			$contactemail = array();
			// output data of each row
			while($row = $result->fetch_assoc()) 
			{
				$contactname[] = $row['contactname'];
				$contactemail[] = $row['contactemail'];
			}
			if(count($contactname) >= 1)
			{
				$name = $contactname[0];
				$email = $contactemail[0];
				echo "Emergency SOS Email sent to " .$name . " ( " .$email . " )";
?>
			<p class='link'>Click here to go back to your <a href="/?username=<?php echo $username;?>">homepage</a>.</p>
			<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
				<script type="text/javascript">
					(function()
					 {
						// https://dashboard.emailjs.com/admin/integration
						emailjs.init('user_NDY9bjJZTUSIlZ5F1Ncxw');
					})();
				</script>
				<script type="text/javascript">
					window.onload = function()
					{
						var templateParams = 
							{
								'username': '<?php echo $username; ?>',
								'name':'<?php echo $name; ?>',
								'email':'<?php echo $email; ?>'				
							};
						console.log(templateParams);
						emailjs.send('service_b7j88ik', 'template_nlpya9r', templateParams)
							.then(function(response) 
							{
								console.log('SUCCESS!', response.status, response.text);
							}, function(error) 
							{
								console.log('FAILED...', error);
							});
					}
				</script>
<?php
		}}
		else 
		{
		  echo "No emergency contacts with consent.";
?>
			<p class='link'>Click here to go back to your <a href="/?username=<?php echo $username;?>">homepage</a>.</p>
<?php
		}
		$con->close();
		echo"</form>";
	}
	add_shortcode ('sossc','sos_alert');
?>
				
<?php
	function view_emergency()
	{
		$con = mysqli_connect("localhost:50748","root","root","calyxx");
		// Check connection
		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		
		echo "<form id='view-emergency' class='form2'>
			<h3>View Your Emergency Contacts</h3><br/>";
	
		$username = stripslashes($_GET['username']);
		$username = mysqli_real_escape_string($con, $username);
		$query = "SELECT * FROM emergency_contacts WHERE username='$username'";
		$result = $con->query($query);
		
		if ($result->num_rows > 0) 
		{
		  echo "<table><tr><th>Name</th><th>Email</th><th>Response</th></tr>";
		  // output data of each row
		  while($row = $result->fetch_assoc()) 
		  {
			echo "<tr><td>".$row["contactname"]."</td><td>".$row["contactemail"]."</td><td>".$row["response"]."</td></tr>";
		  }
		  echo "</table>";
			?>
			<p class='link'>Click here to go back to your <a href="/?username=<?php echo $username;?>">homepage</a>.</p>
<?php		
		}
		else 
		{
		  echo "No emergency contacts added.";
		?>
		<p class='link'>Click here to go back to your <a href="/?username=<?php echo $username;?>">homepage</a>.</p>
<?php	
		}
		$con->close();
	
			/*$query = $con->prepare("SELECT * FROM `emergency_contacts` WHERE username=?");
			$query->bind_param('s',"$username");
		    echo $query;
			$result = $query->execute();
			echo $result;*/
			echo"</form>";
	}
	add_shortcode ('viewemersc','view_emergency');
?>

<?php
function consent()
{
	$con = mysqli_connect("localhost:50748","root","root","calyxx");
	// Check connection
	if (mysqli_connect_errno())
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	/*echo "<form id='consent-form' class='form'>
		<p><h3>Please select yes or no to give consent</h3></p><br>
		<label>Yes</label>
		<input type='radio' id='yes' name='radiobtn' value='yes'><br>
		<label>No</label>
		<input type='radio' id='no' name='radiobtn' value='no'><br>
		<input type='submit' name='submit' value='Register' class='login-button'>
	</form>";*/
	
		//$radioVal = $_REQUEST["radiobtn"]; 
		$username = $_GET["user"];
		$mail = $_GET["mail"];
		//echo "Radiiobtn value is" . $radioVal;
	/*if(isset($_REQUEST["submit"]))
	{*/
		$query = "UPDATE emergency_contacts SET response = 'YES' WHERE username = '$username' AND contactemail='$mail'";
		 $result   = mysqli_query($con, $query);
		 if ($result) 
		{
			echo "<div class='form'>
						<p>Your consent has been registered successfully. Please keep a lookout in the future for any SOS alerts sent to your registered email address. Thank you for being a part of Calyxx and helping us protect your loved ones. </p><br/>
						<p class='link'>Click here to <a href='/login/'>Login</a>.</p>
					  </div>";
        } 
		else 
		{
            echo "Something went wrong. Your consent was not registered. Please try to click on the link again.";
        }
	//}
}
add_shortcode ('consentsc','consent');
?>