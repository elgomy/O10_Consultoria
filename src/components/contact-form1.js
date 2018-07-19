import { LitElement, html } from '@polymer/lit-element';
import { scheme, pieChart, organ, lineGraph, dolar } from './my-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import {MDCTextField} from '@material/textfield';


/**
 * `basic-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ContactForm1 extends LitElement {
  _render({prop1}){
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }  

*, *:after, *:before {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-family: arial;
    }
.form-row {
  margin-bottom: 20px;
  padding: 4px 0;
  position: relative; }
.form-block {
  border: 1px solid #cccccc;
  margin-bottom: 8px;
  padding: 8px 12px; }

.input-text {
  background-color: white;
  -webkit-appearance: none;
  border: 1px solid #cccccc;
  font-family: Arial;
  margin-bottom: 8px;
  padding: 10px 5px;
  position: relative;
  width: 100%;
  z-index: 3; }
  .input-text:focus {
    box-shadow: 0 0 6px rgba(0, 200, 222, 0.25);
    background-color: #fafafa; }

.label-helper {
  position: absolute;
  opacity: 0;
  transition: .2s bottom, .2s opacity;
  bottom: 0;
  left: 0;
  z-index: 1; }

.input-text:focus + .label-helper, .input-text:invalid + .label-helper {
  bottom: 95%;
  font-family: arial;
  font-size: 14px;
  line-height: 1;
  opacity: 1;
  padding: 4px; }


.input-text:invalid {
  border-left: 10px solid #f00; }
  .input-text:invalid + .label-helper::after {
    color: #f00;
    content: "X";
    font-family: arial;
    font-size: 14px;
    line-height: 1;
    padding-left: 12px; }

.p {
  text-align: center;
  padding-top: 50px;
}

.page-wrap {
  max-width: 600px;
  background: white;
  padding: 20px 50px 20px 50px;
  margin: 20px auto;
  min-height: 500px;
  height: auto !important;
  height: 500px;
}

      </style>

        <div class="page-wrap">

   


    <main class="main-base" role="main">
      <form class="content">
      <div class="form-row">
        <input type="text" class="input-text" id="input" placeholder="Nome" />
        <label class="label-helper" for="input">Nome</label>
      </div>

      <div class="form-row" >
        <input type="email" class="input-text" id="input2" placeholder="Email" />
        <label class="label-helper" for="input2">Email</label>
      </div>

      <div class="form-row" >
         <textarea class="input-text" 
        name="Message" rows="20" cols="20" id="input3"></textarea>
        <label class="label-helper" for="input3">Your Password</label>
      </div>
      </form> <!-- end .content -->
    </main>

  </div> 
       
    `;
  }

}

window.customElements.define('contact-form1', ContactForm1);