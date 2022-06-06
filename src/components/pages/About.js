import React from 'react';

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly gx-3">
        <div className="col-lg-2" id="about">
          <h3>About Me </h3>
        </div>
        <div className="col" id="greeting">
          <p>
            Hello! My name is Edward Lopus and I am an aspiring coder. I
            graduated from Florida State University with a B.S. in Statistics
            and a minor in Business. During my time at Florida State I utilized
            different programs such as Python, SQL, SAS, and R. I have always
            had a great liking for coding but I knew that I wanted to use code
            as a primary skill and not a secondary skill. I enrolled in the
            University of Denver Fullstack Web Developer in hope of taking my
            coding skills to the next level. Here you will be able to see all of
            my work that I have completed as well as my contact information if
            you think my skills can be of use to you! Please look through my
            portfolio and let me know what you think!
          </p>
        </div>
      </div>
    </div>
  );
}
