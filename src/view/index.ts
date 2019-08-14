import React from 'react';

export const StartMain = React.lazy(()=> import('./Main/StartMain'));
export const ContentList = React.lazy(()=> import('./contents/ContentList'));
export const ContentContext = React.lazy(()=> import('./contents/ContentContext'));