<?php
declare(strict_types=1);

function checkUrlValidity($url) {
  // Use get_headers to fetch HTTP response headers from the URL
  $headers = @get_headers($url);

  // Check if we received a valid response (status code 200 OK)
  if ($headers && strpos($headers[0], "200") !== false) {
      return true;  // URL is valid
  } else {
      return false;  // URL is not valid
  }
}

function error_check_dog_app($lab) {
  list($name_error, $breed_error, $color_error, $weight_error) = explode(',', $lab->to_string());
  print $name_error == 'true' ? 'Name update successful<br/>' : 'Name update not successful <br/>';
  print $breed_error == 'true' ? ' Breed update successful<br/>' : 'Breed update not successful<br/>';
  print $color_error == 'true' ? 'Color update successful<br/>' : 'Color update not successful<br/>';
  print $weight_error = 'true' ? 'Weight update successful<br/>' : 'Weight update not successful<br/>';
}

function get_properties($lab) {
  print "Your dog's name is ".$lab->get_dog_name()."<br>";
  print "Your dog weights is ".$lab->get_dog_weight()."kg. <br>";
  print "Your dog's breed is ".$lab->get_dog_breed()."<br>";
  print "Your dog's color is ".$lab->get_dog_color()."<br>";
}
//Main section
if (file_exists("../dog_container.php")) {
  require_once("../dog_container.php");
} else {
  //send exception
}

if((isset($_POST['dog_app']))) {
  if (isset($_POST['dog_name'])&&isset($_POST['dog_weight'])&&isset($_POST['dog_breed'])&&isset($_POST['dog_color'])) {
    $container=new Dog_container(filter_var($_POST['dog_app'], FILTER_SANITIZE_FULL_SPECIAL_CHARS));
    if (isset($container)) {
      $dog_name=filter_var($_POST['dog_name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
      $dog_color=filter_var($_POST['dog_color'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
      $dog_weight=filter_var($_POST['dog_weight'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
      $dog_breed=filter_var($_POST['dog_breed'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  
      $properties=array(
        $dog_name,
        $dog_breed,
        $dog_color,
        $dog_weight
      );
  
      $lab = $container->create_object($properties);
    } else {
      //send exception
    }

    if ($lab != false) {
      error_check_dog_app($lab);
      get_properties($lab);
    } else {
      //send exception
      print "error: dog not created";
    }
  } else {
    print "<p>Missing or invalid parameters. Please go back to the dog home page to enter valid information. <br/>";
    print "<a href='dog.html'>Dog Creation Page<a/>";
  }
} else {
  $container=new Dog_container("selectbox");
  $breeds=$container->create_object("selectbox");

  if ($breeds!=false) {
    $properties="../xml-files/breeds.xml";
    print $breeds->get_select($properties);
  } else {
    print "System Error #4";
  }
  
} 

?>