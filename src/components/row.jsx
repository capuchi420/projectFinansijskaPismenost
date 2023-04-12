function Row(props){
    return (
        <div className="section">
            <p>{props.txt}</p>
            <img className="contentImg" src={props.img} alt={props.alt} />
        </div>
    );
};

export default Row;