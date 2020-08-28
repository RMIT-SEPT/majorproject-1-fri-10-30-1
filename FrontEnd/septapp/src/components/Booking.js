import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';

class Booking extends Component {
    render() {
        return (
            <div>
                <div class="container-content">
                    <h2>Booking</h2>

                    <a href="/byService">
                    <button id="serviceButton" className="bookType" onClick="createContent('serviceButton')">
                        Book by Service
                    </button>
                    </a>

                    <a href="/byPerson">
                    <button id="personButton" className="bookType" onClick="createContent('personButton')">
                        Book by Person
                    </button>
                    </a>
                </div>
            </div>)

        let serviceBtn = "serviceButton";
        let personBtn = "personButton";

        function createContent(buttonId) {
            // make content visible
            document.getElementById("content").style.display= "inline-block";

            // if book by Service
            if (buttonId == serviceBtn) {
                // set "Book by Service" button as selected
                document.getElementById(buttonId).className = "selectedButton";
                // reset "Book by Person" button to non-selected
                document.getElementById(personBtn).className = "bookType";

                // document.getElementById("searchType").innerHTML = "Service";
                populateDropdown(buttonId);
            }

            // if book by Person
            else if (buttonId == personBtn){
                // set "Book by Person" button as selected
                document.getElementById(buttonId).className = "selectedButton";
                // reset "Book by Service" button to non-selected
                document.getElementById(serviceBtn).className = "bookType";

                // document.getElementById("searchType").innerHTML = "Person";
                populateDropdown(buttonId)
            }
        }

        //get SQL service data
        function populateDropdown(buttonId){

            //placeholders until we get SQL data
            let tempServices = ["service1", "service2", "service3"];
            let tempPeople = ["person1", "person2", "person3", "person4"];

            // get dropdown element
            let dropdown = document.getElementById("dropdown");

            // clear any options already in dropdown box
            let length = dropdown.options.length;

            for (let i = length-1; i >= 0; i--) {
                dropdown.remove(i);
            }

            let listItems = [];
            if(buttonId === serviceBtn){
                listItems = tempServices;
            }
            else if(buttonId === personBtn){
                listItems = tempPeople;
            }

            //create an option for every value in the array
            for (let i = 0; i < listItems.length; i++){
                let option = document.createElement("option");
                option.value = listItems[i];
                option.appendChild(document.createTextNode(listItems[i]));
                dropdown.appendChild(option);
            }
        }
    }
}
export default Booking;
