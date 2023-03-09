

function Footer() {

    return (
        <div>
            <p>This Recipe Box was made with React.js and brought to you by:</p>
            <div className="footer">

                <figure>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331786333-N2O4YIO3I4HDOEK6WNZ3/bacon.gif"
                        class="gif"
                    />
                    <figcaption>Taylor</figcaption>
                </figure>
                <figure>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789348-38MXDDJ4C5HYWQ7H4NQG/peaches.gif"
                        className="gif"
                    />
                    <figcaption>Grace</figcaption>
                </figure>
                <figure>
                    <img
                        className="gif"
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789992-7VWSLO09C8RKDUZ6FK1X/pizzahh.gif"
                    />
                    <figcaption>Duggan</figcaption>
                </figure>
                <br />

            </div>
            <div>
                <p>And a special thanks to a coding raver for the custom hook...</p>
                <figure>
                    <img
                        id="adam"
                        className="gif"
                        src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331788637-HB5IL45IZA10H2CLZ7A3/fries.gif"
                    />
                    <figcaption>Adam</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Footer;