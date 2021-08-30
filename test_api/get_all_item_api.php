<?php 
	require 'DB.php';

	$db = new DB();

	$output = "";
	$rs = $db->getData('SELECT `item_id`, `item_name`, `item_price`, `category`, `description` FROM `product` as p INNER JOIN category as c ON p.category_id=c.category_id',array());


	if ($rs) {
		$output = ['status'=>'sucess', 'data'=>$rs];
	}else{
		$output = ['status'=>'fail','error'=>"something wrong"];
	}
	echo json_encode($output)



 ?>