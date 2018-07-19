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
class ContactForm3 extends LitElement {
  _render({prop1}){
    return html`
      ${SharedStyles}
      <style>
        .form-basic{
            
            max-width: 640px;
            margin: 0 auto;
            padding: 55px;
            box-sizing: border-box;
            text-align: center;
        }

        .form-basic .form-row{
            text-align: left;
            margin-bottom: 22px;
        }

        .form-basic .form-title-row{
            text-align: center;
            margin-bottom: 55px;
        }

        /* The form title */

        .form-basic h1{
            display: inline-block;
            box-sizing: border-box;
            color:  #4c565e;
            font-size: 24px;
            padding: 0 10px 15px;
            border-bottom: 2px solid #6caee0;
            margin: 0;
        }

        .form-basic .form-row > label span{
            display: inline-block;
            box-sizing: border-box;
            color: #5F5F5F;
            width: 180px;
            text-align: right;
            vertical-align: top;
            padding: 12px 25px;
        }

        .form-basic input{
            color:  #5f5f5f;
            box-sizing: border-box;
            width: 250px;
            box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
            padding: 12px;
            border: 1px solid #dbdbdb;
        }

        .form-basic textarea{
            color:  #5f5f5f;
            box-sizing: border-box;
            width: 250px;
            height: 150px;
            box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
            font: normal 13px sans-serif;
            padding: 12px;
            border: 1px solid #dbdbdb;
            resize: vertical;
        }

        .form-basic .form-radio-buttons{
            display: inline-block;
            vertical-align: top;
        }

        .form-basic .form-radio-buttons > div{
            margin-top: 10px;
        }

        .form-basic .form-radio-buttons label span{
            margin-left: 8px;
            color: #5f5f5f;
            font-weight: normal;
        }

        .form-basic .form-radio-buttons input{
            width: auto;
        }

        .form-basic button{
            display: block;
            border-radius: 2px;
            background-color:  #F38221;
            color: #ffffff;
            font-weight: bold;
            box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
            padding: 14px 22px;
            border: 0;
            margin: 40px 183px 0;
        }

        /*  Making the form responsive. Remove this media query
            if you don't need the form to work on mobile devices. */

        @media (max-width: 600px) {

            .form-basic{
                padding: 20px;
                max-width: 550px;
            }

            .form-basic .form-row{
                max-width: 450px;
                margin: 8px auto;
                text-align: left;
            }

            .form-basic .form-title-row{
                margin-bottom: 5px;
            }

            .form-basic .form-row > label span{
                display: block;
                text-align: left;
                padding: 0 0 3px;
            }

            .form-basic button{
                margin: 0;
            }

        }


      </style>

      <div class="main-content">

        <form class="form-basic" method="post" action="#">       

            <div class="form-row">
                <label>
                    <span>Nome</span>
                    <input type="text" name="name">
                </label>
            </div>

            <div class="form-row">
                <label>
                    <span>Email</span>
                    <input type="email" name="email">
                </label>
            </div>

            <div class="form-row">
                <label>
                    <span>Assunto</span>
                    <input type="text" name="assunto">
                </label>
            </div>

            <div class="form-row">
                <label>
                    <span>Mensagem</span>
                    <textarea name="textarea"></textarea>
                </label>
            </div>
            
            <div class="form-row">

                <button type="submit">ENVIAR</button>
            </div>

        </form>

    </div>
       
    `;
  }

}

window.customElements.define('contact-form3', ContactForm3);