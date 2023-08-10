import './search.scss'

import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { TfiLocationPin } from "react-icons/tfi";


const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-[gainsboro] rounded-[1rem] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[10px] gap-[1rem] bg-white p-5 h-[7rem] shadow-lg shadow-gray-700">
          
          <div className="search_section_fst gap-2 items-center">
            <RiSearch2Line className="text-[1.5rem] cursor-pointer"/>
            <input type="text" className="input bg-transparent border-0 border-b-2" placeholder='search you job here ......'/>
            <AiOutlineCloseCircle className="text-[1.5rem] cursor-pointer hover:text-[green]"/>
          </div>

          <div className="search_section_fst gap-2 items-center">
            <CgOrganisation className="text-[1.5rem] cursor-pointer"/>
            <input type="text" className="input bg-transparent border-0 border-b-2" placeholder='search you job here ......'/>
            <AiOutlineCloseCircle className="text-[1.5rem] cursor-pointer hover:text-[green]"/>
          </div>

          <div className="search_section_fst gap-2 items-center">
            <TfiLocationPin className="text-[1.5rem] cursor-pointer"/>
            <input type="text" className="input bg-transparent border-0 border-b-2" placeholder='search you job here ......'/>
            <AiOutlineCloseCircle className="text-[1.5rem] cursor-pointer hover:text-[green]"/>
          </div>

          <button className="btn text-[1.2rem]">Search</button>
        </div>
      </form>

      <div className="secondDiv flex items-center gap-10 justify-center">

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>
        
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>
        
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>
        
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Intermediate</option>
            <option value="">Beginner</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
        
      </div>
    </div>
  )
}

export default Search
