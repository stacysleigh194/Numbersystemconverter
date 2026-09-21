function convertNumber() {

    const input = document.getElementById("numberInput").value.trim();

    const fromBase = parseInt(
        document.getElementById("fromBase").value
    );

    const toBase = parseInt(
        document.getElementById("toBase").value
    );

    const resultElement = document.getElementById("result");

    if (input === "") {
        resultElement.textContent = "Please enter a number";
        return;
    }

    try {

        const decimalValue = BigInt(
            parseInt(input, fromBase)
        );

        const result = decimalValue
            .toString(toBase)
            .toUpperCase();

        resultElement.textContent = result;

    } catch (error) {

        resultElement.textContent = "Invalid number";

    }
}


function swapBases() {

    const from = document.getElementById("fromBase");
    const to = document.getElementById("toBase");

    const temporary = from.value;

    from.value = to.value;
    to.value = temporary;

    convertNumber();
}