function Hero(props){
    return (
        <header>
            <div className="content">
                <h1>{props.naslov}</h1>
                {props.desc && <p>{props.desc}</p>}
            </div>
        </header>
    );
};

export default Hero;