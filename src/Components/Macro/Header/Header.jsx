import css from './Header.module.css'
import Button from '../../Micro/Button';

function Header() {
    let currentTime = new Date()

    return (
        <header className={css.head}>
            <div className={css.time}>
                {currentTime.getHours()}:
                {currentTime.getUTCMinutes()}
            </div>
            <div className={css.actions}>
                <Button bgColor={'red'}>Chiqish</Button>
            </div>
        </header>
    );
}

export default Header;