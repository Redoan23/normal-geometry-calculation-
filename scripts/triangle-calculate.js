function calculateTriangleArea(){
  let base=document.getElementById('triangle-base')
  let height=document.getElementById('triangle-height')
  let baseValue=parseFloat(base.value);
  let heightValue=parseFloat(height.value);
  let total=0.5*baseValue*heightValue;
//   console.log(total);

  let p=document.createElement('p');
  p.innerText=total

  document.getElementById('result').appendChild(p);
}

