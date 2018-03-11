 var tableData="";
 var dateTo='05-Mar-2018';
 var dateFrom='10-Mar-2018';
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
				var dateParts=value.split('-');
				
                table+='<td width="100px">'+dateParts[0]+'<br>'+dateParts[1]+'</td>';
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
'                <div class="col-md-1 pull-left timeline_list">'+
'                 <div class="dropdown">  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">'+timeline+' <span class="caret"></span></button>  <ul class="dropdown-menu sub_list_timeline"> <li>Prod 1 </li> <li> Prod 2 </li>  <li> Prod 3 </li> </ul></div>                               '+
'                </div>'+
'                <div class="col-md-11 pull-left timeline_sub_list">'+
'                    <table id="'+randomNumberBetween0and19+'" border="1" class="table table-striped timeline_product t_sortable">'+
'                    </table>'+
'                </div>'+
'            </div>';
	

 $('.append-timeline').append(timelineData);
	
	$(".products_cb:checked").each(function(){
	  var th=this;
	  	 table+='<tr class="'+timeline+'" id="timeline-'+$(th).data('id')+'">';
            $.each(tableData.data,function(index,value){
				var bookedClass='';
				var arrIndex=$.inArray(value,tableData.bookedFrom);
				if(arrIndex>=0){
					if($(th).data('id')== tableData.bookedProduct[arrIndex]){
						bookedClass='green';
					}
				}
                table+='<td width="100px" data-id="'+$(th).data('id')+'" data-duration="'+$(th).data('duration')+'" data-date="'+value+'" class="'+value+' '+bookedClass+'">'+$(th).data('id')+' </td>';
            });
            table+='</tr>';
			

	})
	$('.timeline_product:last').append(table);
	setTimeout(function(){
		$('.timeline_product:last td.green').each(function(){
			var bookedDate=($(this).data('date')).split('-');
			var bdate=bookedDate[0];
			for(i=0;i<=$(this).data('duration');i++){
				var fullDate=(parseInt(bdate)+i)+'-'+bookedDate[1]+'-'+bookedDate[2];
				var greenTimeId=$(this).parents('.timeline_product').find('tr').attr('id');
				$('tr#'+greenTimeId).find('td.'+fullDate).addClass('green');
				$(this).parents('.timeline_product').find('tr td:not(.green).'+fullDate).addClass('grey');	
			}
				
		});
	},100);
            
	
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