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
      <label>
        Select a number
        <input type="number"
          value={selectedFontSize}
          onChange={e => updateFontSizeValue(e.target.value)} />
      </label>
      {
        listData && (
          listData.items.map((value, index) => {
            return <ApplicationList
              key={index}
              titleId={value.sys.id}
              list={value.fields}
              selectedFontSize={selectedFontSize} />
          })
        )
      }
    </div>
  );
}

export default Home;
