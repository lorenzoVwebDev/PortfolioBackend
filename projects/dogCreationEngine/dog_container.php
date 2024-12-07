<?php
class Dog_container {
  private string $app;
  private $dog_location;

  function __construct($value) {
    if(function_exists('get_properties')) {
      $this->app=$value;
    } else {
      exit;
    }
  }

  public function set_app($value) {
    $this->app=$value;
  }

  public function get_dog_application() {
    $xmlDoc=new DOMDocument();
    if (file_exists(__DIR__."/xml-files/dog_applications.xml")) {
      $xmlDoc->load(__DIR__."/xml-files/dog_applications.xml");
      $typeNodes=$xmlDoc->getElementsByTagName("type");
      foreach($typeNodes as $searchNodes) {
        $id=$searchNodes->getAttribute('ID');
        if($id==$this->app) {
          $location=$searchNodes->getElementsByTagName('location');
          $file=$location->item(0)->nodeValue;
          return $file;
        }
      }
    } else {
      //throw exception
    }
  }

  function create_object($properties) {
    $dog_loc=$this->get_dog_application();
    if(($dog_loc==false)||(!file_exists(__DIR__.$dog_loc))) {
      print 'false'.'<br>';
      //throw exception
      return false;
    } else {
      if (require_once(__DIR__.$dog_loc)) {
        $class_array=get_declared_classes();
        $last_position=count($class_array)-1;
        $class_name=$class_array[$last_position];
        $object=new $class_name($properties);
        return $object;
      } else {
        //throw exception
      }

    } 
  }
}
?>