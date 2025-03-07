<template>
    <iframe
      src="https://sumitpun.com.np/Instructions.pdf"
      style="width:100%; height:100vh; border:none;"
      title="GIANNA ATTIRE"
    ></iframe>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    document.title = "GIANNA ATTIRE";
    // Set Open Graph meta tags dynamically (optional)
    const setMeta = (property, content) => {
      let meta = document.querySelector(`meta[property='${property}']`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
  
    setMeta('og:title', 'Instructions PDF');
    setMeta('og:description', 'View the Instructions PDF document.');
    setMeta('og:image', 'https://sumitpun.com.np/og-pdf.png');
    setMeta('og:url', window.location.href);
    setMeta('og:type', 'article');
  });
  </script>
  