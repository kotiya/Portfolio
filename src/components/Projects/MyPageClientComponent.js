"use client";
import { useState, useEffect } from 'react';
import Content from './Content';

const MyPageClientComponent = (props) => {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState([]);
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <Content data={props.data} theme={theme}/>
      <Footer />
    </>
  );
}

export default MyPageClientComponent;
