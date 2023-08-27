
question 2 


var array = [1,2,3,4,6,7]

for(var i =0;i<array.length;i++){
    if(array[i]%2==0){
        console.log(array[i])

    }
}


question number 3 

var arr2 = [23 ,11 ,5 , 10 , 50 , 5 , 6, 23 , 3 , 33 , 1 ]

function SmallNum(arr2){
    var small = arr2[0] ;
    for(var j = 0; j < arr2.length - 1; j++){
        small = small < arr2[j+1] ? small : arr2[j+1];
    }
    return small;
}
console.log(SmallNum(arr2)); 



question 1 \

function getlengths(array){
    var lengths=[];
    for(var i =0;i<array.length;i++){
lengths.push(array[i].length)
    }
    return lengths
}
 console.log(getlengths(["faezkhan111"]))


question 5 







