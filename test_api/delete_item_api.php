<?php 
	require 'DB.php';

	$db = new DB();

	$output = "";

	$postdata = file_get_contents("php://input");

	if(isset($postdata) && !empty($postdata)){

		$request = json_decode($postdata);
		$item_id = $request->id;

		$rs = $db->setData('DELETE FROM `product` WHERE item_id=:item_id',array('item_id'=>$item_id));


		if ($rs) {
			$output = ['status'=>'sucess', 'data'=>$rs];
		}else{
			$output = ['status'=>'fail','error'=>"something wrong"];
		}
		echo json_encode($output);
	}	
	



 ?>