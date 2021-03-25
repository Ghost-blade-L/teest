// import logo from './logo.svg';
import React from 'react'
import './App.less';
import { Button } from 'antd';
export default function App() {
  return (
    <div className="site-button-ghost-wrapper">
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
  );
}

