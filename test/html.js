'use-strict';

const tape     = require('tape');
const renderer = require('../index')();

tape('Renderer', test => {
  const state       = {bool : true };
  const template    = '<html><div class="component"></div><div id="state"></div></html>';
  const component   = '<div>component</div>';
  const output      = '<html><div class="component"><div>component</div></div><div id="state"></div></html>';
  const outputState = `<html><div class="component"><div>component</div></div><script>window.__state__ = ${ JSON.stringify(state) }</script></html>`;
  renderer.template(template);
  test.equal(template, renderer.html());
  renderer.render(component, '.component');
  test.equal(output, renderer.html());
  test.throws(() => { renderer.render(component, '.bla'); }, /Renderer could not render, placeholder ".bla" not found/);
  renderer.state(state);
  test.equal(outputState, renderer.html());
  test.end();
});
