import React from 'react';
import RepLogApp from './RepLog/RepLogApp';
import { render } from 'react-dom';

const shouldShowHeart = false;

render(
    <RepLogApp
        withHeart={shouldShowHeart}
        {...window.REP_LOG_APP_PROPS}
    />,
    document.getElementById('lift-stuff-app')
);