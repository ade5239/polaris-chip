import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();

    this.title = "";
    this.description = "";
    this.image = null;
    this.link = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        
      }
      :host([fancy]) {
        display: inline-block;
        padding: 16px;
        background-color: #77b5b8;
        border-radius: 8px;
        border: 2px solid grey;
        box-shadow: 4px 4px 4px grey;

      }
      .card {
        width: 400px;
      border: 4px solid black;
      padding: 24px;
      margin: auto;
      border-color: grey;
      border-radius: 16px;
      text-align: center;
      background-color: #f1f1f1;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
      }

      .card:hover {
        box-shadow: 0 4px 8px; 
      }

      body {
      font-family: Arial, sans-serif;
      }

      div h1 {
        font-size: 24px;
      }

      .image img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }

      .bbutton {
        background-color: #ea3f1a;
        color: white;
        border-radius: 8px;
        font-size: 24px;
        padding: 8px 24px;
        text-decoration: none;
      }

      .bbutton:hover {
        background-color: #d6c0bc;
        color: red;
        transition-duration: 0.3s
      }


      .alter {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin: 16px 24px;
        font-size: 24px;
        text-decoration: none;
      }

      .alter .extras {
        background-color: grey;
        color: white;
        border-radius: 8px;
        padding: 6px;
        text-decoration: none;
      }

      .alter .extras:hover {
        background-color: #d6c0bc;
        color: red;
        transition-duration: 0.3s
      }

      details summary {
    text-align: middle;
    font-size: 20px;
    padding: 8px 0;
      }

      details[open] summary {
    font-weight: bold;
    }
  
  details div {
    border: 2px solid black;
    border-radius: 12px;
    text-align: center;
    padding: 6px;
    height: 60px;
    margin: 16px;
    overflow: auto;
  }


      @media  only screen and (min-width: 500px) and (max-width: 800px) {
        .image, h1, p {
        display: none; 
      }
      .bbutton {
        align-object: center;
        display: block;
        margin: auto;
      }
  }

  
      @media (max-width: 500px) {
        .card {
           width: 200px;
           border: 2px solid black;
           padding: 16px;
           margin: auto;
          }
          .alter .extras {
           background-color: grey;
           color: white;
           border-radius: 8px;
           padding: 3px;
            text-decoration: none;
        }
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <slot class="image">
            <img src="${this.image}" alt="${this.title}">
           </slot>
          <h1 class="card-title"><slot name="card-title">${this.title}</slot></h1>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
          </details>
          <div>
            <a href="${this.link}">
              <button class="bbutton">Details</button>
            </a>
          </div>
          <div class="alter">
            <slot name="cardButtons">
              <button class="duplicate extras">Clone Card</button>
              <button class="bg-change extras">Change Background</button>
              <button class="change-title extras">Change Title</button>
              <button class="change-image extras">Change Image</button>
              <button class="delete-card extras">Delete Card</button>
              </slot>
          </div>
        </div>
      </div>
    `;
  }

  

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true }

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
