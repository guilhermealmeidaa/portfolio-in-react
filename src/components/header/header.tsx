import { ContainerHeader, ContainerMenu, ContainerLogo, MenuItem, MenuItemCouple, MenuItemText, MenuItemButton, MenuItemNumber, ContainerMenuitem} from "./styles"

export function Header() {
    return (
        <ContainerHeader>
            <ContainerMenu>
                < ContainerLogo>a
                </ContainerLogo>
                <ContainerMenuitem >
                    <MenuItem>
                        <MenuItemCouple>
                            <MenuItemText transform="100ms"><MenuItemNumber>01. </MenuItemNumber>About</MenuItemText>
                        </MenuItemCouple>
                        <MenuItemCouple>
                            <MenuItemText transform="200ms"><MenuItemNumber>02. </MenuItemNumber>Experience</MenuItemText>
                        </MenuItemCouple>
                        <MenuItemCouple>
                            <MenuItemText transform="300ms"> <MenuItemNumber>03. </MenuItemNumber>Work</MenuItemText>
                        </MenuItemCouple>
                        <MenuItemCouple>
                            <MenuItemText transform="400ms"><MenuItemNumber>04. </MenuItemNumber>Contact</MenuItemText>
                        </MenuItemCouple>
                    </MenuItem>
                    <MenuItemButton>Resume</MenuItemButton>
                </ContainerMenuitem>
            </ContainerMenu>
        </ContainerHeader>
    )
}