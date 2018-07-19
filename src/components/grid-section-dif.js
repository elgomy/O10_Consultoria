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
class GridSectionDif extends LitElement {
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
            grid-template-rows: [1Row] 12rem [2Row] 12rem [3Row] 12rem [4Row] 12rem [5Row] 12rem;
            grid-row-gap:25px;
            grid-column-gap:40px;
            
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

        img{
          max-width:100%;
          height:auto;
        }

      
      }

      </style>

      <div class="grid">   
        
       
        <div class="title__first, card-title">         
            <h3>Parceiros</h3>
            <p>Buscamos conexão Nacional e Internacional. Somos operadores do mercado em busca das melhores oportunidades. 
</p>
        </div>

        
        
        <div class="article__first, text">   
           <img src="images/parceiros.jpg">    
        </div>
        

        

        <div class="title__second">
          <h3>Geração de Valor</h3>  
          <p>Buscar melhores resultados, buscar mais, buscar a satisfação plena é o pensamento vitorioso embutido em nossos trabalhos e decisões.  
</p>
        </div>

        <div class="article__second, text">   
           <img src="images/valor.jpg">  
        </div>
        
  
        <div class="title__third">
          <h3>Hands-On</h3>  
          <p>Pronta disposição, interesse e pró atividade, somos nós que fazemos e entregamos o trabalho. 
</p>
        </div>

        <div class="article__third, text">   
          <img src="images/hands-on.jpg">
        </div>

        <div class="title__fourth">
          <h3>Equipe e Experiência</h3> 
          <p>Equipe experiente com amplo conhecimento operacional, trabalhando baseada em princípios técnicos, éticos e morais.
</p> 
        </div>

        <div class="article__fourth, text">   
           <img src="images/equipe.jpg">
        </div>

       
           
      
       
     </div>
    `;
  }

}

window.customElements.define('grid-section-dif', GridSectionDif);