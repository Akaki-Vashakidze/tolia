import React, { Fragment } from 'react'
import NavBar from '../components/NavBar';
import ImageBackground from '../components/ImageBackground';
import AddressNumber from '../components/AddressNumber';

const LayoutForPages = () => {
  return (
    <Fragment>
        <ImageBackground />
        <AddressNumber />
        <NavBar />
    </Fragment>
  )
}

export default LayoutForPages