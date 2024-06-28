import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ title, description, imageUrl }) {
  return (
    <header>
      <link rel="stylesheet" href="https://use.typekit.net/ury2gea.css"></link>
      <link rel="canonical" href="https://www.ermo.es" hrefLang="es-ES" />
      <link  rel="icon"   href="src/assets/icon/arrow_blue.svg" type="image/png" hrefLang="es-ES" />
     

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="robots" content="index, follow" />
        
      </Helmet>
    </header>
  );
}

export default Head;
