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
class GridSection extends LitElement {
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
            grid-template-rows: [topRow] 12rem [botRow] 12rem;
            
          }
          .top-left__section{
            grid-column: leftCol;
            grid-row: topRow;
          }

          .top_right__section{
            grid-column: rightCol;
            grid-row: topRow;
          }

          .bottom-left__section{
            grid-column: leftCol;
            grid-row: botRow;
          }

          .bottom-right__section{
            grid-column: rightCol;
            grid-row: botRow;
          }
        }

        .card-title{
          
          @apply --layout-horizontal;
        }

       

      </style>

      <div class="grid">      
        <div class="top-left__section, card">  
          <div class="card-title">     
            ${lineGraph}<h4>Assessoria Financeira</h4>
          </div> 
           <p>Experiência na área financeira como profissionais de mercado e independência total.</p> 

        </div>

        <div class="top_right__section, card">
          <div class="card-title"> 
            ${organ}<h4>M&A</h4>
          
          </div>
           <p>Aquisições, fusões, reestruturações societárias, venda total ou parcial de empresas. 
           </p>
         
        </div>
        <div class="bottom-left__section, card">
          <div class="card-title"> 
            ${scheme}<h4>Alianças Estratégicas</h4>
       
          </div>
           <p>Conectados com especialistas técnicos e com o mercado financeiro nacional e internacional.
           </p>
         
        </div>
        <div class="bottom-right__section, card">
          <div class="card-title"> 
            ${dolar}<h4>Captação de Recursos</h4>
         
          </div>
           <p>Junto a Instituições Nacionais e Internacionais, além de Fundos de Investimento.
           </p> 
         
        </div>
     </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'grid-section',
      },
    };
  }
}

window.customElements.define('grid-section', GridSection);