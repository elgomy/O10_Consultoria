import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import {Button} from "@material/mwc-button"
import {Fab} from "@material/mwc-fab"
import { lineGraph } from './my-icons.js';



/**
 * `basic-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ScrollButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

        }
		
		.button__container{
			display:scroll;
	        position:fixed;
	        bottom:15px;
	        right:15px;
		}

		.mdc-fab{
      		--mdc-theme-secondary:#F38221;
      	}

      </style>
     
      <div class="button__container" hidden$="[[hide]]">

	      <mwc-fab 
	      	  icon="eject"
	          class="mdc-fab"
	          id="button"
	          raised 
	          on-click="scrollUp">
	          up
	       </mwc-fab>
	  </div>
    `;
  }
  static get properties() {
    return {
      hide: {
        type: Boolean,
        value: true,
      },
    };
  }

  constructor() {
    super();
    
   // console.log(document.getElementById('name'))
    window.onscroll = ()=>{     
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      	if(scroll < 300){                 
          this.hideButton()
      	}
      	else{
      	  this.showButton()
      	}
    }
  }

  showButton(){
  	this.hide = false;
  }

  hideButton(){
  	this.hide = true;
  }

  scrollUp(){
    window.scrollTo({ 
      top: 400, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
  }
}

window.customElements.define('scroll-button', ScrollButton);