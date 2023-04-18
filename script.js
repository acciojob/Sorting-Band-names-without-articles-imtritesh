let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const ans = [];
for(let i=0; i<arr.length; i++){
  let str = arr[i];
  if(str.startsWith('An' || 'The' || 'A')){
    ans.push(`<li>${str}</li>`);
  }else{
    ans.unshift(`<li>${str}</li>`);
  }
}
// let nice =""; ans.forEach(element => nice += element);
document.getElementById("band").innerHTML = ans;
console.log(ans);
