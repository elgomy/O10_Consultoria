import { LitElement, html } from '@polymer/lit-element';
import { scheme, pieChart, organ, lineGraph, dolar } from './my-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


import {Formfield} from "@material/mwc-formfield";


/**
 * `basic-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ContactForm extends LitElement {
  _render({prop1}){
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }  

        * {
  margin: 0;
  padding: 0;
}



p {
  font-size: .7em;
  margin-bottom: 15px;
}

#page-wrap {
  width: 660px;
  background: white;
  padding: 20px 50px 20px 50px;
  margin: 20px auto;
  min-height: 500px;
  height: auto !important;
  height: 500px;
}

#contact-area {
  width: 600px;
  margin-top: 25px;
}

#contact-area input, #contact-area textarea {
  padding: 5px;
  width: 471px;
  font-family: Helvetica, sans-serif;
  font-size: 1em;
  margin: 0px 0px 10px 0px;
  border: 2px solid #ccc;
}

#contact-area textarea {
  height: 90px;
}



#contact-area input.submit-button {
  width: 100px;
  float: right;
}



form{
  max-width: 450px
}

form > div{
  position:relative
}

form > div > label{
      opacity: 0.3;
      position: absolute;
      top: 5px;
      left: 20px;
}


#contact-area input:focus{
  color:red
}


      </style>

      

        <div id="contact-area">
      
      <form method="post" action="contactengine.php">

        <div>
          <label for="Name">Nome:</label>
          <input type="text" name="Name" id="Name" required />
        </div>
        
        <div>
          <label for="Email">Email:</label>
          <input type="email" name="Email" id="Email" />
        </div>

        <div>
          <label for="City">Assunto:</label>
          <input type="text" name="City" id="City" />
        </div>
        
        <div>
          <label for="Message">Mensagem:</label><br />
          <textarea name="Message" rows="20" cols="20" id="Message"></textarea>
        </div>

        <input type="submit" name="submit" value="Enviar" class="submit-button" />
      </form>
      
      <div style="clear: both;"></div>
      
     
    
    </div>
       
    `;
  }

}

window.customElements.define('contact-form', ContactForm);