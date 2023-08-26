import {
  ContainerHeader,
  ContainerMenu,
  ContainerLogo,
  MenuItem,
  MenuItemCouple,
  MenuItemText,
  MenuItemButton,
  MenuItemNumber,
  ContainerMenuitem,
} from "./styles";

interface HeaderProps {
  handleClick: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  refs: {
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    experienceRef: React.MutableRefObject<HTMLDivElement | null>;
  };
}

export function Header(props: HeaderProps, experienceRef: any) {
  const handleOnClick = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    props?.handleClick(ref);
  };
  return (
    <ContainerHeader>
      <ContainerMenu>
        <ContainerLogo>a</ContainerLogo>
        <ContainerMenuitem>
          <MenuItem>
            <MenuItemCouple
              onClick={() => handleOnClick(props?.refs?.aboutRef)}
            >
              <MenuItemText>
                <MenuItemNumber>01. </MenuItemNumber>About
              </MenuItemText>
            </MenuItemCouple>
            <MenuItemCouple
              onClick={() => handleOnClick(props?.refs?.experienceRef)}
            >
              <MenuItemText>
                <MenuItemNumber>02. </MenuItemNumber>Experience
              </MenuItemText>
            </MenuItemCouple>
            <MenuItemCouple>
              <MenuItemText>
                {" "}
                <MenuItemNumber>03. </MenuItemNumber>Work
              </MenuItemText>
            </MenuItemCouple>
            <MenuItemCouple>
              <MenuItemText>
                <MenuItemNumber>04. </MenuItemNumber>Contact
              </MenuItemText>
            </MenuItemCouple>
          </MenuItem>
          <MenuItemButton>Resume</MenuItemButton>
        </ContainerMenuitem>
      </ContainerMenu>
    </ContainerHeader>
  );
}
