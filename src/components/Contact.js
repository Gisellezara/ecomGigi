import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="ctr">
        <form action="process.php" method="post">
          <h3>
            <i>Contact Us</i>
          </h3>
          <input type="text" name="firstname" placeholder="Full Name" />
          <br />
          <input type="number" name="Phone Number" placeholder="Phone Number" />
          <br />
          <input type="email" name="Email" placeholder="Email" />
          <br />
          <input type="text" name="Comment" placeholder="Comment" />
          <br />
          <input type="Submit" value="Submit" />
          <h4>
            <i> Hope to hear from you!</i>
          </h4>
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
  
};


export default Contact;
