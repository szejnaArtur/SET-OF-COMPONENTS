import classes from './input-label-animation.module.css';

const InputLabelAnimation = () => {
    return (
        <div className={classes.container}>
            <div className={classes.inputBox}>
                <input type='text' required='required'/>
                <span>Full Name</span>
                <i></i>
            </div>
        </div>
    )
}

export default InputLabelAnimation;