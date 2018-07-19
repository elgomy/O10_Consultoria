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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


import  './contact-form3.js';
import  './map-element.js';

class MyView5 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>

      @media (min-width: 950px) {
         .contact-section{
          display:grid;
          grid-template-columns: [leftCol] 2fr [rightCol] 2fr;
        }
      }

      map-element{
        
        width:100%;
        
       
      }
      </style>

      <section>
        <h2>Entre em contato</h2>
        <p>

        Estaremos encantados de discutir sobre a situaçao da sua organizaçao, e onde podemos agregar valor.</br>
        Por favor, entre em contato conosco via os detalhes abaixo, ou envie sua solicitaçao:</br></br>
        
        Email: xxxx@o10consultoria.com.br </br>
        Tlf: +55 31 3653 8089 </br>
        LinkedIn: Connect Here </br>
        Endereço: Rua Desembargador Jorge Fontana, 428,- 11º Andar - Sala 1102 - Belvedere<br>
         Belo Horizonte - 30320 670<br>
         Minas Gerais | Brasil<br>
        </p>
      </section>

      <section class="contact-section">
        <contact-form3></contact-form3>
        <map-element></map-element>
      </section>

      

    `
  }
}

window.customElements.define('my-view5', MyView5);
