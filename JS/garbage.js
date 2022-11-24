let me = { age: 30 };
let you = me; // 참조카운트 : 2

me = null; // 참조카운트 : 1
you = null; // 참조카운트 : 0

let x = {
    y: {
        z: 1,
    },
};

// x가 참조하는 객체르르 object1, y가 참조하고 있는 객체를 object2라고 하겠습니다.

let a = x; // oject1의 참조카운트는 2

const aespa = ["카리나", "윈터", "지젤", "냠냠"];

const cpyAespa = aespa.map((i) => i + "하트");
