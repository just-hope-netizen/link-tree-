import { Card } from 'react-bootstrap';

export const CardComponent = ({text, link, id}) => {
  return (
    <Card
      style={{
        maxWidth: '1154px',
        cursor: 'pointer',
        height: '76px',
        textAlign: 'center',
        margin: ' 0 auto 24px',
        backgroundColor: '#EAECF0',
      }}
    >
      <Card.Body>
        <Card.Link
          href={link}
          id={id}
          style={{
            textDecoration: 'none',
            color: '#101828',
          }}
        >
          {text}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
