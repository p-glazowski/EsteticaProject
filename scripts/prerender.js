import { readFile, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true, ws: false }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = await readFile('dist/index.html', 'utf8');
  const root = '<div id="root"></div>';
  if (!html.includes(root)) throw new Error('Could not find the application root in dist/index.html');
  await writeFile('dist/index.html', html.replace(root, `<div id="root">${renderToString(createElement(App))}</div>`));
} finally {
  await server.close();
}
