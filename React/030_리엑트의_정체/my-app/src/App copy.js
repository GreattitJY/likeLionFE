function One(props) {
    console.log("// one 시작");
    console.log(props);
    console.log("// one 끝");
    return <div>{props.children}</div>;
}

function Two(props) {
    console.log("// two 시작");
    console.log(props);
    console.log("// two 끝");
    return <div>{props.childern}</div>;
}

function Three(props) {
    console.log("// three 시작");
    console.log(props);
    console.log("// three 끝");
    return <div>hello</div>;
}
function Four(props) {
    console.log("// four 시작");
    console.log(props);
    console.log("// four 끝");
    return <div>hello</div>;
}

function Five() {
    return (
        <div>
            <p>hello</p>
            <Six />
        </div>
    );
}

function Six() {
    return <div>hello</div>;
}

function App() {
    return (
        <div className="App">
            <h1>app - h1</h1>
            <p>app - p</p>
            <One>
                <h2>app &gt; app - h1</h2>
                <p>app &gt; app - p</p>
                <Two>
                    <p>app &gt; One &gt; Two - p</p>
                </Two>
                <Three />
                <Four></Four>
                <Five />
            </One>
        </div>
    );
}
export default App;
