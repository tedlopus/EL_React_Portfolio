import React from "react";

export default function Portfolio() {
  return (
    <div class="container-fluid">
      <h1>My Portfolio</h1>
      <div class="row justify-content-evenly gx-3">
        <div class="col-lg-2" id="Work">
          <h3>Work</h3>
        </div>
        <div class="col" id="portfolio">
          <div class="row row-cols-2 justify-content-evenly mx-auto gx-5 gy-5">
            <div class="card w-25" id="firstProject">
              <img
                src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139__340.jpg"
                alt="assignment1"
              />
              <h4>Coin vs. Coin</h4>
              <a
                href="https://jakeawsd.github.io/Project-1/"
                class="text-decoration-none"
              >
                Github
              </a>
            </div>
          </div>
          <div class="card w-25" id="firstAssignment">
            <img
              src="http://clikcloud.com/wp-content/uploads/2015/06/data-breach.jpg"
              alt="assignment1"
            />
            <div>
              <h4>Password Generator</h4>
              <a
                href="https://tedlopus.github.io/Password_Generator/"
                class="text-decoration-none"
              >
                Github
              </a>
            </div>
          </div>
          <div class="card w-25" id="secondAssignment">
            <img
              src="https://media.istockphoto.com/photos/weather-forecast-picture-id477110708?b=1&k=20&m=477110708&s=170667a&w=0&h=RFXa1v6UAFt5kObR1fGY0yi33ouNmobCYNJlXH6vr6I="
              alt="assignment2"
            />
            <div>
              <h4>Weather Dashboard</h4>
              <a
                href="https://tedlopus.github.io/Weather_Dashboard_EL-/"
                class="text-decoration-none"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
