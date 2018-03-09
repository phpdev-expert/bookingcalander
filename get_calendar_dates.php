<?php
if(isset($_REQUEST['currentMonth']) && $_REQUEST['currentMonth']){
	if(isset($_REQUEST['type'])) {
		if($_REQUEST['type']=='prev'){
			$prevMonth = strtotime($_REQUEST['currentMonth'].' -1 month');
			$_REQUEST['currentMonth']=date('Y-m-d', $prevMonth);
		}else{
			$nextMonth = strtotime($_REQUEST['currentMonth'].' +1 month');
			$_REQUEST['currentMonth']=date('Y-m-d', $nextMonth);
		}
		
	}
	$allDates=getAllDates($_REQUEST['currentMonth']);
	$calendarData=[];
	if($allDates){
		$calendarData['data']=$allDates;
		$calendarData['date']=$_REQUEST['currentMonth'];
		echo json_encode($calendarData);die;
	}
}

//get all dates for given month and year
function getAllDates($date){
	$list=array();
	$month = date('m',strtotime($date));
	$year = date('Y',strtotime($date));
	for($d=1; $d<=31; $d++){
    	$time=mktime(12, 0, 0, $month, $d, $year);          
    	if (date('m', $time)==$month)       
        	$list[]=date('d-M', $time);
	}
	return $list;
		
}

//pr
function pr($data){
	echo "<pre>";print_r($data)."</pre";die;
}
?>