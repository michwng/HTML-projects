/*
 *   admin.js
 *            Author:         Jack
 *            Date:           2021-04-09
 *            Last revised:   2021-11-21
 *            Description:    Dynamic form generation (table)
 */

var result;  //variable for the results of the DB lookup

// Event Listener attached to 'Register' link
$("#adminLink").on('click', function() {
    initModal();

    //OK button
    adminOkBtn.appendChild(okBtnContent);
    adminOkBtn.setAttribute("id", "adminOkBtn");
    adminOkBtn.style.bottom = "10px";
    adminOkBtn.style.left = "50%";
    adminOkBtn.style.transform = "translateX(-50%)";
    modal.appendChild(adminOkBtn);

    //build the form elements:
    //modalInner
    modalInner.setAttribute("id", "modal-inner");
    modalInner.classList.add("modal-inner");
    modalInner.style.maxHeight = "60%";
    modalInner.style.width = "800px";
    modalInner.style.top = "30%";
    modalInner.style.overflowY = "auto";

    //heading
    let heading = document.createElement("h1");
    heading.style.background = "#8d0404";
    heading.style.color = "#eee";
    heading.style.padding = "20px";
    heading.textContent = "Registered Users";

    //append modal-inner to modal
    modal.append(heading);
    modal.appendChild(modalInner);
    modal.classList.remove('hideModal');
    modal.classList.add('showModal');
    modal.style.background = "rgba(255,255,255,1)";
    modal.appendChild(adminOkBtn);
    
    getData();

});

// XHR request
async function getData() {
    await fetch('php/get_users.php').then(function(response) {
        response.text().then(function(text) {
          result = text;
          printTable(JSON.parse(result));
        });
    });    
}

function printTable(r) {
    let jsonArray = Array.from(r);
    
    // create table & header row
    const tab = document.createElement("table");
    let headerRow = document.createElement("tr"),
        uidHead = document.createElement("th"),
        firstNameHead = document.createElement("th"),
        lastNameHead = document.createElement("th"),
        emailHead = document.createElement("th");

    //Content for th cells
    uidHead.textContent = "User ID";
    firstNameHead.textContent = "First Name";
    lastNameHead.textContent = "Last Name";
    emailHead.textContent = "Email";

    //add a little dynamic CSS
    headerRow.setAttribute("id", "headRow");
    headerRow.setAttribute("style", "position:sticky;top:-25px;z-index:1;background:#ddf;");
    uidHead.setAttribute("style", "padding-top:10px;padding-bottom:5px;");
    firstNameHead.setAttribute("style", "padding-top:10px;padding-bottom:5px;");
    lastNameHead.setAttribute("style", "padding-top:10px;padding-bottom:5px;");
    emailHead.setAttribute("style", "padding-top:10px;padding-bottom:5px;");

    //append the th cells to the header row
    headerRow.append(uidHead, firstNameHead, lastNameHead, emailHead);

    //append the header row to the table
    tab.appendChild(headerRow);

    //generate the table data cells from the return data
    //from the PHP AJAXcall
    for (var i = 0; i < jsonArray.length; i++) {
        //get the current row's table data values
        let uid = document.createTextNode(jsonArray[i].uid),
            firstName = document.createTextNode(jsonArray[i].firstname),
            lastName = document.createTextNode(jsonArray[i].lastname),
            email = document.createTextNode(jsonArray[i].email);
        
        //build the current row structure
        let 
            row = document.createElement("tr"),
            uidCell = document.createElement("td"),
            firstNameCell = document.createElement("td"),
            lastNameCell = document.createElement("td"),
            emailCell = document.createElement("td");

        //mate the values with each cell
        uidCell.appendChild(uid);
        firstNameCell.appendChild(firstName);
        lastNameCell.appendChild(lastName);
        emailCell.appendChild(email);

        //append the cells to the row
        row.appendChild(uidCell);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(emailCell);

        // adding the 'tab' id to the new table (for
        // CSS rendering)
        tab.setAttribute("id", "tab");
        tab.appendChild(row);
    }

    //a couple of needed CSS attributes to tweak the table display
    $('#modal-inner').css("overflow-x", "hidden");
    $('#modal-inner').css("box-shadow", "10px 10px 15px rgba(100,100,255,.25)");
    $('#modal-inner').css("color", "rgba(50,50,100,1)");

    //append the table to #modal-inner
    modalInner.appendChild(tab);
}

//event listener for ok button 
adminOkBtn.addEventListener("click", function(e) {
    const el = e.target,
          modal = document.getElementById("modal");

          if(el.id == "adminOkBtn") {

        modal.classList.remove("showModal");
        modal.classList.add("hideModal");
        modal.innerHTML = "";
    } 
});