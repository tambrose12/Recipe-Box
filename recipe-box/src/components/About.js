function About() {



    return (
        <div id="about">
            <h2>Thank's For Visiting Our Site!</h2>
            <p>This project is the culmination of skills learned during Flatiron School's Phase 2, focused on React library for JavaScript.</p>

            <p>The Recipe Box was created as a way to virtually store and acces your favorite recipes from anywhere. Have you ever found the exact recipe online you were looking for and clicked the link, only to have to go through the endless scroll of reading the author's life story before getting to the actual recipe? We know the feeling all too well, and wanted to bring the Recipe Box user exactly what they came for, without the endless scroll. We hope you enjoy your life-storyless recipes!</p>

            <p>We created our own db.json server rather than an API so that we could customize the data structure for our purposes.The db.json file is located in a separate repository to give us the option to deploy the site at a later time.</p>

            <p>For the visual styling element of the application, we installed Semantic UI CSS paired with some of our own custom CSS design.</p>

            <p>We implemented one custom hook to dynamically render our "add ingredient" inputs. Big thank you to Adam La Rosa for helping us by writing an awesome custom hook that helped our page function how we really wanted it to, while showing off the perks of using a custom hook!</p>

            <h3>Check Out The Creators:</h3>
            <div id="social">
                <div id="grace">
                    <figure>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789348-38MXDDJ4C5HYWQ7H4NQG/peaches.gif"
                            className="gif"
                        />
                        <figcaption>
                            <h3>Grace</h3>
                        </figcaption>
                    </figure>
                    <a href="https://www.linkedin.com/in/gracenieboer/"><i className="linkedin icon"></i></a>
                    <a href="https://github.com/gnieb"><i className="github icon"></i></a>
                </div>

                <div id="taylor">
                    <figure>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331786333-N2O4YIO3I4HDOEK6WNZ3/bacon.gif"
                            className="gif"
                        />
                        <figcaption>
                            <h3>Taylor</h3>
                        </figcaption>
                    </figure>
                    <a href="https://www.linkedin.com/in/taylor-ambrose-b268ab20a/"><i className="linkedin icon"></i></a>
                    <a href="https://github.com/tambrose12"><i className="github icon"></i></a>
                </div>
                <div id="duggan">
                    <figure>
                        <img
                            className="gif"
                            src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789992-7VWSLO09C8RKDUZ6FK1X/pizzahh.gif"
                        />
                        <figcaption>
                            <h3>Duggan</h3>
                        </figcaption>
                    </figure>
                    <a href="https://www.linkedin.com/in/kevin-duggan-420624164/"><i className="linkedin icon"></i></a>
                    <a href="https://github.com/Duggan1"><i className="github icon"></i></a>
                </div>
            </div>
        </div>
    )
}
export default About;