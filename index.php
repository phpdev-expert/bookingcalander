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
    
     <input type="button" value="+ Timeline" onclick="addTimeLine()"/>
     
        <div class="container">
            <input type="hidden" id="hiddenCurrentMonth" value="<?php echo date('Y-m-d')?>"/>
            <div class="row">
                <div class="col-md-1 pull-left">
                    Sidebar
                </div>
                <div class="col-md-11 pull-left">
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
}
.grey{
	background-color:grey;
}
</style>

</html>