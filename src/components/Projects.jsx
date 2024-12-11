import '../styles/Projects.css';

const Projects = () => (
    <div className="projectsContainer">
        <h5 className="projectTitle">Projects</h5>
        <h6 className="project1H" id='projects'> <b/>New Hue<br />Restoration <br/>+ Design™</h6>
            <section id="languages">
                <div className="badge-container">
                    <div className="badge html-badge">
                        <img src={`${process.env.PUBLIC_URL}/assets/HTML.svg`} alt="badge"/>
                    <span>HTML</span>
                </div>
                    <div className="badge css-badge"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/CSS.svg`} alt="badge"/>
                    <span>CSS</span>
                </div>
                    <div className="badge js-badge">
                <img src={`${process.env.PUBLIC_URL}/assets/JS.svg`} alt="badge"/>
            <span>JavaScript</span>
        </div>
    </div>
</section>
    <img src={`${process.env.PUBLIC_URL}/assets/project1.png`} alt="Project 1" className="project1"/>
        <div className="button-b">
            <a href="https://pktaz.github.io/Contracting-Company/" target="_blank" className="web-button">View Design</a>
            </div>
            <section id="project-details">
  <table className="project-table">
    <tbody>
      <tr>
        <td>
          <p className="project-bp">
            <span className='highlight2'>Design and Developed</span> a visually engaging, <span className="highlight2">responsive website</span> for a Conracting company specialized in Restoration and Design. Updating <span className='highlight2'>forms</span>, <span className='highlight2'>projects</span> page, and even the <span className='highlight2'>landing</span> page.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="project-bp">
          <span className="highlight2">Rebuilt the projects page,</span> enhancing visual appeal and navigation to showcase completed projects with a <span className="highlight2">responsive</span>, portfolio-style layout.<span className="highlight2"></span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="project-bp">
          Built <span className="highlight2">custom user interface elements</span> that simplify the work requesting process, providing an <span className="highlight2">intuitive experience</span> for potential clients from initial browsing to booking a work request.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</section>
<h6 className="project1H">CRM Software Redesign</h6>
            <section id="languages">
                <div className="badge-container">
                    <div className="badge rds-badge">
                        <img src={`${process.env.PUBLIC_URL}/assets/amazon.png`} alt="badge"/>
                    <span>RDS</span>
                </div>
                    <div className="badge s3-badge">
                    <img src={`${process.env.PUBLIC_URL}/assets/amazon.png`} alt="badge"/>
                    <span>S3</span>
                </div>
                    <div className="badge lambda-badge">
                    <img src={`${process.env.PUBLIC_URL}/assets/amazon.png`} alt="badge"/>
                    <span>Lambda</span>
                </div>
            <div className="badge quicksight-badge"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/amazon.png`} alt="badge"/>
                    <span>QuickSight</span>
                </div>
            </div>
        </section>
    <img src={`${process.env.PUBLIC_URL}/assets/project2.jpg`} alt="Project 1" className="project1"/>
        <div className="button-b">
            <a href="https://docs.google.com/document/d/19SlGq47Lvz6FjakNmUhr8yz57Cz8VCHI/edit?usp=sharing&ouid=115633295017463972231&rtpof=true&sd=true" target="_blank" className="web-button">CRM Project Overview</a>
            </div>
            <section id="project-details">
  <table className="project-table">
    <tbody>
      <tr>
        <td>
          <p className="project-bp">
          Proposed a <span className="highlight2">scalable CRM system</span> for MJ gaming logistics company, <span className="highlight2">leveraging Amazon RDS for database management,</span>Amazon S3 for scalable storage, and AWS Lambda for serverless computing, designed to <span className="highlight2">support up to 500 concurrent users and handle an average of 2,000 daily user interactions.</span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="project-bp">
            Developed a CRM solution in response to the company's need for scalability following a <span className="highlight2">42% increase in sales</span> the previous year. This solution utilized Amazon RDS to handle growing customer data, Amazon S3 for secure and scalable storage, and AWS Lambda to <span className="highlight2">ensure efficient user interactions while supporting future business expansion.</span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="project-bp">
          <span className="highlight2">Addressed communication challenges</span> by recommending the integration of <span className="highlight2">advanced ticketing and calendar systems with MS Exchange,</span> using Amazon QuickSight for advanced reporting, and <span className="highlight2">leveraging APIs</span> to fetch and synchronize information seamlessly.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</section>
<h6 className="project1H"> Countries Around <br />the World</h6>
            <section id="languages">
                <div className="badge-container">
                    <div className="badge angular-badge">
                        <img src={`${process.env.PUBLIC_URL}/assets/Angular.svg`} alt="badge"/>
                    <span>Angular</span>
                </div>
                    <div className="badge node-badge">
                        <img src={`${process.env.PUBLIC_URL}/assets/NODEJS.svg`} alt="badge"/>
                    <span>Node.js</span>
                </div>
                    <div className="badge ts-badge">
                <img src={`${process.env.PUBLIC_URL}/assets/TS.svg`} alt="badge"/>
            <span>TypeScript</span>
        </div>
        <div className="badge js-badge">
                <img src={`${process.env.PUBLIC_URL}/assets/JS.svg`} alt="badge"/>
            <span>JavaScript</span>
        </div>
    </div>
</section>
    <img src={`${process.env.PUBLIC_URL}/assets/project3.gif`} alt="Project 1" className="project1"/>
        <div className="button-b">
            <a href="https://pktaz.github.io/Countries-of-The-World/" target="_blank" className="web-button">View Application</a>
            </div>
            <section id="project-details">
  <table className="project-table">
    <tbody>
      <tr>
        <td>
          <p className="project-bp">
          <span className="highlight2">Developed a robust web application</span> utilizing <span className="highlight2">Angular</span>, <span className="highlight2">JavaScript</span>, and <span className="highlight2">TypeScript</span>, with seamless integration of the <span className="highlight2">World Bank API</span> to provide real-time, data-driven insights on global countries.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="project-bp">
          <span className="highlight2">Designed and implemented an interactive SVG world map</span>, allowing users to hover over countries and access in-depth details, including <span className="highlight2">country name</span>, <span className="highlight2">capital city</span>, <span className="highlight2">coordinates</span>, <span className="highlight2">income levels</span>, and <span className="highlight2">population statistics</span>.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p className="project-bp">
          <span className="highlight2">Enhanced user experience</span> by optimizing <span className="highlight2">data retrieval</span> processes and ensuring smooth <span className="highlight2">hover animations</span>, providing users with immediate and responsive information on any country of interest.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</section>
</div>
);

export default Projects;