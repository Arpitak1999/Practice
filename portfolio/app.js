console.log("Hello!");
let a=10;
let b=20;
console.log("sum of a+b =",a+b);
//templet iterals
let sum =`sum of a & b ${a+b} .`;
console.log(sum);
let trafficLight ="green" ;
if(trafficLight ==="red"){
    console.log("Signal is ${trafficLight}  please stop");
}else if( trafficLight ==="yellow"){
    console.log(`Signal is ${trafficLight} please wait`);
}else{
    console.log(`Signal is ${trafficLight}  please go`);
}

///
let Price='200';
let size="L";
if(size=="XL"){
    console.log(`if size is ${size} Price is 250`);
}else if(size == "L"){
    console.log(`if size is ${size} Price is 200`);
}else if(size == "M"){
    console.log(`if size is ${size} Price is 100`);
}else {
    console.log(`is size is ${size} Price is 50`);
}


//trim
let ab="   Hello!    ";
let c= ab.trim();
console.log(c);


//question
let d= "hello! ";
console.log(d.trim().toUpperCase());
let name ="arpitakashyap";
console.log(name.slice(4,9));
console.log(name.indexOf("ka"));
console.log(name.replace("arpi","kash"));

console.log(name.slice(6).replace("h","a"));
