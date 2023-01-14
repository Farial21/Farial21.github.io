"use strict";

//define data
var products = [
    {
        name:'Samsung TV 50"',
        quantity: 1,
        ppu: 15000,
        discount: 100
    },
    {
        name:'Xiaomi Fan',
        quantity: 2,
        ppu: 500,
        discount: 50
    },
    {
        name:'Lenovo ThinkPad L15',
        quantity: 1,
        ppu: 40000,
        discount: 500
    },
    {
        name:'Sony PS5',
        quantity: 1,
        ppu: 28000,
        discount: 200
    }
]

//Pick value from select and add to table
function addToCart() {

    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val(),
    }
    if ($('#qty').val()=="" || $('#ppu').val()=="" || $('#discount').val()==""){
        alert("Form not complete")
        console.log("Form not complete")
    }else if (checkDup()== true) {
        alert("Product has already been added")
        console.log("Product has already been added")
    } else {
        //checkDup()
        $('#productBody').html("")
        products.push(productObj)
        loadData()
        console.log("New Product Added")
    }
}

function deleteProduct(index) {
    //console.log("DELETE",index)
    delete products[index]  
    $('#productBody').html("")
    loadData()
}

function clearAll(){
    console.log("DELETE ALL PRODUCTS")
    for (let p in products){
        deleteProduct(p)
        loadData()
    }    
}

function loadData() {
    let allRows = ""
    let gross = 0
    let ttlDisc = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='delete_icon1.png' onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        ttlDisc += products[p].discount * 1
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"
        let total = (products[p].ppu * products[p].quantity) - products[p].discount
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row
    }
    $("#productBody").html(allRows)

    $("#ttlDisc").html(ttlDisc)
    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))
    

}

function checkDup(){
    let dup = false
    for(let p in products){
        if(products[p].name == $('#products').val() && products[p].ppu == $('#ppu').val()){
            dup = true 
        }
    }
    return dup
    console.log(dup)
}

