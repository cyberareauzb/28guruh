import css from './Side.module.css'
import logo from './../../../logo.svg'
import { links } from './links';
function Side() {
    return (
        <aside className={css.side}>
            <div className={css.logowrapper}>
                <img src={logo} height={40} alt="Site" />
                <h2>28-GURUH</h2>
            </div>
            <ul className={css.ul}>
                {links.map(l=><li key={l.key}><a href={l.link}>{l.text}</a></li>)}
            </ul>
        </aside>
    );
}

export default Side;