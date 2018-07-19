import { LitElement, html } from '@polymer/lit-element';
import { scheme, pieChart, organ, lineGraph, dolar } from './my-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';



/**
 * `basic-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GridImages extends LitElement {
  _render({prop1}){
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }

 
        
        
        @media (min-width: 950px) {

          .grid{
            display: grid;
            grid-template-columns: [leftCol] 2fr [rightCol] 2fr;
            grid-template-rows: [1Row] 12rem [2Row] 12rem;
            grid-row-gap:10px;
            
          }
          .image__topleft{
            grid-column: leftCol;
            grid-row: 1Row;
          }

          .image__topright{
            grid-column: rightCol;
            grid-row: 1Row;
          }

          .image__bottomleft{
            grid-column: leftCol;
            grid-row: 2Row;
          }

          .image__bottomright{
            grid-column: rightCol;
            grid-row: 2Row;
          }


}

      </style>

      <div class="grid">   
             
        
        <div class="image__topleft, image">   
           <img src="images/parceiros.jpg"> 
            
        </div>

        <div class="image__topright, image">   
           <img src="images/valor.jpg">  
        </div>
        
  
    

        <div class="image__bottomleft, image">   
          <img src="images/hands-on.jpg">
        </div>



        <div class="image__bottomright, image">   
           <img src="images/equipe.jpg">
        </div>

       
           
      
       
     </div>
    `;
  }

}

window.customElements.define('grid-images', GridImages);