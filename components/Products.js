export default function products(props) {
    return (
        <div>
            <h3>name: {props.name}</h3>
            <h3>price: {props.price}</h3>
            <h3>desc: {props.desc}</h3>
            <img src={props.image} alt='hey'/>
        </div>
    )
}