import React from 'react';
import { Puff } from  'react-loader-spinner';
import {Loader as LoaderWrapper,
        Puff as Puffy} from "../../components/Loader/LoadingStyle";

const Loader = () => {
  return (
    <LoaderWrapper>
    <Puff />
    </LoaderWrapper>
  )
}

export default Loader;

