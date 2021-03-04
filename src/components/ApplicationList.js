import { useState } from "react";
import { withRouter } from "react-router";
import "../shared/index.scss";

function ApplicationList({
    list,
    titleId,
    history,
    selectedFontSize,
    disableTitleClick
}) {

    const [showFullDescription, setToggle] = useState(false);
    let descriptionHeightValue = !showFullDescription ? 100 : "none";

    return (
        list && (
            <div className="list-container">
                <div className="image">
                    <img src={list.url} alt="img" />
                </div>
                <div className="details">
                    <h1 onClick={_ => !disableTitleClick && history.push(`/${titleId}`)}>
                        {list.title}
                    </h1>
                    <p style={{
                        fontSize: parseInt(selectedFontSize),
                        maxHeight: descriptionHeightValue
                    }}>
                        {list.body}
                    </p>
                    <span className="read-more"
                        onClick={_ => setToggle(!showFullDescription)}>
                        Read more
                    </span>
                </div>
            </div>
        )

    )
}
export default withRouter(ApplicationList);