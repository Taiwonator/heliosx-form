import logo from '../../heliosx.svg'

const Header = () => {
    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Primary navigation">
                <img className="site-logo" src={logo} alt="HeliosX" />
            </nav>
        </header>
    )
}

export default Header
