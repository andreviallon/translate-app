import styled from "styled-components";
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Theme, ThemeContext } from '../context/theme/ThemeState';

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
    padding: 1rem 2rem;
    display: flex;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
`;

const Input = styled.input`
    display: none;
        
    &+label {
        border-radius: 9px;
        display: block;
        cursor: pointer;
        position: relative;
        transition: box-shadow .4s;
        
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: inherit;
            transition: opacity .4s;
        }
    }
    &:not(:checked) {
        & + label {
            pointer-events: none;
            & + span {
                opacity: 1;
                transform: translateY(12px);
            }
        }
    }
    &:checked {
        & + label {
            --offset: 18px;
            --gradient: 1;
            --shadow: rgba(0, 6, 39, .1);
            --light-shadow: rgba(255, 255, 255, .8);
            --light-shadow-2: rgba(255, 255, 255, .1);
        }
    }
`;

const Switch = styled.div`
    position: relative;
    display: inline-block;
    z-index: 1;
    vertical-align: top;
    height: 22px;
    width: 40px;
    border-radius: 11px;
    background: #ECEFFC;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background: linear-gradient(90deg, #4F97FF, #3D85CC);
        opacity: var(--gradient, 0);
        transition: opacity .4s;
    }
`;

const Dot = styled.div`
    background: #D1D6EE;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: -1px;
    top: -1px;
    transform: translateX(var(--offset, 0));
    transition: transform .4s, box-shadow .4s;
    box-shadow: -4px -4px 8px var(--light-shadow-2, transparent), 4px 4px 8px var(--shadow, transparent);

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background: linear-gradient(160deg, #F1F4FF, #F9FAFF);
        opacity: var(--gradient, 0);
        transition: opacity .4s;
    }
`;

const DarkModeToggle = styled.span`
    font-size: 1.1rem;
    margin-right: 1rem;
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
                        <DropdownItem onClick={toggleTheme}>
                            <DarkModeToggle>Dark Mode</DarkModeToggle>
                            <Input type="checkbox" checked={theme === Theme.DARK} />
                            <label>
                                <Switch>
                                    <Dot></Dot>
                                </Switch>
                            </label>
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
