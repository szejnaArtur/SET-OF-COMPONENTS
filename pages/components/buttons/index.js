import Icons from '../../../component/button/buttons-with-hover-effects';
import IconGen from '../../../component/button/button-share';

const Index = () => {
    return(
        <div style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            boxSizing: 'border-box',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <Icons />
            <IconGen />
        </div>
    )
}

export default Index;