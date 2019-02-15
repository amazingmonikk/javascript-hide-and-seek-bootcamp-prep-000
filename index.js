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
  //var list = document.querySelectorAll('#grand-node div')
 
 let current = document.querySelector("#grand-node")
  let child = current.children[0]
  
   while (child) {
      current = child
      child = current.children[0]
   }
      
    
    
     if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    
    current = next.shift()
  }
 
 
  return null
}
 
 