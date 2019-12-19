import React from 'react';

import SidebarLayout from '../layouts/SidebarLayout';

function sanitize(html) {
  return html.split('<hr>').join('');
}

export default ({ location, pageContext }) => {
  const { html, sourceUrl } = pageContext;

  // eslint-disable-next-line react/no-danger
  const content = <div dangerouslySetInnerHTML={{ __html: sanitize(html) }} />;

  return (
    <SidebarLayout location={location}>
      <div>{content}</div>
      <div>
        <h5>Source:</h5>
        <a href={sourceUrl}>{sourceUrl}</a>
      </div>
    </SidebarLayout>
  );
};
