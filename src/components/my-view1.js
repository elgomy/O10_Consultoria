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
        }


        .light {
          --mdc-theme-on-primary: white;
          --mdc-theme-primary: #F38221;
          border:1px solid white;      
        }

        .light:hover{
          --mdc-theme-on-primary: black;
          --mdc-theme-primary: black;
          border:1px solid black;
        }

        mwc-button > a{
          text-decoration:none;
          color:white;
          font-weight:bold;
        }

        mwc-button > a:hover{
          text-decoration:none;
          color:#F38221;
          font-weight:bold;
        }

        p > span{
          font-weight:bold;
        }

      </style>
       
      <section>
        <h2>Sobre Nós</h2>
        <p>Fundada em 2008 e sediada em Belo Horizonte, somos a O10 Serviços e Consultoria, empresa que possui atuação em assessoria financeira para fusões, 
        aquisições e captação de recursos de terceiros, apoiando <span>Pessoas</span> a expandir os seus negócios e <span>Empresas</span> a se consolidarem mercado. 
        </p>
      </section>

      <section>
        <grid-section></grid-section>
      </section>

      <section class="contact-section">
        <mwc-button raised class="light"><a href="/contato">ENTRE EM CONTATO</a></mwc-button>
      </section>     

    `;

  }

}

window.customElements.define('my-view1', MyView1);
