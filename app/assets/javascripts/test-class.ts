import * as $ from 'jquery';

export class TestClass {
  constructor(element: JQuery) {
    element.append(`<div class="alert alert-success">Play Webpack</div>`);
  }
}
