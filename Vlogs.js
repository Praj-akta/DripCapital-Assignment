import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import ApplicationList from './ApplicationList';

function Vlogs({
    match,
}) {
    const [listData, setApiData] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries/${match.params.entryId}?access_token=IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE`)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data.fields)
            })
    }, [])
    return (
        <div>
            <ApplicationList
                list={listData}
                selectedFontSize={14} />
        </div>
    )
}
export default withRouter(Vlogs)