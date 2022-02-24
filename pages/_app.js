import '../styles/globals.css'
import { storeWrapper } from "../store/index";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default storeWrapper.withRedux(MyApp);
