import '../styles/Contact.css';

const Contact = () => {
    return (
  <div>
    <h1 className="contactHeader">Contact Me</h1>
  <div id="contact" className="card2">
  <div className="card-content2">
    <div className="profile-section2">
      <img src={`${process.env.PUBLIC_URL}/assets/GitHub.png`} alt="GitHub" className="profile-image2" />
      <a href="https://github.com/PkTaz" class="profile-link2" target="_blank">
        @PkTaz
      </a>
      <div className="bar2">
        <div className="emptybar2"></div>
        <div className="filledbar2"></div>
      </div>
</div>
    <div class="profile-section2">
      <img src={`${process.env.PUBLIC_URL}/assets/LinkedIn.png`} alt="LinkedIn" className="profile-image2" />
      <a href="https://www.linkedin.com/in/william-chapman-80944b254/" className="profile-link2" target="_blank">
        @William-Chapman
      </a>
    </div>
    <div class="profile-section2">
      <img src={`${process.env.PUBLIC_URL}/assets/Email.png`} alt="Email Me" className="profile-image2" />
      <a href="mailto:chapmanw811@gmail.com" className="profile-link2" target="_blank">
      chapmanw811@gmail.com
      </a>
    </div>
  </div>
  <div className='contact-letters-container'>
  <div>C</div>
  <div>O</div>
  <div>N</div>
  <div>T</div>
  <div>A</div>
  <div>C</div>
  <div>T</div>
</div>
</div>
</div>
    );
};

export default Contact;