<?php 
	require 'DB.php';

	$db = new DB();

	$output = "";
	$rs = $db->getData('SELECT `category_id`, `category` FROM `category`',array());


	if ($rs) {
		$output = ['status'=>'sucess', 'data'=>$rs];
	}else{
		$output = ['status'=>'fail','error'=>"something wrong"];
	}
	echo json_encode($output)



 ?>