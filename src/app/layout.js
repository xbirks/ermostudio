import "./style.scss";
import Head from 'next/head';
import Header from "./header.jsx";
import Cursor from './buttons/cursor/cursor.jsx';
import Footer from './components/footer/footer.jsx';
import Spacer from './buttons/spacer.jsx';


export const metadata = {

  //GENERIC
  title: 'ERMO | Estudio de diseño gráfico',
  description: 'Estudio de diseño gráfico en Valencia: branding, ilustración, animación 2D/3D, diseño web y fotografía de producto. Creatividad y compromiso.',
  applicationName: 'ERMO',
  keywords: ['diseño gráfico', 'estudio de diseño gráfico', 'branding', 'ilustración', 'animación 2D', 'animación 3D', 'diseño web', 'fotografía de producto', 'diseñador gráfico Manises', 'diseñador gráfico Valencia', 'creatividad Manises'],
  authors: [{ name: 'Andrés Ortega', url: 'https://soyandres.es' }],
  creator: 'Andrés Ortega',
  publisher: 'Andrés Ortega',
  robots: 'index, follow',
  revisitAfter: '7 days',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  contentLanguage: 'es',
  
  //META
  openGraph: {
    title: 'ERMO | Estudio de diseño gráfico',
    description: 'Estudio de diseño gráfico en Valencia: branding, ilustración, animación 2D/3D, diseño web y fotografía de producto.',
    url: 'https://ermo.es',
    type: 'website',
    image: 'https://tu-pagina-web.com/imagen-og.jpg',
    site_name: 'ERMO | Estudio de diseño gráfico',
  },

  //TWITTER
  twitter: {
    card: 'ERMO | Estudio de diseño gráfico',
    site: '@ermo.es',
    creator: '@ermo.es',
    title: 'ERMO | Estudio de diseño gráfico',
    description: 'Estudio de diseño gráfico en Valencia: branding, ilustración, animación 2D/3D, diseño web y fotografía de producto.',
    image: 'https://tu-pagina-web.com/imagen-twitter.jpg',
  },

  //APPLE
  appleTouchIcon: 'https://tu-pagina-web.com/icono-touch.png', 
  appleTouchStartupImage: 'https://tu-pagina-web.com/startup-image.png',


  //SECURITY
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://ermo.es; script-src 'self' https://apis.google.com",
  referrerPolicy: 'no-referrer-when-downgrade', 
  xContentTypeOptions: 'nosniff', 
  xFrameOptions: 'DENY', 
  xXssProtection: '1; mode=block',

  
}
 

export default function RootLayout({ children }) {
  return (

    <html lang="es">

      <head>
      <link rel="stylesheet" href="https://use.typekit.net/ury2gea.css"></link>
      </head>
    
  
      <body>
        
      <Header/>
        {children}
      <Spacer className="spacer-xxl" />
      <Footer />
      <Spacer className="spacer-m" />
      <Cursor />


      </body>
    </html>
  );
}

