// 싱글턴 패턴 : 오직 하나의 인스턴트만을 생성해야할 때 필요한 패턴
// class Test {
//     constructor () {

//     }
// }

// const test1 = new Test();
// const test2 = new Test();

// console.log(test1 === test2);

class Singleton {
    constructor(data) {
        this.data = data;

        const instance = this.constructor.instance;

        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }
}

const test1 = Singleton(10);
const test2 = Singleton(59);

console.log(test1.data);
console.log(test2.data);
