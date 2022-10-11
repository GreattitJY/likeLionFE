/////////////////////
// 연습문제 1

// let data = [10, 20, 30, 10, 20, 30, 40, 10]
// let mean = data.reduce((i, r) => i+r, 0)/data.length

// console.log(mean);
// let 분산 = 0;

// for (i of data) {
//     분산 += (i - mean)**2 / data.length
// }
// console.log(분산);

// let 편차 = 분산 **0.5
// console.log(편차);

/////////////////////////////
// 연습문제 2

// let data = '5, 4, 10, 5'.split(',')
// let mean = 0;
// for (i of data) {
//     mean += i / data.length 
// }
// console.log(mean);


/////////////////////////////
// 연습문제 3 -> join 복습 필요

// let data = [11, 22, 33, 111, 2].join('')

// console.log(data);

// let sum = 0
// for (i of data) {
//     sum += parseInt(i);
// }
// console.log(sum);

/////////////////////////////
// 연습문제 4

// let res ='';
// for (i = 0; i < 10; i++) {
//     res += ','
// }
// console.log(res);

// let data = 'hello world'
// let res = ''
// for (let i = 10; i >= 0; i--) {
//     res += data[i]
// }
// console.log(res);

// function recur(data)
// {
//     if (data.length <= 1){
//         return data
//     }

//     return recur(data.slice(1)) + ''
// }


console.log((Math.random()* 45) + 1);

let arr = [];

while (true) {
    if (arr.length >= 6) {
        break;
    }
    let num = parseInt(Math.random()*45 + 1)
    if (arr.indexOf(num) == -1) {
        arr.push(num)
    }
}
// arr.sort((a,b) => a - b)
[...arr].sort((a,b) => a - b)
// console.log(arr);

