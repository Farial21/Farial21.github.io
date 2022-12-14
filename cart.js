"use strict";

//define data
var products = [
    {
        name:'Samsung TV 50"',
        quantity: 1,
        ppu: 15000
    },
    {
        name:'Xiaomi Fan',
        quantity: 2,
        ppu: 500
    },
    {
        name:'Lenovo ThinkPad L15',
        quantity: 1,
        ppu: 40000
    },
    {
        name:'Sony PS5',
        quantity: 1,
        ppu: 28000
    }
]

//Pick value from select and add to table
function addToCart() {

    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val()
    }
    

    // Clear existing items in the table
    // let productList = document.getElementById("productList")
    // for (let x = 0; x < products.length; x++) {
    //     productList.deleteRow(1)
    // }
    $('#productBody').html("")

    products.push(productObj)
    loadData()
}

function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  
    $('#productBody').html("")
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='delete_icon.png' onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        let total = products[p].ppu * products[p].quantity
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}</tr>`
        allRows += row
    }
    $("#productBody").html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))

}

