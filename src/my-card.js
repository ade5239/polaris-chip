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

    this.title = "Title";
    this.description = "Description";
    this.image = "https://cdn.dealeraccelerate.com/rkm/1/2554/160641/1920x1440/w/1969-ford-mustang";
    this.link = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
        border: 2px solid black;
        color: white;
        border-radius: 8px;
        padding: 8px;
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

  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <div class="image">
            <img src="${this.image}" alt="${this.title}">
          </div>
          <h1 class="card-title">${this.title}</h1>
          <p>${this.description}</p>
          <div>
            <a href="${this.link}">
              <button class="bbutton">Details</button>
            </a>
          </div>
          <div class="alter">
           <button class="duplicate extras">Clone Card</button>
           <button class="bg-change extras">Change Background</button>
           <button class="change-title extras">Change Title</button>
           <button class="change-image extras">Change Image</button>
           <button class="delete-card extras">Delete Card</button>
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
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
