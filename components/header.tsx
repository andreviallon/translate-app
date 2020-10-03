import styled from "styled-components";
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/theme/ThemeState';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.body};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    padding: 0 3rem;
    height: 64px;
    z-index: 1;
`;

const H1 = styled.h1`
    font-size: 1.3rem;
    margin: 0 1rem 0 0;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-grow: 1;
`;

const MenuItem = styled.a`
    margin: 0.2rem 1rem 0; 
    font-weight: 500;
    cursor: pointer;
`;

const UserMenuItem = styled(MenuItem)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0.2rem 0 0;
    cursor: pointer;

    svg {
        width: 0.8rem;
        margin-left: 0.5rem;
    }
`;

const Dropdown = styled.div`
    background: ${({ theme }) => theme.body};
    position: absolute;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
    border-radius: 8px;
    z-index: 3;
    top: 55px;
    right: 50px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;

const DropdownItem = styled.div`
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2.5rem;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
`;

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => setTheme();

    const closeDropdown = () => {
        setDropdownOpen(false)
    }

    const HeaderDropdown = () => {
        return (
            <>
                <Dropdown>
                    <Flex>
                        <DropdownItem onClick={() => toggleTheme()}>
                            <button onClick={toggleTheme}>
                                current theme {theme}
                            </button>
                        </DropdownItem>
                        <DropdownItem onClick={() => closeDropdown()}>Profile</DropdownItem>
                        <DropdownItem onClick={() => closeDropdown()}>Logout</DropdownItem>
                    </Flex>
                </Dropdown>
                <Overlay onClick={() => closeDropdown()} />
            </>
        );
    }

    return (
        <Nav>
            <H1>Translate App</H1>
            <Menu>
                <div>
                    <MenuItem>Translate</MenuItem>
                    <MenuItem>History</MenuItem>
                    <MenuItem>Favorite</MenuItem>
                </div>
                <div>
                    <UserMenuItem onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <span>John Doe</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </UserMenuItem>
                    {dropdownOpen ? <HeaderDropdown /> : ""}
                </div>
            </Menu>
        </Nav>
    );
}
