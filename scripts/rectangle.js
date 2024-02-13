// function calculationFunction(){

//     let result = mainCalc()
//     let p=document.createElement('p');
//     p.innerText=result;
//     document.getElementById('result').appendChild(p)

// }

// function mainCalc(){
//     let width=document.getElementById('rectangle-width');
//     let length=document.getElementById('rectangle-length')
//     let widthValue=width.value;
//     let lengthValue=length.value;
//     let total=widthValue*lengthValue;

//     width.value='';
//     length.value='';
//     return total;


// }




function calculationFunction() {
    let inputValue1 = getValueById('rectangle-width')
    let inputValue2 = getValueById('rectangle-length')
    let area = inputValue1 * inputValue2
    let p = document.createElement('p');
    p.innerText = area
    document.getElementById('result').appendChild(p)


}

function getValueById(num) {
    let number = document.getElementById(num);
    let value = parseFloat(number.value)
    return value;
}