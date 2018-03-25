<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
        </script>
        
        	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js" type="text/javascript" charset="utf-8"></script>
        	
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
        </script>
        <script src="jquery.calendar.js">
        </script>
    </head>
    <body>
    	<div class="container">
    		<div class="row top_timeline_btn">
    			<div class="col-md-1"></div>
    		</div>
    	</div> 
        <div class="container">
            <input type="hidden" id="hiddenCurrentMonth" value="<?php echo date('Y-m-d')?>"/>
            <div class="row timeline_row">
                <div class="col-md-1 ">
                 &nbsp;
                </div>
                <div class="col-md-11">
                    <div class="row">
                        <a role="button" id="prevMonth">
                            <span class="glyphicon glyphicon-chevron-left">
                            </span>
                        </a>
                        <a role="button" id="nextMonth">
                            <span class="glyphicon glyphicon-chevron-right">
                            </span>
                        </a>
                    </div>
                    <table id="bookingCalendar" border="1" class="table table-striped" style="margin-bottom: 0;">
                    </table>
                </div>
            </div>
            <div class="append-timeline">	
            </div>
        </div>
    </body>

  
<style>
.t_sortable tr, .ui-sortable-helper {
  /*cursor: move;*/
}
.green{
	background-color:green;
	height: 35px;
    color: #d9d9d9;
}
.grey{
	background-color:grey;
    color: #d9d9d9;
}
#prevMonth {
    position: absolute;
    top: -25px;
    left: 456px;
}
#nextMonth {
    position: absolute;
    top: -25px;
    right: 570px;
}
.ui-sortable-handle td {
    padding: 10px 10px;
    border: 1px solid #ddd;
}
.pull-left.timeline_list ul {
    position: absolute;
    list-style-type: none;
    padding: 0;
    width: 100%;
}
#bookingCalendar td {
    background: #f5f5f5;
    border: 1px solid #dfdfdf;
    color: #686868;
    font-size: 15px;
    text-align: center;
    padding: 8px 0;
}
.col-md-11.pull-left.timeline_sub_list table {
    margin-bottom: 2px;
}
.top_timeline_btn {
    margin-top: 20px;
    margin-bottom: 3px;
}
.timeline_row .col-md-11.pull-left {
    padding: 0;}
 .dropdown-menu{
 	min-width: 92px;
    padding: 0px 9px !important;
    border-radius: 0px;
 }
 .col-md-1.side_bar {
    padding: 17px 10px;
    background: #f5f5f5;
    border: 1px solid #dfdfdf;
}
.col-md-1.timeline_list {
    padding: 0;
    margin-top: 2px;
}
.btn.btn-primary.dropdown-toggle {
    border-radius: 0px;
    width: 100%;
    padding: 9px 0;
    padding: 9px 8px;
    text-align: left;
}
.col-md-11.pull-left.timeline_sub_list {
    margin-top: 2px;
}

/*
.pull-left.side_bar {
    padding: 16px 0;
}

.top_timeline_btn .col-md-11 {
    padding-left: 3px;
}
.col-md-1.pull-left.timeline_list li {
    border: 1px solid #ddd;
    padding: 10px 1px;
    margin-right: 1px;
}

}*/

.append-timeline .table > tbody > tr > td, 
.append-timeline.table > tbody > tr > th, 
.append-timeline .table > tfoot > tr > td, 
.append-timeline .table > tfoot > tr > th, 
.append-timeline .table > thead > tr > td,
.append-timeline  .table > thead > tr > th {
	padding: 8px 3px;
	line-height: 0.5;
	vertical-align: top;
	border-top: 1px solid #ddd;
	background: #fff;
	font-size: 12px;
}

.append-timeline td{
	padding: 8px;
	line-height: 0.5;
	vertical-align: top;
	border-top: 1px solid #ddd;
		background: #fff ;
}
span.doclsp{
	margin-bottom: 10px;
}

.pull-left {
	float: left !important;
	font-size: 11px;
}

.prodname{
	margin-top: 10px;
	font-weight: bold;
	margin-bottom: 10px;
}

.row {
	margin-right: -15px;
	margin-left: -15px;
	margin-bottom: 15px;
}
.booked{
	background: blue !important;
}

.avilable,.avilableglobal{
	 background: green !important;
}

.notavilable,.notavilableglobal{
	background: white !important;
}

.ocupied{
	
	background: gray !important;
}

.permotion{
	background:#b621ae !important;
}

input {
	line-height: normal;
	width: 25px;
}

.doclsp{
	display:none;

}
.test{
	border: 2px solid red;
}

tbody{
	box-shadow: rgb(48, 42, 48) 0px 4px 9px -4px inset;

}

.preventclick td{
	pointer-events: none;
} 

</style>

</html>