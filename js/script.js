const wrapperElement = document.querySelector("div.wrapper");
console.log(wrapperElement);



for(let i = 1; i < 101; i++){

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

    const rowElement = document.createElement("div");
    rowElement.className += " row";
    
    if (i % 3 == 0 && i % 5 == 0) {
        rowElement.innerHTML = ("FizzBuzz");
    } else if (i % 3 == 0) {
        rowElement.innerHTML = ("Fizz");
    } else if (i % 5 == 0) {
        rowElement.innerHTML = ("Buzz");
    } else {
        rowElement.innerHTML = (i);
    }

    wrapperElement.appendChild(rowElement);
}