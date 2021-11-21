import styled from "styled-components"

const StyledButton = styled.button`
    color: white;
    font-weight: 700;
    border: none;;
    background-color: rgba(80,80,80,1);
    text-transform: uppercase;
    margin: 1em;
    padding: 1em;
    font-size: 1em;
    border-radius: .4em;
    cursor: pointer;
    &:hover{
        background-color: rgba(80,80,80,.8);        

    }
`

const MainButton = ({children, onNavClick, navRoute}) => {
    const triggerParentNav = (event, to) => {
        event.preventDefault()
        onNavClick(to)
      }
    return (
        <StyledButton onClick={(event) => {triggerParentNav(event, navRoute)}}>{children}</StyledButton>

    )

}

export default MainButton