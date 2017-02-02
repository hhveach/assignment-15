var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
// TASK 1 -- Show/Hide Nav
var navButton = document.querySelector('#hide-nav button');
var navMenu = document.querySelector('.nav-menu');
  navButton.addEventListener('click', function(){
    if(navMenu.className === 'nav-menu'){
      navMenu.className = 'nav-menu nav-menu-hidden';
    }
    else{
        navMenu.className = 'nav-menu';
      }
})

// TASK 2 -- Select an Icon
var selectButton = document.querySelectorAll('#select-items .option');

  forEach(selectButton, function(listEl, index, array){
    listEl.addEventListener('click', function(evt){
      if(listEl.className === 'option'){
        listEl.className = 'option selected';
      }
      else {
        listEl.className = 'option';
      }
    })
  })

// TASK 3 -- Move Item From List to List
var increaseNum = document.querySelectorAll('#add-vals button');
var numberTen = document.querySelector('.total-points');
var target = 0;
  forEach(increaseNum, function(listEl, index, array){
    listEl.addEventListener('click', function(evt){
        target += parseInt(evt.target.innerHTML);
        var sum = 10 + target;
        numberTen.innerHTML = sum;
    })
  })

// TASK 4 -- Add Guest to List
var initialList = document.querySelectorAll('#list-2-list li');
var goodList = document.querySelectorAll('.good-standing-section li');
var badList = document.querySelectorAll('.probation-section li');
var goodParent = '';
var badParent = '';

  forEach(goodList, function(listEl, index, array){
    goodParent = listEl.parentNode;
  })

  forEach(badList, function(listEl, index, array){
    badParent = listEl.parentNode;
  })

  forEach(initialList, function(listEl, index, array){
    listEl.addEventListener('click', function(evt){

      if(listEl.parentNode === goodParent){
        goodParent.removeChild(listEl);
        badParent.appendChild(listEl);
      }

      else if(listEl.parentNode === badParent){
        badParent.removeChild(listEl);
        goodParent.appendChild(listEl);
      }
    })
  })


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
