import * as $ from 'jquery';
// import for jquery ui fix https://stackoverflow.com/a/42482037
import 'jquery-ui';
import 'jquery-ui/ui/widgets/dialog';
import { TestClass } from './test';

$( () => {
  let $app: JQuery = $("#app");
  let test = new TestClass($app);
  $(`<div id="dialog" title="Basic dialog">
    <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
  </div>`).appendTo($app).dialog();
});
