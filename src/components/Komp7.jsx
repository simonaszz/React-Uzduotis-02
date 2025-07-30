

const Komp7 = () => {
  const zodziai = ["preke", "preke1", "preke2"];

  return (
    <>
      <h3>Komp7</h3>
      <ul>
        {zodziai.map((zodis, index) => (
          <li key={index}>{zodis}</li>
        ))}
      </ul>
    </>
  );
}

export default Komp7;
