function SectionImgL(props){
    return (
        <div className="sectionImgL">
            <div className="txt">
                <h1>{props.naslov}</h1>
                <p>{props.txt}</p>
            </div>
            <div className="img">
                <img src={props.imgUrl} alt={props.altTxt} />
            </div>
        </div>
    );
};

export default SectionImgL;