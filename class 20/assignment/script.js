// get the DOM elements
const form = document.getElementById("entry-form")
const descInput = document.getElementById("description")
const amountInput = document.getElementById("amount")
const typeInput = document.getElementById("type")
const submitBtn = document.getElementById("submit-btn")
const resetBtn = document.getElementById("reset")
const entriesList = document.getElementById("entries-list")
const totalIncome = document.getElementById("total-income")
const totalExpense = document.getElementById("total-expense")
const netBalance = document.getElementById("net-balance")


// load from the local storage or empty array

let entries = JSON.parse(localStorage.getItem("entries")) || [];
let editIndex = null;

// save to local storage
function updateLocalStorage(){
    localStorage.setItem("entries", JSON.stringify(entries))
}


// handle form submit

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = descInput.value;
    const amount = amountInput.value;
    const type = typeInput.value;

    if(!description || isNaN(amount)){
        alert("Please fill the proper data")
    }

    const entry = {description, amount, type};

    if(editIndex !== null){
        entries[editIndex] = entry;
        editIndex = null;
        submitBtn.textContent = "Add Entry"
    } else {
        entries.push(entry)
    }
displayEntries();


})


//diplay entries
function displayEntries(filter = "all"){

    entriesList.innerHTML = '';
    let income = 0; 
    let expense = 0;

    entries.forEach((entry, index) => {
        if(filter === "all" || entry.type === filter){
            const li = document.createElement("li");

            li.innerHTML = `
            <span>${entry.description} - Rs${entry.amount} (${entry.type})</span>
            <div class = "actions">
               <button class = "editEntry" onclick = "editEntry(${index})">Edit</button>
                <button class = "deleteEntry" onclick = "deleteEntry(${index})">Delete</button>
            </div>
            `;

            entriesList.appendChild(li);
        }
    });


}

displayEntries();