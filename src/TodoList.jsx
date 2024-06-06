const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
  imageId: '7vQD0fP',
  imageSize: 's',
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img
        className='avatar'
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt='Gregorio Y. Zara'
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
