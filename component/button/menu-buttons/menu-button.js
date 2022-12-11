import classes from './menu-button.module.css';

const MenuButton = () => {
    return (
        <div className={classes.content}>
            <label htmlFor="check">
                <input type="checkbox" id="check"/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}

export default MenuButton;