let el = document.getElementById('App');

function clearDivs() {while ( el.firstChild ) el.removeChild( el.firstChild );}



function main() {


console.log ("before parsing" + (typeof(document.getElementById('divider1').value)))


let divider1 =  parseInt(document.getElementById('divider1').value);
let divider2 =  parseInt(document.getElementById('divider2').value);
let x1 = parseInt( document.getElementById('x1').value);
let x2 =  parseInt( document.getElementById('x2').value);
console.log( divider1 );
console.log( divider2 );
console.log( x1 );
console.log( x2 );
console.log( "x1 is a " + typeof(x1) + "; x2 is a " +  typeof(x2))
console.log( "div1 is a " + typeof(divider1) + "; div2 is a " +  typeof(divider2))

if (isNaN(divider1) || isNaN(divider2)  || isNaN(x1) || isNaN(x2) )
{
    alert("Fizz/ Buzz / Min / Max should be valid numbers")
}


if (x2< x1){
    alert("Min value should be lower than Max")

} else {clearDivs()}






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
        // console.log(i)
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
