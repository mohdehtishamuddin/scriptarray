var array = [];
function myFunction() {
    var Company = document.getElementById("company").value;
    var Model = document.getElementById("model").value;
    var Memory = document.getElementById("memory").value;
    var Price = document.getElementById("price").value;
    var Quantity = document.getElementById("quantity1").value;
    

    if (Company == "" || Model == "" || Memory == "" || Price == "") {
        alert("Please fill all the feilds");
    }

    var product = {
        "CompanyName" : `${Company}`,
        "smodel" : `${Model}` ,
        "memo": `${Memory}` ,
        "pri": `${Price}`,
        "quanti": `${Quantity}`,
    };
    array.push(product);
    Display();
    var selectoption = "<option>-Select Field-</option>"
    array.forEach((element,input) => {
        selectoption += `<option value="${input}"> ${element.CompanyName} ${element.smodel}</option>` 
    });document.getElementById("product").innerHTML = selectoption;
    document.getElementById("Update").innerHTML = selectoption;
    document.getElementById("_rating").innerHTML = selectoption;
    };
function Display() {
    html =
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
        var Table = `<tr><th></th><th></th><th></th><th></th><th></th><th></th>
                             <th><button id = "delete" onclick="Delete()">Delete</button></th>
                             </tr></table>`
    array.forEach((element ,input) => {
        html +=
        `  <tr>
                <td>${element.CompanyName}</td>
                <td>${element.smodel}</td>
                <td>${element.memo}</td>
                <td>${element.pri}</td>
                <td>${element.quanti}</td>
                <td><input type="checkbox" class="BOX" name="feild" value="${input}"></td> 
            </tr>`
           
    });
    
    document.getElementById("demo").innerHTML = html + Table;
};

function sort() {
    var ascending = document.getElementById('Arrange').value;
    var Select = document.getElementById("Select").value;
    if (Select == "company") {
        if (ascending == "ascending") {
            array.sort((a, b) => {
                if (a.CompanyName < b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName > b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else if (ascending == "descending") {
            array.sort((a, b) => {
              
                if (a.CompanyName > b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName < b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }
        console.log(array);
    }

    else if (Select == "smodel") {
        if (ascending == "ascending") {
            array.sort((a, b) => {
               

                if (a.smodel < b.smodel) {
                    return -1;
                }
                if (a.smodel > b.smodel) {
                    return 1;
                }
                return 0;
            });

        } else if (ascending == "descending") {
            array.sort((a, b) => {
               

                if (a.smodel > b.smodel) {
                    return -1;
                }
                if (a.smodel < b.smodel) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }

    }
    else if (Select == "memory") {
        if (ascending == "ascending") {
            array.sort((a, b) => a.memo - b.memo);
        }
        else if (ascending == "descending") {
            array.sort((a, b) => b.memo - a.memo);
        } else {

        }

    }
    else if (Select == "price") {
        if (ascending == "ascending") {
            array.sort((a, b) => a.pri - b.pri);
        }
        else if (ascending == "descending") {
            array.sort((a, b) => b.pri - a.pri);
        }
        else {

        }
    }
    else {

    } Display();
};




function Delete(){
        let Check = document.querySelectorAll('input[name="feild"]:checked');
        let Selected = [];
        Check.forEach((checkbox) => {
            Selected.push(checkbox.value);
        });
        Selected.forEach(element => {
            array.splice(element,1)
        });
        Display();
}



function search() {
    var SelectedField = document.getElementById("field").value;
    var Field = document.getElementById("fieldtype").value;
   
    html = 
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
    array.forEach(element => {
        // console.log(element.CompanyName);
        if (element.CompanyName == Field) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.smodel +
                "</td><td>" +
                element.memo +
                "</td><td>" +
                element.pri +
                "</td></tr>";
        }
        if (element.smodel == Field) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.smodel +
                "</td><td>" +
                element.memo +
                "</td><td>" +
                element.pri +
                "</td></tr>";
        }
        if (element.memo == Field) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.smodel +
                "</td><td>" +
                element.memo +
                "</td><td>" +
                element.pri +
                "</td></tr>";
        }
        if (element.pri == Field) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.smodel +
                "</td><td>" +
                element.memo +
                "</td><td>" +
                element.pri +
                "</td></tr>";
               
        }
        
    });
    html += "</table>";
    document.getElementById("demo").innerHTML = html;
    
}

var addition = [];
var totalcost = 0;
function addtocart() {
    var input = document.getElementById("product").value;
    var Quan = document.getElementById("quantity").value;
    var data = array[input];
    
    var calculatedData = Number(data.pri)*Quan;
   

    var data1 = {
        "ProductDetail" : `${data.CompanyName} ${data.smodel}`,
        "Quantity" : `${Quan}` ,
        "Price": `${data.pri}`,

       
    };
    totalcost += calculatedData;
    addition.push(data1);
    console.log(addition);
};

var Product_Bill = `<table>
<tr>
    <th>ProductDetail</th>
    <th>Quantity</th>
    <th>Price</th>
</tr>`;
function generatebill() {
    var row = ""
    addition.forEach(element => {
        row += `<tr>
         <td>${element.ProductDetail}</td>
         <td>${element.Quantity}</td>
         <td>${element.Price}</td>
         </tr>`
    });
    document.getElementById("Product_Bill").innerHTML = Product_Bill + row +
        `<tr>
     <td>Total</td>
     <td></td>
     <td>${totalcost}</td>
     </tr></table>`;
};

function update() {
    var Index = document.getElementById("Update").value;
    var NewQuantity = document.getElementById("Quantity").value;
    var data = array[Index];

    data.quanti = NewQuantity;
    

    Display();
}

function SortbyPrice(){
    var minimum_P = document.getElementById("minimum").value;
    var maximum_P = document.getElementById("maximum").value;

    var row =""
    array.forEach((element,input) => {
        if(element.pri >= minimum_P && element.pri <= maximum_P){
        row +=`  <tr>
            <td>${element.CompanyName}</td>
            <td>${element.smodel}</td>
            <td>${element.memo}</td>
            <td>${element.pri}</td>
            <td>${element.quanti}</td>
            <td><input type="checkbox" class="BOX" value="${input}""></td>
        </tr>`
        }
    });
    document.getElementById("demo").innerHTML= html+row;
}

var Rateing = [];
var Ratingtable = `<table>
<tr>
    <th>Company</th>
    <th>Model</th>
    <th>Memory(GB)</th>
    <th>Price(Rs)</th>
    <th>Rating</th>
</tr>`

function Rating(){
    var product = document.getElementById("_rating").value;
    var rate = document.getElementById("Rate_me").value;
    
    var rateing_product = array[product];
    
    var product = {
        "CompanyName" : `${rateing_product.CompanyName}`,
        "smodel" : `${rateing_product.smodel}` ,
        "memo": `${rateing_product.memo}` ,
        "pri": `${rateing_product.pri}`,
        "Rating":`${rate}`,
    };
    Rateing.push(product);

    var row = ""
    Rateing.forEach((element) => {
        row +=`  <tr>
                <td>${element.CompanyName}</td>
                <td>${element.smodel}</td>
                <td>${element.memo}</td>
                <td>${element.pri}</td>
                <td>${element.Rating}</td>
            </tr>`
    });        
    document.getElementById("Rating").innerHTML=Ratingtable+row+"</table>";
   
}