import { Link } from "react-router-dom"

const bookContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
};

const bookInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none',
};

function Book({item}) {
  return (
    <div style={bookContainerStyle}>
      <Link to = {`/view/${item.id}`} style={bookInfoStyle}>
      <img src={item.cover} alt={item.title} width="200" />
      <div>{item.title}</div>
      </Link>
    </div>
  )
}

export default Book