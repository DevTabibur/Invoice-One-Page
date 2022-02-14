// submit button
document.getElementById("detail-submit-btn").addEventListener("click", function (){
    // got textarea value
    const buyerDetailsInput = document.getElementById("buyer-details-input");
    const buyerDetailsInputValue = buyerDetailsInput.value ;
    // console.log(buyerDetailsInputValue);

    // add the textarea value on invoice to section
    const buyerInfo = document.getElementById("buyer-info");
    buyerInfo.innerText = buyerDetailsInputValue;

    // clear the input field 
    buyerDetailsInput.value = '';
})

// Add button
document.getElementById("add-details-btn").addEventListener("click", function (){
    // item name input
    const itemNameInput = document.getElementById("item-name-input");
    const itemNameInputValue = itemNameInput.value ;
    // clear item name input value
    itemNameInput.value = '';
    // console.log("itemName", itemNameInputValue);

    
    // item price input
    const itemPriceInput = document.getElementById("item-price-input");
    const itemPriceInputValue = itemPriceInput.value ;
    // clear the item price input value
    itemPriceInput.value = '';
    // console.log("itemPrice", itemPriceInputValue);

    
    // item Quantity input
    const itemQuantityInput = document.getElementById("item-quantity-input");
    const itemQuantityInputValue = itemQuantityInput.value ;
    // clear the item quantity input value
    itemQuantityInput.value  = '';
    // console.log("itemQuantity", itemQuantityInputValue);

    // creating table row and table data and show here all above the code
    const infoTable = document.getElementById('info-table');
    // <tr>
    // <th >1</th>
    // <td>Mark</td>
    // <td>Otto</td>
    // <td>@mdo</td>
    // </tr>    
    const tr = document.createElement('tr');         
    const th = document.createElement('th');         
    const td1 = document.createElement('td');         
    const td2 = document.createElement('td');         
    const td3 = document.createElement('td');

    // total price calculation
    const totalPrice = parseInt(itemQuantityInputValue) * parseInt(itemPriceInputValue);
    
    // show the product details info on the table
    th.innerText = itemNameInputValue;
    td1.innerText = itemPriceInputValue;
    td2.innerText = itemQuantityInputValue;
    td3.innerText = totalPrice;

    // set a a class name in Total with dynamic way
    td3.classList.add('item-total');

    // we create a table using createElement but we don't send the data on the table.. table row er moddhe td data send kore dilam
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    infoTable.appendChild(tr);

    totalCalculation(); // calling the main function
})

// main function for totally calculation
function totalCalculation(){
    const subTotal = calculateSubTotal();
    const subTotalDisplay = document.getElementById("sub-total");
    subTotalDisplay.innerText = subTotal;

    const calculateTax = subTotal * 0.2;

    document.getElementById("tax").innerText = calculateTax;

    document.getElementById("grand-total").innerText = subTotal + calculateTax;
    document.getElementById("grand-total-2").innerText = subTotal + calculateTax;
}


// ei function ta clear na temon
function calculateSubTotal (){
    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total');
    // console.log('all prices ', cost);
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i];
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}

