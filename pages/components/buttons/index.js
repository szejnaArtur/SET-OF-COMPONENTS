import Buttons from '../../../component/button/buttons-with-hover-effects';
import ButtonGen from '../../../component/button/button-share';
import ButtonRightArrowAnimated from "../../../component/button/buttons-with-arrow-animation/button-right-arrow-animated";
import MenuButton from "../../../component/button/menu-buttons/menu-button";

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
            fontFamily: 'Poppins, sans-serif',
            gap: '40px'
        }}>
            <MenuButton />
            <Buttons />
            <ButtonRightArrowAnimated>Napisz do nas</ButtonRightArrowAnimated>
            <ButtonGen />
        </div>
    )
}

export default Index;