const { Link } = require("react-router-dom");
const Navbar = () => {
    return (
        <div style={{ backgroundColor: 'yellow', width: '100%', height: 100 }}>
            <nav style={{ textAlign: "center", marginTop: "20px" }}>
                <Link to="/" style={{ padding: "10px", backgroundColor: 'yellowgreen' }}>
                    Home
                </Link>
                <Link to="/profile" style={{ padding: "10px", backgroundColor: 'yellowgreen' }}>
                    Profile
                </Link>
                <Link to="/about" style={{ padding: "10px", backgroundColor: 'yellowgreen' }}>
                    About
                </Link>
            </nav>
        </div>
    );
};
export default Navbar;