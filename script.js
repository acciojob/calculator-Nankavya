//your code here
let input=document.getElementById('input')
let expression='';
function solve(e)
{
// console.log(e)
if(e=='ans')
{
let result=eval(expression)
input.value=result
}
else if(e==='clr')
{
    expression=''
    input.value=''
}
else
{
    expression+=e
    console.log(expression);
    input.value=expression;
}
}