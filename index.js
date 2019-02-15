function getFirstSelector(selector) {
  var element = document.querySelector(selector);

return element;
}

function nestedTarget() {
  const target = document.querySelector('#nested .target');
  return target;

}


function increaseRankBy(n) {
  
  var result = document.querySelectorAll('.ranked-list li')
  console.log(result)
  for (var i = 0; i < result.length; i++) {
   parseInt(result[i]) + n
 
   
}
}




function deepestChild() {
  
 
 let current = document.querySelector("#grand-node")
  let child = current.children[0]
  
   while (child) {
      current = child
      child = current.children[0]
   }
      
    return current;
    
} 
 
 

 
 