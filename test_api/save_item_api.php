<?php 
require 'DB.php';

$db = new DB();

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Sanitize.
  $item_name = $request->item_name;
  $item_price = $request->item_price;
  $category_id = $request->category;
  $description = $request->description;

  $data = array(
  					'item_name'=>$item_name,
  					'item_price'=>$item_price,
  					'category_id'=>$category_id,
  					'description'=>$description
  			  );
  // Create.
  $query = "INSERT INTO `product`(`item_name`, `item_price`, `category_id`, `description`) VALUES (:item_name,:item_price,:category_id,:description)";

  $val = $db->setData($query,$data);

  if($val)
  {
    http_response_code(201);
   
    echo json_encode(array('status'=>'success','message'=>'Add record successfully....'));
  }
  else
  {
    http_response_code(422);
    echo json_encode(array('status'=>'fail','message'=>'not Add record'));
  }
}
?>