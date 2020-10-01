import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    padding: 0 3rem;
    height: 64px;
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

    svg {
        width: 0.8rem;
        margin-left: 0.5rem;
    }
`;

const Dropdown = styled.div`
    position: absolute;
    background-color: white;
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    padding: 1rem 2rem;
    border-radius: 8px;
    z-index: 1;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;

const DropdownItem = styled.div`
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export default function Header(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeDropdown = () => {
        setDropdownOpen(false)
    }

    const HeaderDropdown = () => {
        return(
            <>
            <Dropdown>
                <Flex>
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
                        {props.userInfo.firstName} {props.userInfo.lastName}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </UserMenuItem>
                    {dropdownOpen ? <HeaderDropdown /> : ""}
                </div>
            </Menu>
        </Nav>
    );
}
