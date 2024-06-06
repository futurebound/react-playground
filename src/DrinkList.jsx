function Drink({ info }) {
  return (
    <section>
      <h1>{info.name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine} mg/cup</dd>
        <dt>Age</dt>
        <dd>{info.age} years</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  const tea = {
    name: 'tea',
    part: 'leaf',
    caffeine: '15-70',
    age: '4000+',
  };
  const coffee = {
    name: 'coffee',
    part: 'bean',
    caffeine: '80–185',
    age: '1000+',
  };

  return (
    <div>
      <Drink info={tea} />
      <Drink info={coffee} />
    </div>
  );
}
