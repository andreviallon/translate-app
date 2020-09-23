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
    margin: 0;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 2rem;
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

export default function Header(props) {
    console.log('userInfo', props.userInfo);
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
                    <UserMenuItem>
                        {props.userInfo.firstName} {props.userInfo.lastName}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </UserMenuItem>
                </div>
            </Menu>
        </Nav>
    );
}
