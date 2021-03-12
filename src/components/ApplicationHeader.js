
export default function ApplicationHeader() {
    return (
        <div className="row application-header-container">
            <div className="col-md-2" />
            <div id="application-header" className="col-12 col-md-8 ">
                <div id="content" className="col-12 col-md-8 col-lg-8">
                    <h1>
                        Never wait for buyer payments
                    </h1>
                    <h6>
                        Easy access to collateral-free working capital.
                        Submit your invoices and get paid as soon as you ship.
                    </h6>
                    <button className="btn-success">
                        Get Started
                    </button>
                </div>
                <div id="image" className="col-12 col-md-4 col-lg-4">
                    Easy access to collateral-free working capital.
                    Submit your invoices and get paid as soon as you ship.
                </div>
            </div>
            <div className="col-md-2" />
        </div>
    )
}