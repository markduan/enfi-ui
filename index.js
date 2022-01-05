import RenderEngine from '@ofa/render-engine';

import schema from './schema';

const apiSpecAdapter = {
  build: () => {}
}

const renderRoot = document.querySelector('#root');
const renderEngine = new RenderEngine({ schema, apiSpecAdapter });
if (renderRoot) {
  renderEngine.render(renderRoot);
}
