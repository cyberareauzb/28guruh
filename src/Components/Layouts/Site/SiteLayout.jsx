import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../../Pages/SitePages/About";
import Contacts from "../../Pages/SitePages/Contacts";
import Main from "../../Pages/SitePages/Main";
import PostPage from "../../Pages/SitePages/PostPage";

function SiteLayout() {
    return (
        <div>
            <header className="sitehead">HEADER
                <ul>
                    <li><NavLink to="/">Bosh sahifa</NavLink></li>
                    <li><NavLink to="/about">Biz haqimizda</NavLink></li>
                    <li><NavLink to="/contacts">Manzillarimiz</NavLink></li>
                </ul>
                <Link to={'/login'}>Kirish</Link>
            </header>


            <main className="sitecontent">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/post/:name" element={<PostPage />} />
                    <Route path="/*" element={<h1>404 hatolik sahifa topilmadi</h1>} />
                </Routes>

            </main>

            <footer className="sitefoot">FOOTER</footer>

        </div>
    );
}

export default SiteLayout;