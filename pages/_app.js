import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(fab); 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
