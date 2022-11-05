class Vendingmachine {
    constructor() {
        const vMachine = document.querySelector(".vending-machine");
        this.balance = vMachine.querySelector(".txt-balance");
        this.itemList = vMachine.querySelector(".list-item");
        this.inputCostEl = vMachine.querySelector(".inp-put");
        this.btnPut = vMachine.querySelector(".btn-put");
        this.btnReturn = vMachine.querySelector(".btn-return");
        this.btnGet = vMachine.querySelector(".btn-get");
        this.stagedList = vMachine.querySelector(".list-item-staged");

        const myinfo = document.querySelector(".my-info");
        this.myMoney = myinfo.querySelector(".txt-mymoney");
        this.gotList = myinfo.querySelector(".list-item-staged");
        this.txtTotal = myinfo.querySelector(".txt-total");
    }
    setup() {
        this.bindEvents();
    }

    bindEvents() {
        /*
         * 1. 입금 버튼 기능
         * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.
         * 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
         * 입금액 인풋창은 초기화됩니다.
         * */

        this.btnPut.addEventListener("click", (event) => {
            const inputCost = parseInt(this.inputCostEl.value);
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
            const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

            if (inputCost) {
                // 입금액이 소지금보다 적다면
                if (inputCost <= myMoneyVal && inputCost > 0) {
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + " 원";
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + " 원";
                } else {
                    alert("소지금이 부족합니다.");
                }
                this.inputCostEl.value = null;
            }
        });

        this.btnReturn.addEventListener("click", (event) => {
            const mybalanceVal = parseInt(this.balacne.textContent.replaceAll(",", ""));
            const myMoneyval = parseInt(this.myMoney.textContent.replaceAll(",", ""));

            if (balanceVal) {
                this.myMoney;
            }
        });

        /*
         * 3. 자판기 메뉴 기능
         * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
         * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
         * 아이템이 획득가능 창에 등록됩니다.
         * 아이템 버튼의 data-count 값이 -1 됩니다.
         * 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.
         */

        const btnsCola = this.itemList.querySelectorAll("button");

        btnsCola.forEach((item) => {
            item.addEventListener("click");
        });
    }
}

export default Vendingmachine;
