import styled from './styles'

export function Header() {
    return (
        <styled.containerHeader>
            <styled.containerMenu>
                <styled.containerLogo>a
                </styled.containerLogo>
                <styled.containerMenuItem >
                    <styled.menuItem>
                        <styled.menuItemCouple>
                            <styled.menuItemText><styled.menuItemNumber>01. </styled.menuItemNumber>About</styled.menuItemText>
                        </styled.menuItemCouple>
                        <styled.menuItemCouple>
                            <styled.menuItemText><styled.menuItemNumber>02. </styled.menuItemNumber>Experience</styled.menuItemText>
                        </styled.menuItemCouple>
                        <styled.menuItemCouple>
                            <styled.menuItemText> <styled.menuItemNumber>03. </styled.menuItemNumber>Work</styled.menuItemText>
                        </styled.menuItemCouple>
                        <styled.menuItemCouple>
                            <styled.menuItemText><styled.menuItemNumber>04. </styled.menuItemNumber>Contact</styled.menuItemText>
                        </styled.menuItemCouple>
                    </styled.menuItem>
                    <styled.menuItemButton>Resume</styled.menuItemButton>
                </styled.containerMenuItem>
            </styled.containerMenu>
        </styled.containerHeader>
    )
}