<?php
class GetBreeds {
  //set $result public
  private $result;
  function __construct($properties_array) {
    if (!method_exists('dog_container', 'create_object')) {
      exit;
    }
  }
//old get_select() function 
/*   public function get_select($dog_app) {
    if (($dog_app != false)&&(file_exists($dog_app))) {
      $breed_file=simplexml_load_file($dog_app);
      $xmlText=$breed_file->asXML();
      $selectBox = "<select name='dog_breed' id='dog_breed'>";
      $selectBox .= "<option value='-1' selected>Select a dog breed</option>";
      foreach($breed_file->children() as $index=>$value) {
        $selectBox .= "<option value='$index'>$value</option>";
      }
      $selectBox.= "</select>";
      $this->result=$selectBox;
      return $this->result;
    } else {
      return false;
    }
  } */

  public function get_select($dog_app) {
    if($dog_app!=false&&file_exists($dog_app)) {
      $breeds=simplexml_load_file($dog_app);
      $json=json_encode($breeds);
      $breeds_array=json_decode($json, true);
      $selectBox="<select name='dog_breed' id='dog_breed'>";
      $selectBox.="<option value='-1' selected>Select a dog breed</option>";
      foreach($breeds_array['breed']as$index=>$value) {
        $selectBox.="<option value='$value'>$value</option>";
      }
      $selectBox.="</select>";
      $this->result=$selectBox;
      return $this->result;
    }
  }
}

?>