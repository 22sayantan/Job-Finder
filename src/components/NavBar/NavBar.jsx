const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
        <div className="logoDiv">
            <h1 className="logo text-[1.5rem] text-[blue]"><strong className="text-[1.1rem]">Job</strong>Search</h1>

        </div>

        <div className="menu flex gap-8">
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">Jobs</li>
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">Companies</li>
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">About</li>
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">Contact</li>
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">Login</li>
          <li className="menuList text-[#6f6f6f] hover:text-[blue]">Register</li>
        </div>
    </div>
  )
}

export default NavBar
