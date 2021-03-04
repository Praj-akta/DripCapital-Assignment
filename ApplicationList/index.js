import { withRouter } from "react-router";


function ApplicationList({
    list,
    titleId,
    history,
    selectedFontSize
}) {
    return (
        list && (
            <div>
                <div>
                    <h1 onClick={_ => history.push(`/${titleId}`)}> {list.title} </h1>
                    <p style={{ fontSize: parseInt(selectedFontSize) }}> {list.body} </p>
                </div>
                <div>
                    <img src={list.url} alt="img" />
                </div>
            </div>
        )

    )
}
export default withRouter(ApplicationList);