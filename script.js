let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const ans = [];
for(let i=0; i<arr.length; i++){
  let str = arr[i];
  if(str.startsWith('the' || 'a' || 'an' || 'An' || 'The' || 'A')){
    ans.push(arr[i]);
  }else{
    ans.unshift(arr[i]);
  }
}
console.log(ans);
