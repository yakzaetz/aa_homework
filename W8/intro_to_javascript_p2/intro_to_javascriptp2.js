let titleize


let printCallback = function(arr){
    arr.forEach(function(el){
        console.log(el)
    })
}

titleize(["Mary", "Brian", "Moses", "Aaron"], printCallback)