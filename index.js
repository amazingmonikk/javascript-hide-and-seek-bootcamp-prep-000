function getFirstSelector(selector) {
  var element = document.querySelector(selector);

return element;
}

function nestedTarget() {
  const target = document.querySelector('#nested .target');
  return target;

}


function increaseRankBy(n) {
  
  var result = document.querySelectorAll('.ranked-list')
  console.log(result)
  for (var i = 0; i < result.length; i++) {
   parseInt(result) + n
 
   
}
}




function deepestChild() {
  var list = document.querySelectorAll('#grand-node div')
 
 let current = array
  let next = []
  
   while (current) {
    if (criteriaFn(current)) {
      return current
    }
    
     if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    
    current = next.shift()
  }
 
  // if we haven't
  return null
}
 
 
  while (list.children) {
  overwrite current node with the first child;
}
  return the current after the loop
 
 
 
}