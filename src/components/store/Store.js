import Card from '../card/Card'
import './Store.css';

function Store(props) {
    const items = [
        {
            photo: '/images/bike.jpg',
            title: 'Bike',
            price: 20,
            description: 'Super bike'
        },
        {
            photo: '/images/car.jpg',
            title: 'Car',
            price: 10,
            description: 'Super car'
        },
        {
            photo: '/images/tshirt.jpg',
            title: 'T-shirt',
            price: 20,
            description: 'Super t-shirt'
        },
        {
            photo: '/images/cocacola.jpg',
            title: 'Coca cola',
            price: 5,
            description: 'Super coca cola'
        },
        {
            photo: '/images/headphones.jpg',
            title: 'Headphones',
            price: 20,
            description: 'Super headphones'
        },
        {
            photo: '/images/ipad.jpg',
            title: 'Ipad',
            price: 200,
            description: 'Super ipad'
        },
        {
            photo: '/images/smartphone.jpg',
            title: 'Smartphone',
            price: 20,
            description: 'Super smartphone'
        },
        {
            photo: '/images/speaker.jpg',
            title: 'Speaker',
            price: 20,
            description: 'Super speaker'
        },
        {
            photo: '/images/sunglasses.jpg',
            title: 'Sunglasses',
            price: 20,
            description: 'Super sunglasses'
        },
        {
            photo: '/images/watch.jpg',
            title: 'Watch',
            price: 20,
            description: 'Super watch'
        }
    ]

    const addItem = (item) => {
        props.addItem(item, 1);
    }

    // const store = items.map((item, idx) => (
    //     <div className="card" key={idx}>
    //         <img src={item.photo} alt="b" className="image"/>
    //         <div className="textContainer">
    //             <span className="title">{item.title}</span>
    //             <span className="description">{item.description}</span>
    //             <div className="addContainer">
    //                 <span className="price">{item.price}</span>
    //                 <button className="add" onClick={() => addItem(item.title)}><img src="/icons/plus.png" alt="plus" width="30"/></button>
    //             </div>
    //         </div>
    //     </div>
    // ))

    const store = items.map((item, idx) => (
        <Card key={idx} item={item} addItem={addItem}/>
    ))

    return (
        <div className="container">
            <div className="cards">
                {store}
            </div>
        </div>
    )
}

export default Store;