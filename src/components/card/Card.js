import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.item.photo} alt="b" className="image"/>
            <div className="textContainer">
                <span className="title">{props.item.title}</span>
                <span className="description">{props.item.description}</span>
                <div className="addContainer">
                    <span className="price">{props.item.price}$</span>
                    <button className="add" onClick={() => props.addItem(props.item)}><img src="/icons/plus.png" alt="plus" width="30"/></button>
                </div>
            </div>
        </div>
    )
}

export default Card;