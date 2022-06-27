import arrow from './img/arrow.png'

const Btn = ({changeAll, randomColor}) => {

    return (
    <button onClick={changeAll}
         style={{backgroundColor: randomColor}}><img src={arrow} />
         </button>
    );
};

export default Btn;