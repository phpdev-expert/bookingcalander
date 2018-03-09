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
	$bookedFrom=['5-Apr-2018','5-Mar-2018','12-Mar-2018'];
	$bookedProduct=['0','1','1'];
	$allDates=getAllDates($_REQUEST['currentMonth']);
	//echo "<pre>";print_r($allDates);die;
	$calendarData=[];
	if($allDates){
		$calendarData['data']=$allDates;
		$calendarData['date']=$_REQUEST['currentMonth'];
		$calendarData['bookedFrom']=$bookedFrom;
		$calendarData['bookedProduct']=$bookedProduct;
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
        	$list[]=ltrim(date('d-M-Y', $time),0);
	}
	return $list;
		
}

//pr
function pr($data){
	echo "<pre>";print_r($data)."</pre";die;
}
?>