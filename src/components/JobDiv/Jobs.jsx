import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../Assets/download (5).png'

const Data =[
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: '1 hr',
    location: 'Delhi',
    desc: 'we are looking for 2-4 year expreience performer on web development with must have html,css, javascript,angular,vue,react,reactnative , aws........',
    company: 'Burger King'
  }

]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex items-center justify-center flex-wrap gap-10 py-10">
        

        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
              
              <div key={id} className="singleJob group group/item p-[1.2rem] w-[250px] rounded-[10px] hover:bg-[blue] shadow-lg hover:shadow-lg 
                  shadow-[gray]-400/700" >

                <span className='flex items-center justify-between gap-4'>
                  <h1 className='text-[16px] font-semibold text-[blue] group-hover:text-white'>{title}</h1>
                    <span className='flex items-center text-[#ccc] gap-1'>
                          <BiTimeFive/>{time}
                    </span>
                </span>

                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[1.3rem] border-t-[2px] mt-[1.3rem]'>
                  {desc}
                </p>

                <div className="company flex items-center gap-4">
                  <img src={image} alt="organization" className='w-[3.3rem] ml-[-14px]'/>
                  <span className='text-[1rem] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='block border-[2px] rounded-[10px] p-[10px] w-full text-[1rem] font-semibold text-[gray] hover:bg-white group-hover/item:text-black group-hover:text-white'>Apply Now</button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs
