function Test (props){
    return (
        <div style={{color: props.fontColor,fontFamily:`poppins`}}>
            <h4>Name : {props.name}</h4>
            <img src={props.avatar} style={{width:`100px`, height:`50px`,borderRadius:`50%`}}></img>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default Test;