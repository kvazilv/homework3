function main() {

    function getText(value, n1 =5, n2=3) {
        if( value %n1 ===0 &&  value %n2 ===0) return 'Fizzbuzz';
        if (value %n1 ===0 ) return 'Buzz';
        if (value %n2 ===0 ) return 'Fizz';
        return value; 
    }

    function getClass(value, n1 =5, n2=3) {
        if( value %n1 ===0 &&  value %n2 ===0) return 'fizzbuzz';
        if (value %n1 ===0 ) return 'buzz';
        if (value %n2 ===0 ) return 'fizz';
        return "undividable"; 
    }

    console.log("Starting Calculator");

    const main = document.getElementById('App');
    // main.innerHTML = '<p>Our elements will be here</p>';
    // const n1 = document.getElementById('n1').value;

    for (let i=1;i <= 100;i++) {
        const myDiv = document.createElement("div");
        // myDiv.innerText = i;
        myDiv.innerText = getText(i);
        myDiv.classList = getClass(i);
        myDiv.id = "d"+i;
        myDiv.className = "btn";
        myDiv.className += " numbers";
        
        main.appendChild(myDiv);
  
    }

    function FizzBuzz () {


    }


}

main();
