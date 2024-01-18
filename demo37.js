let n = parseInt(prompt("Enter Input",0))
let temp = n
let sum = 0
let digit = 0
 
while (n != 0){                     //  or
    digit = parseInt(n%10)          //  digit = Mat.floor(n%10) 
    sum = sum + Math.pow(digit,3)   //  sum += Math.pow(digit,0)
    n = parseInt(n/10)              //  n /= 10 
}
if (temp === sum){
    document.writeln(`${temp} is an Armstrong Number`)
}
else    
    document.writeln(`${temp} is not a Armstrong Number`)

