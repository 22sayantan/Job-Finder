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
      <div className="jobContainer">
        

        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
              
              <div key={id} className="singleJob" >

                <span>
                  <h1>{title}</h1>
                    <span>
                          <BiTimeFive/>{time}
                    </span>
                </span>

                <h6>{location}</h6>

                <p>
                  {desc}
                </p>

                <div>
                  <img src={image} alt="organization"/>
                  <span>{company}</span>
                </div>

                <button>Apply Now</button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs
