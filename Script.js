const hackerSpeak = stringf =>{
    var str = stringf.split('')
    // console.log(str)
     var newStr = [];
   
for(i=0; i< str.length; i++){

switch(str[i]){
case 'a':
newStr.push(4);
break;
case 'e':
newStr.push(3);
break;
case 'i':
newStr.push(1);
break;
case 'o':
newStr.push(0);
break;
case 's':
newStr.push(5);
break;
default:
newStr.push(str[i]);
}
}
return newStr.join('')
  }

hackerSpeak('javascript is cool')   