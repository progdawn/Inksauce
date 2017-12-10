<?php

    $to = 'progdawn@gmail.com' ;
    $name = $_POST['name'];
    $email = $_POST['email'];
    $imageurl = $_POST['imageurl'];
    $description = $_POST['description'];
    $subject = 'Image Submission';

    $message = 'Name: ' . $_POST [ "name" ] . '<br />Email: '. $_POST [ "email" ] . '<br />Image URL: '. $_POST [ "imageurl" ] . '<br />Description: ' . $_POST ["description"];
    $headers = 'Pic from: ' . $_POST[ "email" ] . PHP_EOL ;
    mail ( $to, $subject, $message, $headers ) ;

    echo('<h2 class="display-4">Thanks, ' . $_POST["name"] . '!</h2>');
    echo('<p class="lead">I will get back to you soon at ' . $_POST["email"] . '</p>');
    echo('<p>Just so you know, here is what you submitted: </p>');
    echo('<p>The image url you submitted was <span class="php-underline">' . $_POST["imageurl"] . '</span></p>');
    echo('<p>And the description you gave was <span class="php-quotes">' . $_POST["description"] . '</span></p>');
?>
