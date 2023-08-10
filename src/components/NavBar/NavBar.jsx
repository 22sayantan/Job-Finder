import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="logoDiv">
            <h1 className="logo"><strong className="text-[1.1rem]">Job</strong>Search</h1>

        </div>

        <div className="menu gap-8">
          <li className="menuList">Jobs</li>
          <li className="menuList">Companies</li>
          <li className="menuList">About</li>
          <li className="menuList">Contact</li>
          <li className="menuList">Blog</li>
          <li className="menuList">Login</li>
          <li className="menuList">Register</li>
        </div>
    </div>
  )
}

export default NavBar
