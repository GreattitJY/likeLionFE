import styled from "styled-components";

const ContnetsDivOne = styled.div`
    color: red;
`;

const ContnetsDivTwo = styled.div`
    color: green;
`;

const SectionTitle = styled.h2`
    color: blue;
    font-size: 32px;
`;

function App() {
    return (
        <>
            <ContnetsDivOne>hello world</ContnetsDivOne>
            <ContnetsDivTwo>hello world</ContnetsDivTwo>
            <SectionTitle>hello world</SectionTitle>
        </>
    );
}

export default App;
