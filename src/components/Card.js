import star from "../images/star.svg"

function Card (props) {
    console.log(props)
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.openSpots === (1 || 2)) {
        badgeText = "NEARLY SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    } else {
        badgeText = "";
    }
    return(
        <section className="Card">
            {!(badgeText === "") && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt={props.item.alt} className="card--person"/>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" /> &nbsp;
                <span>{props.item.stats.rating}</span> &nbsp;
                <span className="card--grey">({props.item.stats.reviewCount}) · &nbsp;</span>
                <span className="card--grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="card--bold">From ${props.item.price}</span> / person</p>
        </section>
    );
}

export default Card;