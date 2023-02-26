import sanitizedRoutes from './sanitizedRoutes';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const createLinks = () => sanitizedRoutes.map(route =>
    <Nav.Item key={route.name} as="li">
        <Nav.Link as={NavLink} to={route.path}>
            {route.label}
        </Nav.Link>
    </Nav.Item>);

export default createLinks