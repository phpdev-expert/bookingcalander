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
    			<div class="col-md-11">
  					<input type="button" value="+ Timeline" onclick="addTimeLine()"/>
    			</div>
    		</div>
    	</div> 
        <div class="container">
            <input type="hidden" id="hiddenCurrentMonth" value="<?php echo date('Y-m-d')?>"/>
            <div class="row timeline_row">
                <div class="col-md-1 side_bar">
                    Sidebar
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


    <div class="modal fade" tabindex="-1" role="dialog" id="addTimeline">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            &times;
                        </span>
                    </button>
                    <h4 class="modal-title">
                        Add Time Line
                    </h4>
                </div>
                <div class="modal-body">
                
                
                <div class="form-group">
                        <label for="exampleInputEmail1">
                        Name
                        </label>
                        
                        <input  type="text" id="timeline"/>
                        
                </div>
                        
                    <div class="form-group">
                        <label for="exampleInputEmail1">
                            Select Products
                        </label>

                        <ul class="list-group">
                            <li class="list-group-item">
                                <input class="products_cb" data-id="1" data-available="5" data-booked="3" data-duration="4"  type="checkbox" value="1"/> Room 1
                            </li>
                            <li class="list-group-item">
                                <input  class="products_cb" data-id="2" data-available="6" data-booked="4" data-duration="3"  type="checkbox" value="2"/> Room 2
                            </li>
                            <li class="list-group-item">
                                <input class="products_cb" data-id="3" data-available="4" data-booked="3"  data-duration="1" type="checkbox" value="3"/> Room 3
                            </li>
                            <li class="list-group-item">
                                <input class="products_cb" data-id="4" data-available="5" data-booked="0" data-duration="2" type="checkbox" value="4"/> Room 4
                            </li>
                            <li class="list-group-item">
                                <input  class="products_cb" data-id="5" data-available="5" data-booked="0" data-duration="1" type="checkbox" value="5"/> Room 5
                            </li>
                            <li class="list-group-item">
                                <input class="products_cb" data-id="6" data-available="3" data-booked="0" data-duration="2" type="checkbox" value="6"/> Room 6
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary" onclick="saveTimeline()">
                        Save changes
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
<style>
.t_sortable tr, .ui-sortable-helper {
  cursor: move;
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
a#prevMonth {
    position: absolute;
    top: 17px;
    left: -5;
}
a#nextMonth {
    position: absolute;
    top: 17px;
    right: -5;
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
.sub_list_timeline {
    position: absolute;
    left: 0;
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
.top_timeline_btn{
	margin: 5px 0 5px 0;
}
.timeline_row .col-md-11.pull-left {
    padding: 0;}
 .dropdown-menu{
 	min-width: 92px;
    padding: 0px 9px !important;
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
</style>

</html>