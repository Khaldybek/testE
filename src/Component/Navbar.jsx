import '../Style/navBar.css';

const Navbar = () => {
    return (
        <div>
            <video autoPlay loop muted playsInline className="background-video">
                <source
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05"
                    type="video/mp4"
                />
            </video>

            <header>
                <a href="#">
                    <img
                        src="../Assists/nav.jpg"
                        alt="logo"
                        className="logo"
                    />
                </a>

                <input type="checkbox" id="check" />
                <label htmlFor="check" className="icons">
                    <i className="bx bx-menu" id="menu-icon"></i>
                    <i className="bx bx-x" id="close-icon"></i>
                </label>

                <nav className="navbar">
                    <a href="#" className="nav-item" style={{ "--i": 0 }}>Home</a>
                    <a href="#" className="nav-item" style={{ "--i": 1 }}>Plan Your Visit</a>
                    <a href="#" className="nav-item" style={{ "--i": 2 }}>Magical Places</a>
                    <a href="#" className="nav-item" style={{ "--i": 3 }}>Contact</a>
                </nav>
            </header>

            <section className="content">
                <h1>The North</h1>
                <a href="#" className="btn light"></a>
            </section>
        </div>
    );
};

export default Navbar;
