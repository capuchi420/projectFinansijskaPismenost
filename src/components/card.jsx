function Card(props){
    return(
        <div className={(props.done ? "card done" : "card")} onClick={e => {
            document.cookie = `id=${props.id}; expires=Thu, 18 Dec 9999 12:00:00 GMT`;
            window.location.href = 'lekcija.html';
            }}>
            <img src={props.imgUrl} alt={props.altTxt} />
            <h1>{props.naslov}</h1>
            <p>{props.opis}</p>
            {(props.done && <div className="x"></div>)}
        </div>
    );
};

export default Card;