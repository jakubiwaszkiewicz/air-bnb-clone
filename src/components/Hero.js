import photo_grid from "../images/photo-grid.png"

function Hero () {
    return (
        <section className="Hero">
            <img src={photo_grid} alt="Grid of photos." className="hero--photo_grid"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all
                without leaving home.</p>
        </section>
    );
}
export default Hero;