import React from 'react';
import RepLogApp from './RepLog/RepLogApp';
import { render } from 'react-dom';

const shouldShowHeart = true;

render(
    <RepLogApp withHeart={shouldShowHeart}/>,
    document.getElementById('lift-stuff-app')
);