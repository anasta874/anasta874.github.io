
import React from 'react';

function Section({ title, content }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{content}</div>
    </section>
  );
}

export default Section;