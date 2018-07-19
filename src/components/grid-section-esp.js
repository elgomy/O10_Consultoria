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
class GridSectionEsp extends LitElement {
  _render({prop1}){
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }

        h3{
          vertical-align: text-top;
        }

        h3:after{
            display: block;
            width: 40px;
            height: 4px;
            content: ' ';
            background: #F38221;
            margin: 20px 0;
        }
        
        
        @media (min-width: 950px) {

          .grid{
            display: grid;
            grid-template-columns: [leftCol] 2fr [rightCol] 2fr;
            grid-template-rows: [1Row] 12rem [2Row] 12rem [3Row] 12rem [4Row] 12rem;
            
          }
          .title__first{
            grid-column: leftCol;
            grid-row: 1Row;
          }

          .article__first{
            grid-column: rightCol;
            grid-row: 1Row;
          }

          .title__second{
            grid-column: leftCol;
            grid-row: 2Row;
          }

          .article__second{
            grid-column: rightCol;
            grid-row: 2Row;
          }

          .title__third{
            grid-column: leftCol;
            grid-row: 3Row;
          }

          .article__third{
            grid-column: rightCol;
            grid-row: 3Row;
          }

          .title__fourth{
            grid-column: leftCol;
            grid-row: 4Row;
          }

          .article__fourth{
            grid-column: rightCol;
            grid-row: 4Row;
          }

     

        }

        .text{
          @apply(--layout-horizontal);
          @apply(--layout-center);
        }

       

      </style>

      <div class="grid">   

        <div class="title__first, card-title"> 
         
            <h3>Gestão e Assessoria Financeira</h3>

        </div>

        <div class="article__first, text">   
           <p>Possuimos longa experiência na Área Financeira como profissionais de mercado. Somos independentes e, 
           como perfeitos conhecedores das expectativas envolvidas, oferecemos a solução mais adequada para cada necessidade. 
          </p>     
        </div>

        <div class="title__second">
          <h3>Alianças Estratégicas</h3>  
        </div>

        <div class="article__second, text">   
           <p>Somos conectados com especialistas técnicos e com o mercado financeiro nacional e internacional, permitindo a abertura de novas frentes de negócio junto aos clientes. 
           </p>
        </div>

        <div class="title__third">
          <h3>Captação de Recursos, Gestão de Caixa e Adequação de Passivo </h3>  
        </div>

        <div class="article__third, text">   
          <p>Atuamos na captação de recursos junto a Instituições Nacionais e Internacionais, além de Fundos de Investimento. Cada trabalho é único e individualizado, de acordo com a necessidade do cliente.
          </p>     
        </div>

        <div class="title__fourth">
          <h3>Planejamento, Aquisição, Fusão e Venda de Empresas</h3>  
        </div>

        <div class="article__fourth, text">   
           <p>Assessoria em decisões estratégicas no tocante a aquisições, fusões, reestruturações societárias, venda total ou parcial de Empresas. 
          </p>     
        </div>

       
           
      
       
     </div>
    `;
  }

}

window.customElements.define('grid-section-esp', GridSectionEsp);