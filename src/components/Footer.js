import React from 'react';
import gitHub from '../assets/logos/GitHub-Mark-120px-plus.png';
import linkedIn from '../assets/logos/LI-In-Bug.png';
import stackOverflow from '../assets/logos/logo-stackoverflow.png';

export default function Footer() {
  return (
    <div class="row justify-content-evenly">
      <div class="col text-center">
        <a href="https://github.com/tedlopus" class="text-decoration-none"><img class="logo" alt="gitHub logo" src={gitHub}></img></a>
      </div>
      <div class="col text-center">
        <a href="https://www.linkedin.com/in/edward-lopus-510266132/" class="text-decoration-none"><img class="logo" alt="linkedIn logo" src={linkedIn}></img></a>
      </div>
      <div class="col text-center">
        <a href="/Users/edwardlopus/Downloads/Resume-Edward-Lopus-Code.pdf" class="text-decoration-none"><img class="logo" alt="stackOverflow logo" src={stackOverflow}></img></a>
      </div>
    </div>
  );
}
