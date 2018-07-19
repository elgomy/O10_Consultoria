import { LitElement, html } from '@polymer/lit-element';


// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';



/**
 * `basic-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MapElement extends LitElement {
  _render({prop1}){
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }

     
        
        .map {
          
         width:100%;
        
          -webkit-filter: grayscale(100%);
       -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
         -o-filter: grayscale(100%);
            filter: grayscale(100%);
            display:block;
        
         margin-top:20px;
        
         
        }
           

      </style>

      <div class="google-maps">
       <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7762679172347!2d-43.946053785150056!3d-19.975909144897074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697f80b3f2539%3A0x650d2b79f23b7d46!2sR.+Des.+Jorge+Fontana%2C+428+-+1102+-+Belvedere%2C+Belo+Horizonte+-+MG%2C+30320-670!5e0!3m2!1ses!2sbr!4v1532024489734" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>

      
    `;
  }

}

window.customElements.define('map-element', MapElement);