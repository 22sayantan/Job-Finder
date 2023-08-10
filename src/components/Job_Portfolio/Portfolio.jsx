// import React from 'react';
import './product.scss'

const ProductDetails = () => {
  const job = {
    name: 'Web Developer',
    org_name: 'Tata consultancy services',
    location: 'bangalore , india',
    description: `We are seeking a talented and motivated Web Developer to join our team. The ideal candidate will have a passion for creating dynamic, interactive, and visually appealing websites. As a Web Developer, you will collaborate with cross-functional teams to design, develop, and maintain web applications that align with our clients' goals and enhance user experiences.`,
    responsibility: ['Collaborate with designers, project managers, and other developers to understand project requirements and objectives.',
    'Develop responsive and interactive web applications using modern front-end technologies such as HTML5, CSS3, JavaScript, and React.',
    'Implement UI/UX designs, ensuring a seamless and visually pleasing user experience.',
    'Write clean, maintainable, and efficient code while following best practices and coding standards.',
    'Optimize web applications for maximum speed and scalability.',
    'Troubleshoot and debug issues, ensuring smooth functionality across various browsers and devices.',
    'Stay up-to-date with industry trends, emerging technologies, and best practices to continuously improve our development processes.',
    'Participate in code reviews and provide constructive feedback to fellow team members.'],
    requirements: [
      'Bachelor\'s degree in Computer Science, Web Development, or a related field (or equivalent work experience).',
      'Proven experience as a Web Developer, showcasing a strong portfolio of web projects.',
      'Proficiency in front-end technologies: HTML5, CSS3, JavaScript (ES6+), and popular front-end libraries/frameworks (e.g., React, Vue, Angular).',
      'Familiarity with responsive design principles and mobile-first development.',
      'Solid understanding of cross-browser compatibility and web accessibility standards.',
      'Experience working with version control systems (e.g., Git).',
      'Strong problem-solving skills and attention to detail.',
      'Excellent communication and teamwork abilities.',
      'Experience with back-end technologies and databases is a plus.',
      'Knowledge of SEO principles and optimization techniques is a plus.'],
    image: 'product.jpg',
    salary: '₹10,000.00/month',
    // Add more details as needed
  };

  return (
    <div className="job-details">
      <div className="org-image">
        <img src={job.image} alt={job.name} />
      </div>
      <div className="job-info">
        <h1>{job.name}</h1>
        <h3>{job.org_name}</h3>
        <h4>{job.location}</h4>
        <p className="job-price">{job.salary}</p><br /><br />
        
        <p>
          <span className='job_desc_title'>
            Job Description : 
          </span><br />
          <div className="desc_body">
            {job.description}
          </div>
        </p>
        
        <p>
          <span className='job_resp_title'>
            Responsibilities : 
          </span> <br />
            <div className="resp_body">
                <ul className='resp_list'>
                {job.responsibility.map((item,index)=>
                    <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        </p>

        <p>
          <span className='job_requirement_title'>
            Requirements : 
          </span><br />
          
          <div className="requirement_body">
            <ul className='requirement_list'>
              {job.requirements.map((item,index)=>
                <li key={index}>{item}</li>
                )}
            </ul>
          </div>
        </p>
        <button className="add-to-cart">Apply</button>
      </div>
    </div>
  );
};

export default ProductDetails;

