// soal 3

let array1 = [2,5,8,9]
let array2 = [1,2,3,4,5,6,7]

let array3 = array2.filter((val) => {
    return array1.indexOf(val) === -1
})

console.log('#Soal 3', array3)
