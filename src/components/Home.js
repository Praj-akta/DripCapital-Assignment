import { useState, useEffect } from "react";
import ApplicationList from "./ApplicationList";

function Home() {
  const [listData, setApiData] = useState(null);
  const [selectedFontSize, updateFontSizeValue] = useState(14);

  useEffect(() => {
    fetch('https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries/?access_token=IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data)
      })
  }, []);

  return (
    <div className="App">
      <div className="input-container">
        <label>Increase a number</label>
        <input type="number"
          value={selectedFontSize}
          onChange={e => updateFontSizeValue(e.target.value)} />
      </div>
      {
        listData && (
          listData.items.map((value, index) => {
            return <ApplicationList
              key={index}
              list={value.fields}
              titleId={value.sys.id}
              disableTitleClick={false}
              selectedFontSize={selectedFontSize} />
          })
        )
      }
    </div>
  );
}

export default Home;
