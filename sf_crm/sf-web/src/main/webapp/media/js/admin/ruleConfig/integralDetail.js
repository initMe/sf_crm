//function queryPointObtainDetails(i) {


   var oTable = $('#integralMultipleTable').dataTable({
        "language": {
            "paginate": {
                "first": "首页",
                "last": "末页",
                "next": "下一页",
                "previous": "上一页"
            },
            "lengthMenu": "每页 _MENU_ 条记录",
            "zeroRecords": "没有数据",
            "info": "共 _TOTAL_ 记录， 当前第 _PAGE_ 页",
            "infoFiltered": ""
        },
        "pagingType": "full_numbers",
        "processing": true,
        "searching": false,
        "serverSide": true,
        "ajax": {
            "url": baseUrl + '/integral/integralDetailList',
            "data": function (d) {

                var name = $("#integralMultipleSearchForm :input[name='name']").val();
                var obtainMethod = $("#integralMultipleSearchForm :input[name='obtainMethod']").val();
                var exchangMethod = $("#integralMultipleSearchForm :input[name='exchangMethod']").val();
                var obtainStartDate = $("#integralMultipleSearchForm :input[name='obtainStartDate']").val();
                var obtainEndDate = $("#integralMultipleSearchForm :input[name='obtainEndDate']").val();
                if (!isNullOrEmpty(name)) {
                    d.name = name;
                }
                if (!isNullOrEmpty(obtainStartDate)) {
                    d.obtainStartDate = obtainStartDate;
                }
                if (!isNullOrEmpty(obtainEndDate)) {
                    d.obtainEndDate = obtainEndDate;
                }
                if (!isNullOrEmpty(exchangMethod)) {
                    d.exchangMethod = exchangMethod;
                }
                if (!isNullOrEmpty(obtainMethod)) {
                    d.obtainMethod = obtainMethod;
                }

            }
        },
        "columnDefs": [
            {
                "render": function (data, type, row) {



                    return data;
                },
                "targets": 0
            },
            {
                "render": function (data, type, row) {


                    if (data ==null){
                        return data;
                    }
                    var args = data.split(',');


                    var showType = '';
                    $.each(args, function (i, value) {

                        if ('hongbao' == value) {
                            showType = showType + ',红包';
                        }
                        if ('goods' == value) {
                            showType = showType + ',礼物';
                        }
                    });
                    var showType = showType.substring(1, showType.length);
                    var o = row.userId;

                    return '<a><span onclick="showPointExchangDetail('+o+')">'+showType+'</span></a>';
                },
                "targets": 5
            },
            {
                "render": function (data, type, row) {
                    if (data ==null){
                        return data;
                    }

                    var args = data.split(',');


                    var showType = '';
                    $.each(args, function (i, value) {

                        if ('shopping' == value) {
                            showType = showType + ',购物';
                        }
                        if ('birthday' == value) {
                            showType = showType + ',生日';
                        }
                        if ('sign_in' == value) {
                            showType = showType + ',签到';
                        }
                        if ('share' == value) {
                            showType = showType + ',分享';
                        }
                        if ('shake' == value) {
                            showType = showType + ',摇一摇';
                        }
                        if ('subscribe' == value){
                            showType = showType + ',关注';
                        }
                    });
                    var showType = showType.substring(1, showType.length);
                    var o = row.userId;

                    return '<a><span onclick="showPointObtainDetail('+o+')">'+showType+'</span></a>';


                },
                "targets": 6
            }, {
                "render": function (data, type, row) {

                    var datetime = new Date();
                    datetime.setTime(data);
                    var year = datetime.getFullYear();
                    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
                    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
                    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
                    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
                    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
                },
                "targets": 8
            }, {
                "render": function (data, type, row) {

                    return '<a href=javascript:goPortriat('+row.userId+')>查看</a>';

                },
                "targets": 9
            },
//                    {"visible": false, "targets": [3]}
        ],
        "sort": false,
        "columns": [
            {"data": "name"},
            {"data": "wxNickName"},
            {"data": "pointAmountTotal"},
            {"data": "pointAmountExchange"},
            {"data": "pointAmount"},
            {"data": "exchangMethod"},
            {"data": "obtainMethod"},
            {"data": "interactionsTimes"},
            {"data": "gmtCreated"},
            {"data": "userPortraitId"},
        ]
    });



$("#integralMultipleSearchForm").submit(function () {
    $('#integralMultipleTable').DataTable().draw()
    return false; //阻止表单默认提交
});





