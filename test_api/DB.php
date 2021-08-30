<?php 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	class DB
	{
		private $conn;
		public function __construct()
		{
			try {
			  $this->conn = new PDO("mysql:host=localhost;dbname=item_detail", "root", "");
			  $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch(PDOException $e) {
			  echo "Connection failed: " . $e->getMessage();
			}
		}//end of function constructor

		public function getData($query,$bind){
			$stmt = $this->conn->prepare($query);
			$stmt->execute($bind);
			$rs = $stmt->fetchAll();
			return $rs ? $rs : null;
		}//end of function

		public function setData($query,$bind){
			$stmt = $this->conn->prepare($query);
			if($stmt->execute($bind)){
				return true;
			}else{
				return false;
			}
		}//end of function
	}

 ?>