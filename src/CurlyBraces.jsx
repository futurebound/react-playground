export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
    <img
      style={{
        backgroundColor: 'black',
        color: 'pink',
      }}
      className='avatar'
      src={avatar}
      alt={description}
    />
  );
}
