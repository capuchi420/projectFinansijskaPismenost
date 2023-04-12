import cards from './cards.json';
import Row from './row';

function Content(props){
    let content = [];

    for(let i = 0; i < cards.data.length; i++){
        if(cards.data[i].id == props.id){
            for(let j = 0; j < cards.data[i].content.length; j++){
                content.push(<Row key = {j} {...cards.data[i].content[j]}/>);
            }
        }
    }

    const myFunc = () => {
        let cookie = document.cookie;
        let id = cookie.slice(cookie.indexOf('=') + 1, cookie.length);
        document.cookie = `doneId${props.id}=${props.id}; expires=Thu, 18 Dec 9999 12:00:00 GMT`;
        window.location.href = "index.html";
    }

    return(
        <div>
            {content}
            <div className='button'>
                <button className='btn' onClick={e => myFunc()}>Procitano</button>
            </div>
        </div>
    );
};

export default Content;