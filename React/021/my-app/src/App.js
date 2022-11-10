function One(props) {
    return (
        <div>
            <p>{props.name}안녕하세요!</p>
            <p>당신의 나이는 {props.age}안녕하세요!</p>
        </div>
    )
}

function Two(name, age){
    return (
        <div>
            <p>{name}안녕하세요!</p>
            <p>당신의 나이는 {age*100}입니다.</p>
        </div>
    )
}

function App() {
    return (
        <>
            <p>hello world 1</p>
            <p>hello world 2</p>
            <One name="호준" age={10}/>
            <Two name="호준" age={10} />
        </>
    );
}

export default App;