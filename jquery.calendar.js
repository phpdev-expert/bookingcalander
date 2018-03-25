 var tableData="";
var dateTo='05-Mar-2018';
var dateFrom='10-Mar-2018';
var PrevClick=0;
//var URL='http://local.cal.com/ci/index.php/welcome/';
var URL='get_calendar_dates.php';
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
                PrevClick++;

                //alert(PrevClick)
                if(PrevClick>0){
                    $(".append-timeline").addClass('preventclick');
                }
            });

        //nextMonth click
        $('#nextMonth').click(function(){
                currentMonth=$('#hiddenCurrentMonth').val();
                var tableData={
                    currentMonth:currentMonth,type:'next'
                };
                ajaxBuildTable(tableData);
                PrevClick--;

                //alert(PrevClick)
                if(PrevClick<=0){
                    $(".append-timeline").removeClass('preventclick');
                }

            });

    });

//ajax common for table builder
function ajaxBuildTable(data){
    $(".alltimeline").remove();
    $.ajax({
            url:URL,
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

        $('#bookingCalendar').html(table);
        $.each(tableData.products,function(index,value){
                saveTimeline(value)
            });
    }




    // bookingColorGeneraion();
}

function addTimeLine(){
    $("#timeline").val('');
    $(".products_cb").prop("checked",false);
    $("#addTimeline").modal('show')

}

function saveTimeline(product){
    var table="";
    var timeline='Time Line'

    var randomNumberBetween0and19 = Math.floor(Math.random() *1000);

    if(product.timeline_id==0){

        var TIME_LINE="#EMPT_"+randomNumberBetween0and19;

        var timelineData = '<div class="row alltimeline">'+
        '                <div class="col-md-1 pull-left timeline_list">'+
        '   Time Line <br>  <span class="prodname pp_'+product.id+'"> '+product.name+'   <span data-tog="pp_'+product.id+'"  class="glyphicon glyphicon-collapse-up"></span> </span>   <span class="doclsp pp_'+product.id+'"> Qty to sell </span>  <span class="doclsp pp_'+product.id+'"> Booked Product </span>  <span class="doclsp pp_'+product.id+'"> Avialiable Product </span>  <span class="doclsp pp_'+product.id+'"> Price </span>    <span class="doclsp pp_'+product.id+'"> Permostion </span> </br>  '+
        '                </div>'+
        '                <div class="col-md-11 pull-left timeline_sub_list">'+
        '                    <table data-empt="1" id="EMPT_'+randomNumberBetween0and19+'" border="1" class="table table-striped timeline_product t_sortable">'+
        '                    </table>'+
        '                </div>'+
        '            </div>';


        $('.append-timeline').append(timelineData);


        var GLINE='<tr class="prodlines global">';
        $.each(tableData.data,function(index,value){

                GLINE+='<td width="100px" class="fortimeline notavilableglobal"> &nbsp; </td>';
            });
        GLINE+='</tr>';


        $(TIME_LINE).append(GLINE);

    }else{

        var TIME_LINE='#timeline_'+product.timeline_id;

        if($('#timeline_'+product.timeline_id).length){


            var Lpanel='<span class="prodname"> '+product.name+'   <span data-tog="pp_'+product.id+'" class="glyphicon glyphicon-collapse-up"></span> </span>   <span class="doclsp pp_'+product.id+'"> Qty to sell </span> <span class="doclsp pp_'+product.id+'"> Booked Product </span> <span class="doclsp pp_'+product.id+'"> Avialiable Product </span>  <span class="doclsp pp_'+product.id+'"> Price </span>    <span class="doclsp pp_'+product.id+'"> Permostion </span> ';
            $('#timeline_list_'+product.timeline_id).append(Lpanel);

        }else{

            var timelineData = '<div class="row alltimeline">'+
            '                <div id="timeline_list_'+product.timeline_id+'" class="col-md-1 pull-left timeline_list">'+
            '   Time Line <br> <span class="prodname"> '+product.name+'   <span data-tog="pp_'+product.id+'" class="glyphicon glyphicon-collapse-up"></span> </span>   <span class="doclsp pp_'+product.id+'"> Qty to sell </span>  <span class="doclsp pp_'+product.id+'"> Booked Product </span>  <span class="doclsp pp_'+product.id+'"> Avialiable Product </span>  <span class="doclsp pp_'+product.id+'"> Price </span>    <span class="doclsp"> Permostion </span> </br>  '+
            '                </div>'+
            '                <div class="col-md-11 pull-left timeline_sub_list">'+
            '                    <table data-empt="0" id="timeline_'+product.timeline_id+'" border="1" class="table table-striped timeline_product t_sortable">'+
            '                    </table>'+
            '                </div>'+
            '            </div>';

            $('.append-timeline').append(timelineData);





            var GLINE='<tr class="prodlines global">';
            $.each(tableData.data,function(index,value){

                    GLINE+='<td width="100px" class="fortimeline notavilableglobal"> &nbsp; </td>';
                });
            GLINE+='</tr>';

            $(TIME_LINE).append(GLINE);


        }

    }




    var PRODUCT='<tbody class="product'+product.id+'" id="drag_'+product.id+'">';

    /*AVL*/
    PRODUCT+='<tr class="notclsp">'
    var BOOKED=0;
    var PROMO=0;
    $.each(tableData.data,function(index,value){

            var classx='notavilable';
            if(product.date_diabled!=0){

                var dates=product.date_diabled.split(',');
                if(dates.indexOf(value)!=-1){
                    classx='ocupied'
                }

            }

            if(product.avilable!=0){
                var dates=product.avilable.split(',');
                if(dates.indexOf(value)!=-1){
                    classx='avilable'
                }
            }

            if(product.date_promo!=0){
                var dates=product.date_promo.date.split(',');
                var BOOkar=product.date_promo.qty.split(',');
                if(dates.indexOf(value)!=-1){
                    classx='permotion'
                }
                PROMO=BOOkar[dates.indexOf(value)];

            }

            if(product.bookings!=0){
                var dates=product.bookings.date.split(',');
                var BOOkar=product.bookings.qty.split(',');
                if(dates.indexOf(value)!=-1){
                    classx='booked'
                }

                BOOKED=BOOkar[dates.indexOf(value)];
            }

            PRODUCT+='<td width="100px"  data-date="'+value+'" data-product="'+product.id+'" class="avilb '+classx+'"> &nbsp; </td>';
        });
    PRODUCT+='</tr>'

    /*TO SELL*/
    PRODUCT+='<tr  class="doclsp pp_'+product.id+'">'
    $.each(tableData.data,function(index,value){

            var BOOKED=0;
            if(product.bookings!=0){

                var dates=product.bookings.date.split(',');
                var BOOkar=product.bookings.qty.split(',');
                if(dates.indexOf(value)!=-1){
                    BOOKED=BOOkar[dates.indexOf(value)];
                }


            }

            PRODUCT+='<td data-date="'+value+'" data-booked="'+BOOKED+'"  class="sell" data-product="'+product.id+'" width="100px"> <div contentEditable="true" class="sellc" style="width: 100%; height: 100%;"> '+product.qty+' </td> </div>';
        });

    PRODUCT+='</tr>'

    /*TO AVLQTy*/
    PRODUCT+='<tr class="doclsp pp_'+product.id+'">'
    $.each(tableData.data,function(index,value){
            var BOOKED=0;
            if(product.bookings!=0){

                var dates=product.bookings.date.split(',');
                var BOOkar=product.bookings.qty.split(',');
                if(dates.indexOf(value)!=-1){
                    BOOKED=BOOkar[dates.indexOf(value)];
                }


            }

            PRODUCT+='<td data-date="'+value+'" data-product="'+product.id+'" width="100px" class="avlqty"> '+BOOKED+' </td>';
        });

    PRODUCT+='</tr>'


    /* TO REM */
    PRODUCT+='<tr class="doclsp pp_'+product.id+'">'
    $.each(tableData.data,function(index,value){
            var BOOKED=0;
            if(product.bookings!=0){

                var dates=product.bookings.date.split(',');
                var BOOkar=product.bookings.qty.split(',');
                if(dates.indexOf(value)!=-1){
                    BOOKED=BOOkar[dates.indexOf(value)];
                }


            }
            var REM=product.qty-BOOKED;
            PRODUCT+='<td data-date="'+value+'" data-product="'+product.id+'" width="100px" class="rem"> '+REM+' </td>';
        });

    PRODUCT+='</tr>'

    /*PRICE*/
    PRODUCT+='<tr class="doclsp pp_'+product.id+'">'
    $.each(tableData.data,function(index,value){
            PRODUCT+='<td data-date="'+value+'" data-product="'+product.id+'" width="100px" class="price"> <div contentEditable="true" class="pricetr" style="width: 100%; height: 100%;">  '+product.price+'  </div> </td>';
        });

    PRODUCT+='</tr>'



    /*promo*/
    PRODUCT+='<tr class="doclsp pp_'+product.id+'">'
    $.each(tableData.data,function(index,value){
            var PROMO=0;
            if(product.date_promo!=0){
                var dates=product.date_promo.date.split(',');
                var BOOkar=product.date_promo.qty.split(',');
                if(dates.indexOf(value)!=-1){
                    PROMO=BOOkar[dates.indexOf(value)];
                }
            }
            PRODUCT+='<td data-date="'+value+'" data-product="'+product.id+'" width="100px" class="promo"> <input class="promo" type="text" data-date="'+value+'" data-product="'+product.id+'" value="'+PROMO+'">  </td>';
        });

    PRODUCT+='</tr>'


    PRODUCT+='</tbody>'

    $(TIME_LINE).append(PRODUCT);


    appllyDrag();
}
function appllyDrag(){




    $("tbody").draggable({ cursor: "crosshair", revert: "invalid"});

    $("table.t_sortable ").droppable({
            accept: "tbody",
            drop: function(event, ui) {
                //console.log(ui.draggable.id)
                var draggableId = ui.draggable.attr("id");
                var cid=draggableId.split('_')
                var droppableId = $(this).attr("id");
                if(ui.draggable.parent().find('tbody').length==0){
                    ui.draggable.parent().remove();
                    // $(".pp_"+cid[1]).parent().html('');
                }
                
                var dropped = ui.draggable;
                var droppedOn = $(this);
                $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
                
                $("span.pp_"+cid[1]).remove();
            
                alert(droppableId);
                var droppableIdX=droppableId.split('_');
                if(droppableIdX[0]=='EMPT'){
                    var prods="";
                    $("#"+droppableId+" tbody").each(function(){
                            prods=prods+$(this).attr("id")+",";
                        })
                    var tid=0;

                }else{
                    var prods="";
                    $("#"+droppableId+" tbody").each(function(){
                    	
                    	var ccid=$(this).attr("id").split('_');
                            prods=prods+ccid[1]+",";
                        })
                    var tid=droppableIdX[1];

                }


                var tableData={
                    prods:prods,
                    tid:tid
                };


                 
                
                
                $(".alltimeline").remove();
                $.ajax({
                        url:URL+'load_json',
                        data:tableData,
                        type:'post',
                        datatype:'json',
                        success:function(response){
                        	alert(response);
                            $.each(response,function(index,value){
                                    saveTimeline(value)
                                });
                        }
                    });
                },

        });

}


function  bookingNavigation(){

}

function bookingColorGeneraion(){

}


function bookingGenearte(receive,sender){



}

$(document).on("click",".notavilable",function(){

        $(this).removeClass('notavilable')
        $(this).addClass('avilable')
        var product=$(this).data('product');
        var date=$(this).data('date');
        set_avilable(product,date)
    })

$(document).on("click",".avilable",function(){

        $(this).removeClass('avilable')
        $(this).addClass('notavilable')
        var product=$(this).data('product');
        var date=$(this).data('date');
        reset_avilable(product,date);
    })



$(document).on("click",".glyphicon-collapse-down",function(){

        $(this).removeClass('glyphicon-collapse-down')
        $(this).addClass('glyphicon-collapse-up')

        $(".doclsp").hide();
    })

$(document).on("click",".glyphicon-collapse-up",function(){

        $(this).removeClass('glyphicon-collapse-up')
        $(this).addClass('glyphicon-collapse-down')
        var cls=$(this).data('tog');
        $("."+cls).show();
        $("span."+cls).css({
                'display':'block'
            });


    })



$(document).on("click",".fortimeline.avilableglobal",function(){

        if(PrevClick>0)
        {
            return false;
        }

        var pth=this;
        var chnaged=0;

        var columnIndex=$(this).index();
        $(this).parent().parent().find('tbody').each(function(){

                $(this).find('tr').find('td').eq(columnIndex).each(function(){

                        if($(this).hasClass('notavilable') || $(this).hasClass('avilable')){

                            chnaged=1
                            $(this).removeClass('avilable')
                            $(this).addClass('notavilable')
                        }
                    })

            });

        if(chnaged==1){
            $(pth).removeClass('avilableglobal')
            $(pth).addClass('notavilableglobal')
        }

    })


$(document).on("click",".fortimeline.notavilableglobal",function(){

        if(PrevClick>0)
        {
            return false;
        }

        var pth=this;
        var chnaged=0;
        var columnIndex=$(this).index();
        $(this).parent().parent().find('tbody').each(function(){

                $(this).find('tr').find('td').eq(columnIndex).each(function(){

                        if($(this).hasClass('notavilable') || $(this).hasClass('avilable')){
                            chnaged=1
                            $(this).removeClass('notavilable')
                            $(this).addClass('avilable')
                        }
                    })

            });

        if(chnaged==1){
            $(pth).removeClass('notavilableglobal')
            $(pth).addClass('avilableglobal')
        }

    })


$(document).on("keyup","td .promo",function(){

        if(PrevClick>0)
        {
            return false;
        }

        var pth=this;
        var chnaged=0;
        var columnIndex=$(pth).parent().index();
        var thistbody="product"+$(this).data('product');
        var v=$(this).val();
        var product=$(this).data('product');
        var date=$(this).data('date');

        if(v>0){

            $(pth).parent().parent().parent().find('tr').find('td').eq(columnIndex).each(function(){

                    if($(this).hasClass('notavilable') || $(this).hasClass('avilable')){

                        $(this).removeClass('notavilable')
                        $(this).removeClass('avilable')
                        $(this).addClass('permotion')

                        setPromo(v,product,date);
                    }
                })

        }else{

            $(pth).parent().parent().parent().find('tr').find('td').eq(columnIndex).each(function(){

                    if($(this).hasClass('permotion')){
                        $(this).removeClass('permotion')
                        $(this).addClass('notavilable')
                        setPromo(v,product,date);
                    }
                })
            $(pth).val(0)
        }
    })


$(document).on("keyup",".sellc",function(){

        if(PrevClick>0)
        {
            return false;
        }
        var cvl=parseInt($(this).text());

        var minval=parseInt($(this).parent().data('booked'));
        var rem=0;
        if(isNaN(cvl)){
            $(this).text(minval)
            rem=0;
        }else{
            if(cvl<minval || cvl==0){
                $(this).text(minval)
                rem=0;
            }else{
                rem= cvl-minval;
            }
        }
        var cvxl=parseInt($(this).text());
        var pth=$(this).parent();


        var chnaged=0;
        var columnIndex=$(pth).index();

        $(pth).parent().parent().find('tr').each(function(){


                $(this).find('td').eq(columnIndex).each(function(){

                        if($(this).hasClass('rem')){

                            $(this).text(rem)
                        }
                    })

            })


        if(cvxl==0){

            $(pth).parent().parent().find('tr').each(function(){

                    $(this).find('td').eq(columnIndex).each(function(){

                            if($(this).hasClass('permotion')){
                                $(this).removeClass('permotion')
                                $(this).addClass('notavilable')
                            }

                            if($(this).hasClass('promo')){

                                $(this).find('.promo').val(0)
                            }
                        })

                })
        }


    })

function setPromo(v,product,date){

    $.ajax({
            type:'post',
            data:{
                date:date,
                service_id:product,
                qty:v,
            },
            url:URL+'set_promo',
            success:function(data){


            }

        })
}


function set_avilable(product,date){

    $.ajax({
            type:'post',
            data:{
                date:date,
                service_id:product,
            },
            url:URL+'set_avilable',
            success:function(data){


            }

        })
}

function reset_avilable(product,date){

    $.ajax({
            type:'post',
            data:{
                date:date,
                service_id:product,
            },
            url:URL+'reset_avilable',
            success:function(data){


            }

        })
}
