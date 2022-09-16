import { Fragment } from 'react'
import '../styles/globals.css'
import NavBar from '../components/NavBar';
import ImageBackground from '../components/ImageBackground';
import AddressNumber from '../components/AddressNumber';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ImageBackground/>
      <Component {...pageProps} />
      <NavBar />
      <AddressNumber/>
    </Fragment>
  )
  
 
}

export default MyApp
