export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      
      <body>
        <div id="app">${body}</div>
        <script type="text/javascript" src="/js/app.js"></script></body>
      </body>

    </html>
  `;
};