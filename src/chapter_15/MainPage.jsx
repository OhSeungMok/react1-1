import styled from "styled-components"

const Wrapper = styled.div`
    padding: 1em;
    background: gray;
`

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`
const Button = styled.button`
    color:${props => props.dark? 'white' : 'dark'};
    background:${props => props.dark? 'black' : 'white'};
    border: 1px solid black;
`
const RoundButton = styled(Button)`
    border-radius: 16px;
`

const blockItem = [
    {
        label: '1',
        padding: '1rem',
        backgroundColor: 'red', 
    },

    {
        label: '2',
        padding: '2rem',
        backgroundColor: 'green', 
    },

    {
        label: '3',
        padding: '3rem',
        backgroundColor: 'blue', 
    }
]

export default function MainPage() {
    return(
        <Wrapper>
            <Title>
                안녕 리액트!
            </Title>
            <Button>Nomal</Button>
            <Button dark>Dark</Button>
            <RoundButton>Round</RoundButton>
            <br/><br/>
            {blockItem.map((item) => (
                <div
                style={{
                    padding: item.padding,
                    backgroundColor: item.backgroundColor,
                }}
                >
                {item.label}
                </div>
            ))}

        </Wrapper>
    )
}