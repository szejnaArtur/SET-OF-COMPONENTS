import classes from './input-label-animation.module.css';

const InputLabelAnimation = ({type, text}) => {
    return (
        <div className={classes.container}>
            <div className={classes.inputBox}>
                <input type={type} required='required'/>
                <span>{text}</span>
                <i></i>
            </div>
        </div>
    )
}

export default InputLabelAnimation;