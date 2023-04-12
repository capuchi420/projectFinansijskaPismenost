function SectionImgR(props){
    return (
        <div className="sectionImgR">
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

export default SectionImgR;