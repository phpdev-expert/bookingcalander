<?php
if (isset($_REQUEST['currentMonth']) && $_REQUEST['currentMonth']) {
    if (isset($_REQUEST['type'])) {
        if ($_REQUEST['type'] == 'prev') {
            $prevMonth = strtotime($_REQUEST['currentMonth'].' -20 days');
            $_REQUEST['currentMonth'] = date('Y-m-d', $prevMonth);
        }else {
            $nextMonth = strtotime($_REQUEST['currentMonth'].' +20 days');
            $_REQUEST['currentMonth'] = date('Y-m-d', $nextMonth);


        }

    }

    $bookedProduct = array(
        array (
            "name"        => "Product 1",
            "qty"         => 30,
            "price"       => 200,
            "timeline_id" => 0,
            "id"          => 1,
            "date_diabled"=>"0",
            "avilable"    =>"8-Mar-2018,9-Mar-2018",
            "date_promo"    => array(
                "date"=>'30-Mar-2018,14-Mar-2018',
                "qty" =>'30,20',
            ),
            "bookings"           =>
            array(
                "date"=>'3-Mar-2018,4-Mar-2018,5-Mar-2018,15-Mar-2018,16-Mar-2018,10-Apr-2018,11-Apr-2018',
                "qty" =>'3,3,3,4,4,5,6',
            )
        ),

        array (
            "name"        => "Product 2",
            "qty"         => 40,
            "price"       => 100,
            "timeline_id" => 0,
            "id"          => 2,
            "date_diabled"=>"0",
            "date_promo"  =>"0",
            "avilable"    =>"0",
            "bookings"           =>
            array(
                "date"=>'2-Mar-2018,4-Mar-2018',
                "qty" =>'3,6',
            )
        ),



        array (
            "name"        => "Product 3",
            "qty"         => 30,
            "price"       => 200,
            "timeline_id" => 1,
            "id"          => 3,
            "date_diabled"=>"3-Mar-2018,4-Mar-2018",
            "avilable"    =>"0",
            "date_promo"  =>"0",
            "bookings"           =>
            array(
                "date"=>'13-Mar-2018,14-Mar-2018,11-Apr-2018,12-Apr-2018',
                "qty" =>'3,3,5,6',
            )
        ),

        array (
            "name"        => "Product 4",
            "qty"         => 30,
            "price"       => 200,
            "date_promo"  =>"0",
            "avilable"    =>"0",
            "timeline_id" => 1,
            "id"          => 4,
            "date_diabled"=>"13-Mar-2018,14-Mar-2018,11-Apr-2018,12-Apr-2018",
            "bookings"           =>
            array(
                "date"=>'3-Mar-2018,4-Mar-2018',
                "qty" =>'2,2',
            )
        ),

    );

    $allDates     = getAllDates($_REQUEST['currentMonth']);
    //echo " < pre > ";print_r($allDates);die;
    $calendarData = [];
    if ($allDates) {
        $calendarData['data'] = $allDates;
        $calendarData['date'] = $_REQUEST['currentMonth'];
        $calendarData['products'] = $bookedProduct;
        echo json_encode($calendarData);die;
    }
}

//get all dates for given month and year
function getAllDates($date)
{

    $list = array();

    $begin    = new DateTime($date);
    $e        = date('Y-m-d',strtotime($date.' +20 days'));
    $end      = new DateTime($e);

    $interval = DateInterval::createFromDateString('1 day');
    $period   = new DatePeriod($begin, $interval, $end);

    foreach ($period as $dt) {
        $list[] = ltrim($dt->format("d-M-Y"),0);
    }
    return $list;
}

//pr
function pr($data)
{
    echo "<pre>";print_r($data)."</pre";die;
}
?>