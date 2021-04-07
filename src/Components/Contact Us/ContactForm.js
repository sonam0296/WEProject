import React from 'react';

const ContactForm = () =>{
    return(
        <>
            <div className="left-contact"></div>

        <div className="container" style={{marginTop:"50px"}}>
  <div className="row">
    <div className="col-sm text-center">
      {/* <h1 className="div-heading display-4">Contact US</h1> */}
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
    <h2>Contact <strong>Form</strong></h2>

      <form>
        <div className="form-group" >
          <input type="name" className="form-control" id="exampleInputName" placeholder="Your Full Name..." />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..." />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Phone Number..." />
        </div>
        {/* <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1" placeholder="Select Services...">
            <option>Corporate</option>
            <option>Wedding</option>
            <option>Pickup</option>
          </select>
        </div> */}
        <div className="form-group">
          <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block button grow">Submit</button>
      </form>
    </div>
    <div className="col-md-6">
        <h2>Contact <strong>Address</strong></h2>
      <h5>Address: <small className="text-muted">4th Floor, Sadbhav Drive-in Exit Road, Thaltej,Ahmedabad-380 054 Gujarat, India.</small></h5>
      <h5>Email: <small className="text-muted">contact@webtech-evolution.com</small></h5>
      <h5>Contact: <small className="text-muted">+91-79-4800 2283 | +91-960 196 5456</small></h5>
      {/* <p><iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtcNatvRsrjsRA38LEBPt_78&key=..." allowfullscreen></iframe></p> */}
      <br/>
      <div className="text-left">
      <h2 style={{}}>Our <strong>Location</strong> </h2>
        {/* <img className="img-fluid contact-image" alt="Responsive image" src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg" /> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3792532563475!2d72.52730611434485!3d23.046553521216097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84afd4f2af25%3A0xef78750ce486e05!2sSadbhav%20Complex%2C%20Drive%20In%20Rd%2C%20Nilmani%20Society%2C%20Memnagar%2C%20Ahmedabad%2C%20Gujarat%20380059!5e0!3m2!1sen!2sin!4v1617805803165!5m2!1sen!2sin" width="500" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default ContactForm