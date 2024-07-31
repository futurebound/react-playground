import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const nonChemists = people.filter((person) => person.profession !== 'chemist');
  const listItems = nonChemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
