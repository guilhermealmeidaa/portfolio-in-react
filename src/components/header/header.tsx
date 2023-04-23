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
                            <MenuItemText><MenuItemNumber>01. </MenuItemNumber>About</MenuItemText>
                        </MenuItemCouple>
                        <MenuItemCouple>
                            <MenuItemText><MenuItemNumber>02. </MenuItemNumber>Experience</MenuItemText>
                        </MenuItemCouple>
                        <MenuItemCouple>
                            <MenuItemText> <MenuItemNumber>03. </MenuItemNumber>Work</MenuItemText>
                        </MenuItemCouple>
                        <MenuItemCouple>
                            <MenuItemText><MenuItemNumber>04. </MenuItemNumber>Contact</MenuItemText>
                        </MenuItemCouple>
                    </MenuItem>
                    <MenuItemButton>Resume</MenuItemButton>
                </ContainerMenuitem>
            </ContainerMenu>
        </ContainerHeader>
    )
}