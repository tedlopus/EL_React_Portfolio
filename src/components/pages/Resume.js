import React from "react";

export default function Resume() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-evenly gx-3">
        <div class="col-lg-2" id="about">
          <h3>Resume </h3>
        </div>
        <div class="col" id="greeting">
          <div class="col text-center">
            <a
              href="/Users/edwardlopus/Downloads/Resume-Edward-Lopus-Code.pdf" class="text-decoration-none"
            > {" "} Resume{" "} </a>
          </div>
          <div>
            <h3>Front-End Proficencies</h3>
            <ul class="list-group">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">Javascript</li>
              <li class="list-group-item">Bootstrap</li>
              <li class="list-group-item">React</li>
              <li class="list-group-item">Responsive Design</li>
              <li class="list-group-item">jQuery</li>
            </ul>
          </div>
          <div>
          <h3>Back-End Proficencies</h3>
          <ul class="list-group">
            <li class="list-group-item">APIs</li>            
            <li class="list-group-item">MongoDB</li>
            <li class="list-group-item">Express</li>
            <li class="list-group-item">Node</li>
            <li class="list-group-item">REST</li>
            <li class="list-group-item">MySQL, Sequelize</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
