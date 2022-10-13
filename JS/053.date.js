Date()

let d = new Date()
d.getDate() //1부터 시작합니다.
13
d.getMonth() // 0월부터 시작합니다. +1 해야 합니다.
9
d.getDay() // 0부터 시작합니다. 0은 일요일입니다.
4

switch (d.getDay()) {
    case 0 :
        console.log('월요일');
        break
    case 1 :
        console.log('화요일');
        break
    case 2 :
        console.log('수요일');
        break
    case 3 :
        console.log('목요일');
        break
    case 4 :
        console.log('금요일');
        break
    case 5 :
        console.log('토요일');
        break
    dafault:
        console.log('날짜와 양식이 잘못되었습니다.');
        break
}

d.getHours()
d.getMinutes()
d.getSeconde()

d.getFullYeear()

// 2023년 1월! 우리의 수료시점!
new Date(2023, 0)

// 2023년 1월 21일!
new Date(2023, 0 ,21)

// 2023년 1월 20일 10시!
new Date(2023, 0 ,21 , 10)

new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '');