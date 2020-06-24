import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled(Link)`
    display: inline-block;
    text-decoration: none !important;
    transition: transform 0.2s;

    &:hover, &:active {
        transform: scale(1.2);
    }
`

export default NavLink