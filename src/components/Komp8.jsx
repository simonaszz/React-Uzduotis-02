

const Komp8 = () => {
  let preke = {
    kodas: 'BAK364',
    pavadinimas: 'Tusinukas',
    kaina: 2.34,
    savikaina: 1.50,
    nuotrauka: 'https://via.placeholder.com/200'
  }

  // šiame komponente jau turite prekės objektą
  // jį atvaizduokite return dalyje,
  // susikurkite visas reikiamas žymas, kad tą informaciją
  // būtų galima susidėti kažkaip tvarkingai ir aiškiai

  // taip pat, atlikite kažkiek stiliavimo, tam reikės
  // susikurti css failą ir jį prijungti prie šio komponento
  // ir atlikti stiliavims (pvz, blokelio spalva, tarpai, ...)


  const kortelesStilius = {
    border: '1px solid #ccc',
    padding: '16px',
  
    width: '250px',
    borderRadius: '8px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  };

  const paveiksliukoStilius = {
    width: '100%',
    borderRadius: '4px',
    marginBottom: '8px'
  };

  return (
    <div style={kortelesStilius}>
      <h3>{preke.pavadinimas}</h3>
      <img src={preke.nuotrauka} alt={preke.pavadinimas} style={paveiksliukoStilius} />
      <p><strong>Kodas:</strong> {preke.kodas}</p>
      <p><strong>Kaina:</strong> {preke.kaina} €</p>
      <p><strong>Savikaina:</strong> {preke.savikaina} €</p>
    </div>
  );
}


export default Komp8;