import {
  LitElement,
  html,
  css
} from 'lit-element';
import 'fa-icons';

/**
 * `data-card`
 * DataCard
 *
 * @customElement
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class DataCard extends LitElement {
  static get is() {
    return 'data-card';
  }

  static get properties() {
    return {
      group: {
        type: String,
        attribute: 'group'
      },
      title: {
        type: String,
        attribute: 'title'
      },
      description: {
        type: String,
        attribute: 'desc'
      },
      url: {
        type: String,
        attribute: 'url'
      },
      icon: {
        type: String,
        attribute: 'icon'
      },
      newtab: {
        type: Boolean,
        attribute: 'newtab'
      },
      moreinfo: {
        type: String,
        attribute: 'more-info'
      },
      pathprefix: {
        type: String,
        attribute: 'path-prefix'
      }
    };
  }

  constructor() {
    super();
    this.group = '';
    this.title = 'Titulo de la tarjeta';
    this.description = 'Descripción de la tarjeta';
    this.url = '#';
    this.icon = 'fas fa-cat';
    this.newtab = false;
    this.moreinfoContent = '';
    this.moreinfoPosition = {top: '-500px', left: '-3.5rem'};
    this.pathprefix = '../node_modules';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return css `
      :host {
        --card-width: 210px;
        --card-height: 16rem;
        --card-background-color: #ffffff;
        --card-border: #ff7900 solid 5px;
        --card-margin: 1.5rem 0.7rem;
        --card-padding: 1.5rem 0;
        --card-title-padding-bottom: 0.75rem;
        --card-title-size: 24px;
        --card-title-color: #212121;
        --card-description-size: 16px;
        --card-description-color: #575756;
        --card-icon-size: 5.5rem;
        --card-icon-color: #FF7900;
        font-family: "Open Sans", sans-serif;
        display: block;
      }
      .directory__wrapper--card {
        width: var(--card-width);
        height: var(--card-height);
        border: var(--card-border);
        background-color: var(--card-background-color);
        margin: var(--card-margin, 1.5rem 0.7rem);
        padding: var(--card-padding);
        text-align: center;
        border-radius: 1rem;
      }

      .main__directory--link {
        text-decoration: none;
      }

      .card__wrapper {
        width: 150px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .card__icon {
        font-size: var(--card-icon-size);
        padding: 0 0 1rem;
        color: var(--card-icon-color);
      }

      .card__title {
        color: var(--card-title-color);
        padding-bottom: var(--card-title-padding-bottom);
        font-size: var(--card-title-size);
        margin-block-start: 0;
        margin-block-end: 0.5em;
      }

      .card__description {
        font-size: var(--card-description-size);
        color: var(--card-description-color);
        margin-block-start: 0;
        margin-block-end: 0.5em;
      }

      .card__info {
        display: block;
        padding: 0.8rem 0.8rem 0 0.8rem;
        color: #ff7900;
        text-decoration:none;
      }

      .card__more-info {
        width: 20rem;
        max-width: 30rem;
        visibility:hidden;
        opacity: 1;
        height: auto;
        background-color: #ff9433;
        padding: 1.2rem;
        line-height: 1.3;
        text-align: left;
        border-radius: 1rem;
        color: #575756;
        position: relative;
        z-index: 99;
        line-height: 1.3;
      }

      .card__info {
        display: block;
        padding: 0.8rem 0.8rem 0 0.8rem;
        color: #ff7900;
      }

      .bold-text {
        font-weight: bold;
        color: #fff;
      }
    `;
  }

  masinfo() {
    if (this.moreinfo && this.moreinfoContent === '') {
      fetch(this.moreinfo)
        .then(response => response.text())
        .then(content => {
          this.moreinfoContent = content;
          this.shadowRoot.querySelector('.card__more-info').innerHTML = this.moreinfoContent;
        });
    }
    let el = this.shadowRoot.querySelector('.card__more-info');
    el.style.visibility = 'visible';
    el.style.top = this.moreinfoPosition.top;
    el.style.left = this.moreinfoPosition.left;
  }

  menosinfo() {
    let el = this.shadowRoot.querySelector('.card__more-info');
    el.style.visibility = 'hidden';
  }

  render() {
    return html `
      <article class="directory__wrapper--card projects">
        <a class="main__directory--link" href="${this.url}" target="${(this.newtab=="true") ? "_blank" : "_self"}"}>
          <div class="card__wrapper">
            <fa-icon class="${this.icon}" path-prefix="${this.pathprefix}" size="5.5rem" color="#ff7900"></fa-icon>  
            <h3 class="card__title">
              ${this.title}
            </h3>
            <p class="card__description">
              ${this.description}
            </p>
            ${this.moreinfo ? html`<a href="#" @mouseover="${this.masinfo}" @click="${this.masinfo}" @mouseleave="${this.menosinfo}" class="card__info">+INFO</a>` : html``}
          </div>
        </a>
        ${this.moreinfo ? html`
        <div class="card__more-info">
          ${this.moreinfoContent}
        </div>` : html``}
      </article>
    `;
  }
}

window.customElements.define(DataCard.is, DataCard);