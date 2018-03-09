 var tableData="";
$(document).ready(function(){
        var currentMonth=$('#hiddenCurrentMonth').val();

        //ajax request
        var tableData={
            currentMonth:currentMonth
        };
        ajaxBuildTable(tableData);

        //prevMonth click
        $('#prevMonth').click(function(){
                currentMonth=$('#hiddenCurrentMonth').val();
                var tableData={
                    currentMonth:currentMonth,type:'prev'
                };
                ajaxBuildTable(tableData);
            });

        //nextMonth click
        $('#nextMonth').click(function(){
                currentMonth=$('#hiddenCurrentMonth').val();
                var tableData={
                    currentMonth:currentMonth,type:'next'
                };
                ajaxBuildTable(tableData);
            });

    });

//ajax common for table builder
function ajaxBuildTable(data){
    $.ajax({
            url:'get_calendar_dates.php',
            data:data,
            datatype:'json',
            success:function(response){
                buildHtmlTable(response);
            }

        });
}
function buildHtmlTable(data){
     tableData=$.parseJSON(data);
    $('#hiddenCurrentMonth').val(tableData.date);
    if(tableData.data.length>0){
        var table='<tr>';
        $.each(tableData.data,function(index,value){
                table+='<td width="100px">'+value+'</td>';
            });
        table+='</tr>';
        
        for(i=0;i<=10;i++){
           
        }

    }
    $('#bookingCalendar').html(table);
}

function addTimeLine(){
	
	$("#addTimeline").modal('show')
	
}

function saveTimeline(){
	var table="";
	var timeline=$("#timeline").val()
	
	var randomNumberBetween0and19 = Math.floor(Math.random() *1000);
	
var timelineData = '<div class="row">'+
'                <div class="col-md-1 pull-left">'+timeline+
'                </div>'+
'                <div class="col-md-11 pull-left">'+
'                    <table id="'+randomNumberBetween0and19+'" border="1" class="table table-striped timeline_product t_sortable">'+
'                    </table>'+
'                </div>'+
'            </div>';
	

 $('.append-timeline').append(timelineData);
	
	$(".products_cb:checked").each(function(){
	  var th=this;
	  	 table+='<tr class="'+timeline+'">';
            $.each(tableData.data,function(index,value){
                    table+='<td width="100px" data-id="">'+$(th).parent().text()+' </td>';
                });
            table+='</tr>';

	})
	

            
            $('.timeline_product:last').append(table);
            
	
	$("#addTimeline").modal('hide')
	
	appllyDrag();
}
function appllyDrag(){
	
	
  $(".t_sortable").sortable({
    connectWith: ".t_sortable",
    helper:"clone",
    receive:function( event, ui ){
    	console.log('reciver'+event.target.id);
    	console.log($('sender'+ui.sender).attr('id'))
	},
    zIndex: 999990
  }).disableSelection();
  
}