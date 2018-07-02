import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `basic-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GridSection extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell">hola</div>
    <div class="mdc-layout-grid__cell">caracola</div>
    <div class="mdc-layout-grid__cell">melon</div>
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