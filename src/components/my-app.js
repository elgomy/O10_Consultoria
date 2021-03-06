/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-scroll-effects/effects/parallax-background.js';
import '@polymer/app-layout/app-scroll-effects/effects/blend-background.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import './snack-bar.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import  './scroll-button.js';


class MyApp extends LitElement {
  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline}) {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #E91E63;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: white;
        --app-header-text-color: #F38221;
        --app-header-selected-color: #ff3d00;

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #F38221;
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee;
        z-index:2;

        --app-header-background-front-layer: {
              background-image: url(images/triangles.png);
              background-position: 50% 10%;
          };
        --app-header-background-rear-layer: {
              /* The header is blue when condensed */
               background-color: orange;
          };
      }

      .toolbar-top {
        background-color: var(--app-header-background-color);
        height: 110px;
      }

      [main-title] {
        
        text-transform: uppercase;
      
        font-size: .9rem;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        font-weight:bold;
        margin-top:7px;
        padding-right:30px;
        
        @apply --layout-vertical;

      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
        font-size: .8rem;
        font-weight: bold;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      /* Workaround for IE11 displaying <main> as inline */
      main {
        display: block;
      }

      .main-content {
        padding-top: 64px;
        min-height: 100vh;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      footer {
        padding: 24px;
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);
        
      }

      app-drawer{
        z-index: 3;
      }

      .title {         
        margin-top:90px;
        margin-left:0;
        text-align: left; 
      } 

      .title span { 
        text-transform:uppercase;
        color: white; 
        font: bold 24px/45px Helvetica, Sans-Serif; 
        letter-spacing: -1px;  
        background: rgb(0, 0, 0); /* fallback color */
        background: rgba(0, 0, 0, 1);
        padding: 10px; 
      }

      /* Wide layout: when the viewport width is bigger than 950px, layout
      changes to a wide layout. */
      @media (min-width: 950px) {
        .toolbar-list {
          display: block;
        }

        .toolbar-list > a:hover{
          color:#ff3d00;
        }

        .menu-btn {
          display: none;
        }

        .main-content {
          padding-top: 70px;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
          margin-left: 0px;              
        }    
      
      }
    </style>

    <!-- Header -->

  <app-header-layout>

    <app-header style="height: 350px;" effects="blend-background" condenses shadow slot="header">

      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" on-click="${_ => this._updateDrawerState(true)}">${menuIcon}</button>

        <div main-title>
          <div>
            <img src="images/logo2.jpg">
          </div>
          <span>serviços e consultoria</span>

        </div>

        <nav class="toolbar-list">
        <a selected?="${_page === 'a empresa'}" href="/a empresa">A EMPRESA</a>
        <a selected?="${_page === 'especialidades'}" href="/especialidades">ESPECIALIDADES</a>
        <a selected?="${_page === 'diferenciais'}" href="/diferenciais">DIFERENCIAIS</a>
        <a selected?="${_page === 'contato'}" href="/contato">CONTATO</a> 
      </nav> 
      </app-toolbar>

         <div class="title"><span>${_page}</span></div>
      
    </app-header>
               

  </app-header-layout>

    <!-- Drawer content -->
    <app-drawer no-focus-trap opened="${_drawerOpened}"
        on-opened-changed="${e => this._updateDrawerState(e.target.opened)}">
      <nav class="drawer-list">
        <a selected?="${_page === 'a empresa'}" href="/a empresa">A EMPRESA</a>
        <a selected?="${_page === 'especialidades'}" href="/especialidades">ESPECIALIDADES</a>
        <a selected?="${_page === 'diferenciais'}" href="/diferenciais">DIFERENCIAIS</a>
        <a selected?="${_page === 'contato'}" href="/contato">CONTATO</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main role="main" class="main-content">
      <my-view1 class="page" active?="${_page === 'a empresa'}"></my-view1>
      <my-view2 class="page" active?="${_page === 'especialidades'}"></my-view2>
      <my-view3 class="page" active?="${_page === 'diferenciais'}"></my-view3>
      <my-view5 class="page" active?="${_page === 'contato'}"></my-view5>
      <my-view404 class="page" active?="${_page === 'view404'}"></my-view404>
    </main>

    <footer>
      <p>
         Nosso Endereço:<br>
         Rua Desembargador Jorge Fontana, 428<br>
         Edifício Belvedere Tower II - 11º Andar - Sala 1102 - Belvedere<br>
         Belo Horizonte - 30320 670<br>
         Minas Gerais | Brasil<br>
         tlf: +55 31 3653 8089<br>
         E-mail:<br>
         copyright
      </p>
      
    </footer>

    <scroll-button></scroll-button>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    this._drawerOpened = false;
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location) => this._locationChanged(location));
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 950px)`,
        (matches) => this._layoutChanged(matches));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _layoutChanged(isWideLayout) {
    // The drawer doesn't make sense in a wide layout, so if it's opened, close it.
    this._updateDrawerState(false);
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

    clearTimeout(this.__snackbarTimer);
    this._snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this._snackbarOpened = false }, 3000);
  }

  _locationChanged() {
    const path = window.decodeURIComponent(window.location.pathname);
    const page = path === '/' ? 'a empresa' : path.slice(1);
    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.

    // Close the drawer - in case the *path* change came from a link in the drawer.
    this._updateDrawerState(false);
  }

  _updateDrawerState(opened) {
    if (opened !== this._drawerOpened) {
      this._drawerOpened = opened;
    }
  }

  _loadPage(page) {
    switch(page) {
      case 'a empresa':
        import('../components/my-view1.js').then((module) => {
          // Put code in here that you want to run every time when
          // navigating to view1 after my-view1.js is loaded.
        });
        break;
      case 'especialidades':
        import('../components/my-view2.js');
        break;
      case 'diferenciais':
        import('../components/my-view3.js');
        break;
      case 'contato':
        import('../components/my-view5.js');
        break;
      default:
        page = 'view404';
        import('../components/my-view404.js');
    }

    this._page = page;
  }
}

window.customElements.define('my-app', MyApp);
