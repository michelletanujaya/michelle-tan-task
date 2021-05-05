function Box(props) {
    return (
        <div className={'boxes ' + props.boxName + '-box'}>
        <span className="text">{props.number}</span>
        </div>
    );
  }
  
export default Box;