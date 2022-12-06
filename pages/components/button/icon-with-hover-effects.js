import Icons from '../../../component/button/icon-with-hover-effects';

const IconWithHoverEffects = () => {
    return(
        <div style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            boxSizing: 'border-box',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <Icons />
        </div>
    )
}

export default IconWithHoverEffects;