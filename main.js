const calculateButton = document.getElementById("calculate-change");

calculateButton.addEventListener("click", () => {

    const amountDue = document.getElementById("amount-due").value;
    const amountReceived = document.getElementById("amount-received").value;

    const changeDue = amountReceived - amountDue;

    const convertedChange = convertChange(changeDue);

    displayChange(convertedChange);

    function convertChange(change) {

        let convertedChange = {
            dollars:  0,
            quarters: 0,
            dimes:    0,
            nickels:  0,
            pennies:  0
        }
        // Add dollars
        convertedChange.dollars = Math.trunc(change);
        
        // Add change
        let cents = (change % 1).toPrecision(2);
        generateCoinChange(cents);

        function generateCoinChange(cents) {
            cents = parseFloat(cents * 100);

            convertedChange.quarters = Math.floor(cents / 25);
            cents = cents % 25;

            convertedChange.dimes = Math.floor(cents / 10);
            cents = cents % 10;

            convertedChange.nickels = Math.floor(cents / 5);
            cents = cents % 5;

            convertedChange.pennies = cents;
        }

        return convertedChange;

    }

    function displayChange(change) {

        const { dollars, quarters, dimes, nickels, pennies } = change;
        const dollarsDiv = document.getElementById("dollars-output");
        const quartersDiv = document.getElementById("quarters-output");
        const dimesDiv = document.getElementById("dimes-output");
        const nickelsDiv = document.getElementById("nickels-output");
        const penniesDiv = document.getElementById("pennies-output");

        dollarsDiv.innerHTML = dollars;
        quartersDiv.innerHTML = quarters;
        dimesDiv.innerHTML = dimes;
        nickelsDiv.innerHTML = nickels;
        penniesDiv.innerHTML = pennies;

    }
})