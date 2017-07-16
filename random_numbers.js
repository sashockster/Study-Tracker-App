var randomDate = [

]
const randomDaily = function (){
  const min = Math.ceil(0);
  const max = Math.floor(40);
  return Math.floor(createDate() * (max - min + 1)) + min;
}
