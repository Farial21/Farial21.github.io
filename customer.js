$(document).ready(function () {
    console.log("ready!");
    //load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        for(let d in data){
            let dataStr=`<tr>
                <td> <img class="btnDelete" style = "width: 1em" src='delete_icon.png'> ${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }
        
    });
    //Delete Customer
    $("#data-table").on('click','.btnDelete',function(){
        $(this).closest('tr').remove();
    });

    //Add Customer
    $('#addBtn')
    .on('click', function () {
   
        
        let dataStr=`<tr>
                <td> <img class="btnDelete" style = "width: 1em" src='delete_icon.png'> ${$('#name').val()} </td>
                <td>${$('#email').val()}</td>
                <td>${$('#phone').val()}</td>
            </tr>`

        $("#data-table tr:last").after(dataStr)
        $('#closeBtn').trigger("click")
        
    });
});

