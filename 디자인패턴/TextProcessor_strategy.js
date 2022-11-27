// 입력한 텍스트를 HTML문법으로 표현합니다.
// 입력한 텍스트를 마크다운 문법으로 표현합니다.

// 포멧 선택
const outputFormat = {
    markdown: 0,
    html: 1,
};

// 추상 클래스 --> 클래스인데 추상적이다.
// 하이레벨 : 모든 로우레벨이 동일하게 싱속받는 동작을 정의합니다. --> 다른 언어에서는(aka. JAVA)인터페이스라고 표현하기도 합니다.
//  이렇게 클래스들의 공통적인 내용을 뽑아 상위클래스를 만들어 내는것을 '추상화' 한다고 표현합니다.

class ListStrategy {
    start(data) {}
    end(data) {}
    addListItem(data, item) {}
}

// 기능을 클래스로 분리하고 있습니다. 이러한 작업을 캡슐화라고합니다.
class HtmlListStrategy extends ListStrategy {
    start(data) {
        data.push("<ul>");
    }
    end(data) {
        data.push("</ul>");
    }
    addListItem(data, item) {
        data.push(`<li>${item}</li>`);
    }
}

class MarkdownListStrategy extends ListStrategy {
    // 상속받아서 새롭게 기능을 정의하고 있습니다. 오버라이딩이라고 표현합니다.
    // 이렇게 인테페이스를 상속받는 여러객체들이 오버라이딩과 같은 방법으로 다양한 형태로 구현되는 특징을 다형성이라고 합니다.
    addListItem(data, item) {
        data.push(` * ${item}`);
    }
}

class TextProcessor {
    constructor(outputFormat) {
        this.data = [];
        this.setOutputFormat(outputFormat);
    }

    setOutputFormat(format) {
        switch (format) {
            case outputFormat.markdown:
                this.listStrategy = new MarkdownListStrategy();
                break;

            case outputFormat.html:
                this.listStrategy = new HtmlListStrategy();
                break;
        }
    }

    // 입력한 값을 데이터에 저장합니다.
    appendList(items) {
        this.listStrategy.start(this.data);

        for (let item of items) {
            this.listStrategy.addListItem(this.data, item);
        }

        this.listStrategy.end(this.data);
    }

    // 데이터 초기화
    clear() {
        this.data = [];
    }

    // 저장된 데이터를 콘솔로 출력합니다.
    showData() {
        console.log(this.data.join("\n"));
    }
}

const myTp = new TextProcessor(outputFormat.markdown);

myTp.appendList(["hello", "JS", "World"]);
myTp.showData();

myTp.clear();
myTp.setOutputFormat(outputFormat.html);
myTp.appendList(["hello", "HTML", "World"]);
myTp.showData();
