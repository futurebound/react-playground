function ConvertingHTML() {
  /* original HTML

    <h1>Test title</h1>
    <svg>
      <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
    </svg>
    <form>
      <input type="text">
    </form>
  */

  return (
    <>
      <h1>Test title</h1>
      <svg>
        <circle cx='25' cy='75' r='20' stroke='green' strokeWidth='2' />
      </svg>
      <form>
        <input type='text' />
      </form>
    </>
  );
}

export default ConvertingHTML;
