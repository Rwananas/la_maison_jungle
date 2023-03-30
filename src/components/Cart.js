

function Cart () {
    
    let prix = [8,10,15];
    return (
    <>
    <h2>Panier</h2>
    <ul>
        <li>monstera: {prix + '€'} </li>
        <li>lierre: {prix[1] + '€'}</li>
        <li>bouquet de fleurs: {prix[2] + '€'}</li>
    </ul>
    Total: {prix[0] + prix[1] + prix[2] + '€'}
    </>
    )
}

export default Cart;