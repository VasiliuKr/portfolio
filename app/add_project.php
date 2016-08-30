<?php 
	
	$name = $_POST['projectName'];
	$data = array();

	
	if ($name === '') {
		$data['status'] = 'error';
	}else{
		$data['status'] = 'OK';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

 ?>