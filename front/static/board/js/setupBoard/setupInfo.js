'use strict';

import {editRow, saveRow, deleteRow} from "../table/optArr.js";
import {editRowS, saveRowS, deleteRowS} from "../table/optSpd.js";

function setBalance() {

    let balance = + window.localStorage.getItem('balance');

    if (balance == null) {
        balance = 0;
    }

    document.getElementById('balance').innerHTML = balance;
}

function setCategories() {

    let arrCategory = JSON.parse(window.localStorage.getItem('category'));
    if (arrCategory != null) {
        let select = document.getElementById('category');

        for (let i = 0, length = arrCategory.length; i < length; i++) {
            select.options[i] = new Option(arrCategory[i]);
        }
    }
}

function setTableArrivals() {

    let arrList = JSON.parse(window.localStorage.getItem('arrivalsList'));

    if (arrList !== 'null') {
        let table = document.getElementById('arrivalsTable');

        for (let i = 0, length = arrList.length; i < length; i++) {
            const descr = arrList[i]['description'];
            const money = arrList[i]['money'];

            let tableLength = i;
            table.insertRow(tableLength).outerHTML =
                "<tr id='row" + tableLength + "'>" +
                    "<td id='descrRow" + tableLength + "'>" + descr + "</td>" +
                    "<td id='moneyRow" + tableLength + "'>" + money + "</td>" +
                    "<td>" +
                        "<input type='button' id='editButton"+tableLength+"' value='Edit' class='edit'>" +
                        "<input type='button' id='saveButton" + tableLength + "' value='Save' class='save'> " +
                        "<input type='button' id='deleteButton" + tableLength + "' value='Delete' class='delete'> " +
                    "</td>" +
                "</tr>";

            document.getElementById('editButton'+tableLength).onclick = editRow.bind(this, tableLength);
            document.getElementById('saveButton'+tableLength).onclick = saveRow.bind(this, tableLength);
            document.getElementById('deleteButton'+tableLength).onclick = deleteRow.bind(this, tableLength);

        }
    }
}

function setTableSpendings() {
    let spdList = JSON.parse(window.localStorage.getItem('spendingsList'));

    if (spdList !== 'null') {
        let table = document.getElementById('spendingsTable');

        for (let i = 0, length = spdList.length; i < length; i++) {
            const descr = spdList[i]['description'];
            const money = spdList[i]['money'];
            const selected = spdList[i]['category'];

            let tableLength = i;
            table.insertRow(tableLength).outerHTML =
                "<tr id='rowS" + tableLength + "'>" +
                    "<td id='descrRowS" + tableLength + "'>" + descr + "</td>" +
                    "<td id='moneyRowS" + tableLength + "'>" + money + "</td>" +
                    "<td id='categoryRowS" + tableLength + "'>" + selected + "</td>" +
                    "<td>" +
                        "<input type='button' id='editButtonS"+tableLength+"' value='Edit' class='edit'>" +
                        "<input type='button' id='saveButtonS" + tableLength + "' value='Save' class='save'> " +
                        "<input type='button' id='deleteButtonS" + tableLength + "' value='Delete' class='delete'> " +
                    "</td>" +
                "</tr>";

            document.getElementById('editButtonS'+tableLength).onclick = editRowS.bind(this, tableLength);
            document.getElementById('saveButtonS'+tableLength).onclick = saveRowS.bind(this, tableLength);
            document.getElementById('deleteButtonS'+tableLength).onclick = deleteRowS.bind(this, tableLength);

        }
    }
}

export { setBalance, setCategories, setTableArrivals, setTableSpendings };




