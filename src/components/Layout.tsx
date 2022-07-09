import React from 'react';
import classes from '../styles/Layout.module.css';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => (
  <>
    <main className={classes.main}>{props.children}</main>
    <Footer />
  </>
);

export default Layout;
