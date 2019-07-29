let el = document.getElementById('App');

function clearDivs() {while ( el.firstChild ) el.removeChild( el.firstChild );}



function main() {

let divider1 =  parseInt(document.getElementById('divider1').value);
let divider2 =  parseInt(document.getElementById('divider2').value);
let x1 = parseInt( document.getElementById('x1').value);
let x2 =  parseInt( document.getElementById('x2').value);
console.log( divider1 );
console.log( divider2 );
console.log( x1 );
console.log( x2 );
console.log( "x1 is a " + typeof(x1) + "; x2 is a " +  typeof(x2))


if (x2< x1){
    alert("Min value should be lower than Max")

} else {clearDivs()}

if (typeof(x1) === "NaN" || typeof(x2)=== "NaN" || typeof(divider1)=== "NaN" ||typeof(divider2)=== "NaN" )
{
    alert("Enter a number please")

} 




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
        
       el.appendChild(myDiv);
  
    }




}

main();
