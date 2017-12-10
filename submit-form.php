<?php

    // REPLACE THE LINE BELOW WITH YOUR E-MAIL ADDRESS.
    $to = 'myersd2@gmatc.matc.edu' ;
    $subject = 'Pic submission' ;

    // NOT SUGGESTED TO CHANGE THESE VALUES
	$message = ('Name: ' . $_POST ["name"] . PHP_EOL .                
                'Email: ' . $_POST ["email"] . PHP_EOL .                
                'Image URL: ' . $_POST ["imageurl"] . PHP_EOL .                
                'Description: ' . $_POST ["description"]);  
    $headers = 'From: ' . $_POST[ "email" ] . PHP_EOL ;
    mail ( $to, $subject, $message, $headers ) ;

    // THE TEXT IN QUOTES BELOW IS WHAT WILL BE
    // DISPLAYED TO USERS AFTER SUBMITTING THE FORM.
    echo('<h2 class="display-4">Thanks, ' . $_POST["name"] . '!</h2>');
    echo('<p class="lead">I will get back to you soon at ' . $_POST["email"] . '</p>');
    echo('<p>Just so you know, here is what you submitted: </p>');
    echo('<p>The image url you submitted was <span class="php-underline">' . $_POST["imageurl"] . '</span></p>');
    echo('<p>And the description you gave was <span class="php-quotes">' . $_POST["description"] . '</span></p>');
    
?>