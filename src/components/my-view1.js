/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

import  './section-image.js';
import  './grid-section.js';

import  './scroll-button.js';

import {Button} from "@material/mwc-button"
import '@polymer/iron-flex-layout/iron-flex-layout.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        .image-bg {
            position: relative;
            height: 500px;
            overflow: hidden;
        }

        div p {
            white-space: nowrap;
            font-size: 30px;
            color:white;
            display: block;
            position: absolute;           
            top: 30%;
            left: 25%;
            padding: 5px;
            width: 100%;
        }

        section h2:after{
            display: block;
            width: 60px;
            height: 5px;
            content: ' ';
            background: #F38221;
            margin: 20px 0;
        }

        .contact-section{
          @apply --layout-horizontal;
          background: rgb(2,0,36);
          background: -webkit-linear-gradient(left, rgba(2,0,36,1) 0%, rgba(230,114,30,1) 0%, rgba(231,87,28,1) 50%, rgba(207,157,55,1) 100%, rgba(199,181,65,1) 100%, rgba(255,0,86,1) 100%, rgba(113,121,9,1) 100%);
          background: -o-linear-gradient(left, rgba(2,0,36,1) 0%, rgba(230,114,30,1) 0%, rgba(231,87,28,1) 50%, rgba(207,157,55,1) 100%, rgba(199,181,65,1) 100%, rgba(255,0,86,1) 100%, rgba(113,121,9,1) 100%);
          background: linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(230,114,30,1) 0%, rgba(231,87,28,1) 50%, rgba(207,157,55,1) 100%, rgba(199,181,65,1) 100%, rgba(255,0,86,1) 100%, rgba(113,121,9,1) 100%);
        }

        .contact-button{
          
        }

        .scroll-button{
          
        }

         .light {
      --mdc-theme-on-primary: white;
      --mdc-theme-primary: black;
      border:1px solid white;      
      }

      .light:hover{
         --mdc-theme-on-primary: #F38221;
      --mdc-theme-primary: white;
      border:1px solid black;
      }
      </style>
      <!--
      <div>
        <section-image class="image-bg" center alt="Home" src="images/montana-test.jpg" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAAI0lEQVR4AWPw2v7Wfe1Dj7X3/Pd8YPDf+Uqva79x38GQvW8Bu0sOexptskUAAAAASUVORK5CYII="></section-image>
        <p>GESTAO é fazer certas as coisas<br>
          LIDERANÇA é fazer as coisas certas</p>
      </div> -->
        

       
      <section>
        <h2>Sobre Nós</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla,</p>
      </section>
       <section>
        <grid-section></grid-section>
      </section>
      <section class="contact-section">
        <mwc-button raised class="light">ENTRE EM CONTATO</mwc-button>
      </section>
   
      <scroll-button></scroll-button>

    `;

  }

}

window.customElements.define('my-view1', MyView1);
