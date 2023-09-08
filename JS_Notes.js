// a = [1, 2, 3, 4, 33, 22, 6, 43, 8, 54];
// a.splice(1, 1);
// console.log(a.indexOf(33));

// b = a.reduce((total, val) => {
//   return total + val;
// }, 4);
// console.log(b);
// function fun(a) {
//   name = "ORIG";
//   console.log(name);
//   return a;
// }
// b = { name: "abhi", class: 90 };
// b.fun.call(56);
// x = fun.bind(b, 90);
// fun = () => {
//   console.log("called");
// };
// setInterval(() => {
//   console.log("called");
// }, 1000);
// document.getElementById("idd").addEventListener("click", () => {
//   console.log("pressed");
// });
// x = fun();
// const prom = new Promise((resolve, reject) => {
//   if (1 == "1") resolve("Done");
//   else reject("kkkk");
// });
// prom
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });
// callback
// one = (a, b) => {
//   //   console.log(a);
//   b();
//   console.log(a);
// };
// b = () => {
//   console.log("bbb");
// };
// one("AAA val", b);

// CURRYING
// mult = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };
// console.log(mult(2)(7)(3));

// mult = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };

\",\',\\(for \)
true for "1"==1
false for "1"===1
reference error =>accessing which is not accessible;

temporal dead jone= time bw initialisation and assigning a value to Let only
var contained in global,this object of global environment,but let, const in script.\

let variable cannot be used again with same name in same block/scope but they can be assigned 
in other which will have other scope also.
let =accessible in block and script{it is env of let,cnt but with global zone} scope only

closure =function bundled with its lexical env;
bcoz of closure property any returned or passed fun remembers its lexical env and can 
access it.

var=accessible in global scope, even if they are assigned in block they will point to
same memory, so block can override its value called shadowing


shallow copy: make new copy in one level,but nested array items will be same referenced
deep copy make a complete new copy for nested as well without referencing old array

spread operator do shalow copy
assignment (=) operrator do not copy but refere the same memory


slice allow -ve args,
substring allow convert -ve,and Nan to 0,
concat deep copy,return array.push chnge original array, return array length

arr.copyWithin(target,strt=0,end=len-1) return and override,substr from strt,end at targets position,length remain unchange.

arr.fill(value,start, end) 
reverse,sort change original array


String Methods:
(NOTE:Strings are immutable,they cannot be changed, only replaced.
      str[0]="T" doesnot works)
      1. substring(start,end):
            Nan,-ve=>0,if(start>end) swaps agrs;
      2. concat(start,end):
            Nan=>0,if args are -ve, start from end(last index=-1);
      3. substr(start,length):
            if start from end(last index=-1);

4. replace(kisko,kisase) ,replaceAll(kisko,kisase):
      /word/i (kisko) =>case insensitive(dont wrap RegExp with ""),
      /word/g => All matching words,    gi=>both
5. toUpper/Lowercase();
6. concat(str1,str2,str3......);
7. trim(),trimStart(),trimEnd(); remove whitespaces only;
8. padStart(number,kya(only one length str or char)):
      start placing kya char from end of original string,but cannot
      replace if some char exist at that place and keep it until
      number completed.
   Similarly for padEnd(num,kya)
9. charAT(index),charCodeAT(index);
10. split(separator) :
      return array by splitting;

