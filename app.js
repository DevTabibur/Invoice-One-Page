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

    // we create a table using createElement but we don't send the data on the table.. table row er moddhe td data send kore dilam
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    infoTable.appendChild(tr);
})