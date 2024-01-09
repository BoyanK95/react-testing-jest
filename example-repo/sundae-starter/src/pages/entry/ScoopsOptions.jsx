import Col from 'react-bootstrap/Col';

// eslint-disable-next-line react/prop-types
export default function ScoopOption({ name, imagePath }) {
    return (
        <Col xs={12} sm={6} lg={3} style={{ textAlign: 'center' }}>
            <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
        </Col>
    );
}
