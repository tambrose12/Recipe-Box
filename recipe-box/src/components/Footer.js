

function Footer() {

    return (
        <div>
            <p>This Recipe Box was made with React.js and brought to you by:</p>
            <div className="footer">

                <figure>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331786333-N2O4YIO3I4HDOEK6WNZ3/bacon.gif"
                        class="ui small image"
                    />
                    <figcaption>Taylor</figcaption>
                </figure>
                <figure>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789348-38MXDDJ4C5HYWQ7H4NQG/peaches.gif"
                        className="ui small image"
                    />
                    <figcaption>Grace</figcaption>
                </figure>
                <figure>
                    <img
                        className="ui small image"
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789992-7VWSLO09C8RKDUZ6FK1X/pizzahh.gif"
                    />
                    <figcaption>Duggan</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Footer;