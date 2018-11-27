let array=[{"category_id":"kesel"},{"category_id":"yo"},{"category_id":"leren"}]
array=array.map(function(item){
  return item.category_id.toString();
});
console.log(array);