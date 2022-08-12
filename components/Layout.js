
import React, { Component } from 'react';
import Header from './Header';

export default function Layout({children}) {
    return (
      <div className='layout'>
        {children}
      </div>
    );
}
