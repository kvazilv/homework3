function main() {

let divider1 = document.getElementById('divider1').value;
let divider2 = document.getElementById('divider2').value;
let x1 = parseInt( document.getElementById('x1').value);
let x2 =  parseInt( document.getElementById('x2').value);
console.log( divider1 );
console.log( divider2 );
console.log( x1 );
console.log( x2 );
console.log( "x1 is a " + typeof(x1) + "; x2 is a " +  typeof(x2))




var el = document.getElementById('App');

while ( el.firstChild ) el.removeChild( el.firstChild );



    function getText(value, a, b) {
        if( value %a ===0 &&  value %b ===0) return 'Fizzbuzz';
        if (value %a ===0 ) return 'Buzz';
        if (value %b ===0 ) return 'Fizz';
        return value; 
    }

    function getClass(value, a, b) {
        if( value %a ===0 &&  value %b ===0) return 'fizzbuzz';
        if (value %a ===0 ) return 'buzz';
        if (value %b ===0 ) return 'fizz';
        return "undividable"; 
    }


    const main = document.getElementById('App');
    // main.innerHTML = '<p>Our elements will be here</p>';
    // const a = document.getElementById('divider1').value;

    for (i=x1;i<= x2;i++) {
        console.log(i)
        const myDiv = document.createElement("div");
        // myDiv.innerText = i;
        myDiv.innerText = getText(i, divider1, divider2);
        // myDiv.classList = getClass(i);
        myDiv.id = "d "+i;
        myDiv.className = getClass(i, divider1, divider2);
        myDiv.className += " square";
        // myDiv.className += " numbers";
        
        main.appendChild(myDiv);
  
    }




}

main();
