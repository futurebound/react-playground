function Item({ name, isPacked, importance }) {
  return (
    <li className='item'>
      {isPacked ? name + '✔' : name}
      {importance > 0 ? <em> (Importance: {importance})</em> : ''}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item isPacked={true} importance={9} name='Space suit' />
        <Item isPacked={true} importance={0} name='Helmet with a golden leaf' />
        <Item isPacked={false} importance={6} name='Photo of Tam' />
      </ul>
    </section>
  );
}
