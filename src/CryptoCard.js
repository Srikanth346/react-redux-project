import React from 'react';

const CryptoCard = () => {
  const [data, setData] = useState();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets?format=json')
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);

  console.log(data?.assets);

  return (
    <React.Fragment>
      <h2>Weather Forcast</h2>
    </React.Fragment>
  );
};

export default CryptoCard;