function showPointObtainDetail(i){
    //queryPointObtainDetails(i);
    $("#userId").val(i);
    $('#pointObtainDetaiTable').DataTable().draw()
    $("#pointObtainDetailModal").modal('show');
    return false; //阻止表单默认提交
}


function showPointExchangDetail(i){

    //$('#pointObtainDetaiTable').DataTable().draw()
    $("#userId").val(i);
    //queryPointExchangDetails(i);
    $('#pointExchangDetaiTable').DataTable().draw()
    $("#pointExchangDetaiModal").modal('show');
    return false; //阻止表单默认提交
}







//function queryPointObtainDetails(i) {
    var oTable = $('#pointObtainDetaiTable').dataTable({
        "language": {
            "paginate": {
                "first": "首页",
                "last": "末页",
                "next": "下一页",
                "previous": "上一页"
            },
            "lengthMenu": "每页 _MENU_ 条记录",
            "zeroRecords": "没有数据",
            "info": "共 _TOTAL_ 记录， 当前第 _PAGE_ 页",
            "infoFiltered": ""
        },
        "pagingType": "full_numbers",
        "processing": true,
        "searching": false,
        "serverSide": true,
        "ajax": {
            "url": baseUrl + '/integral/integralObtainDetailList',
            "data": function (d) {
                var userID = $("#userId").val();
                //alert(userID);
                if (!isNullOrEmpty(userID)) {
                    d.userId = userID;
                }
            }
        },
        "columnDefs": [
            {
                "render": function (data, type, row) {

                    var showType = '';
                    if ('ZS' == data) {
                        showType = '赠送';
                    }
                    if ('sign_in' == data) {
                        showType = '签到';
                    }
                    if ('share' == data) {
                        showType = '分享';
                    }
                    if ('shake' == data) {
                        showType = '摇一摇';
                    }
                    if ('birthday' == data) {
                        showType = '生日';
                    }
                    if ('shopping' == data) {
                        showType = '购物';
                    }
                    if ('subscribe' == data){
                        showType = '关注';
                    }


                    return showType;
                },
                "targets": 1
            },{
                "render": function (data, type, row) {
                    var datetime = new Date();
                    datetime.setTime(data);
                    var year = datetime.getFullYear();
                    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
                    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
                    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
                    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
                    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
                },
                "targets": 2
            },
//                    {"visible": false, "targets": [3]}
        ],
        "sort": false,
        "columns": [
            {"data": "wxNickName"},
            {"data": "obtainMethod"},
            {"data": "gmtCreated"},
            {"data": "amount"},
        ]
    });
//}



//function queryPointExchangDetails(i) {
    var oTable = $('#pointExchangDetaiTable').dataTable({
        "language": {
            "paginate": {
                "first": "首页",
                "last": "末页",
                "next": "下一页",
                "previous": "上一页"
            },
            "lengthMenu": "每页 _MENU_ 条记录",
            "zeroRecords": "没有数据",
            "info": "共 _TOTAL_ 记录， 当前第 _PAGE_ 页",
            "infoFiltered": ""
        },
        "pagingType": "full_numbers",
        "processing": true,
        "searching": false,
        "serverSide": true,
        "ajax": {
            "url": baseUrl + '/integral/integralExchangDetailList',
            "data": function (d) {
                var userID = $("#userId").val();
                if (!isNullOrEmpty(userID)) {
                    d.userId = userID;
                }
            }
        },
        "columnDefs": [
            {
                "render": function (data, type, row) {
                    var showType = '';
                    if ('hongbao' == data) {
                        showType = '红包';
                    }
                    if ('goods' == data) {
                        showType = '礼物';
                    }

                    return showType;
                },
                "targets": 1
            },{
                "render": function (data, type, row) {
                    var datetime = new Date();
                    datetime.setTime(data);
                    var year = datetime.getFullYear();
                    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
                    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
                    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
                    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
                    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
                },
                "targets": 2
            },
//                    {"visible": false, "targets": [3]}
        ],
        "sort": false,
        "columns": [
            {"data": "wxNickName"},
            {"data": "exchangMethod"},
            {"data": "gmtCreated"},
            {"data": "amount"},
        ]
    });
//}

//转到用户画像页面
function goPortriat(val){
    $.ajax({
        type : "post",
        url : baseUrl+"knowCustomer/withPortrait",
        data : {userId:val},
        dataType : "json",
        success : function(data){
            if (data.count == 1){
                $('#userportraitModal iframe').attr('src',baseUrl+'knowCustomer/userPortrait?userId='+val);
                $('#userportraitModal').modal('show');
            }else{
                alert("该用户画像不存在");
                return false;
            }
        }
    });
}

