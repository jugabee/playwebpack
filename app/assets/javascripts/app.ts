import * as $ from 'jquery';
import * as _ from 'underscore';
import * as PIXI from 'pixi.js';
// import for jquery ui fix https://stackoverflow.com/a/42482037
import 'jquery-ui';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-mousewheel';
import 'spectrum-colorpicker';
import * as earcut from 'earcut';
import * as ClipperLib from 'clipper-lib';
import * as imagesLoaded from 'imagesloaded';
import * as Util from './util';
import { TestClass } from './test-class';

// no types declared, using standard require
var hx = require('./visibility');

$(() => {

  console.log(earcut);

  console.log(ClipperLib);

  // pixi js
  let renderer: PIXI.SystemRenderer;
  renderer = new PIXI.WebGLRenderer(800, 600, { antialias: false, forceFXAA: false, resolution: 1});
  console.log(renderer);

  // spectrum colorpicker
  $("#colorpicker").spectrum({
      color: "#f00"
  });

  // visibility.js
  console.log(new hx.Visibility());

  // underscore
  console.log(_.debounce);

  let $doc: JQuery = $(document);
  function handleVisibilityChange() {
    if (Util.PageVisibility.isDocumentHidden()) {
      console.log("hidden");
    } else {
      console.log("visible");
    }
  }

  // Handle page visibility change
  document.addEventListener(Util.PageVisibility.visibilityChangeEventName(), handleVisibilityChange, false);

  // jquery-mousewheel
  $doc.on('mousewheel', (event) => {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
  });

  let $app: JQuery = $("#app");
  let test = new TestClass($app);

  // jquery-ui dialog
  $(`<div id="dialog" title="Basic dialog">
  <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
  </div>`).appendTo($app).dialog();

  // imagesLoaded library
  imagesLoaded('#app', function() {
    // images have loaded
    console.log("images have loaded")
  });
  // append image to test imagesLoaded
  $app.append(`<img src="http://via.placeholder.com/350x150" />`);

});
