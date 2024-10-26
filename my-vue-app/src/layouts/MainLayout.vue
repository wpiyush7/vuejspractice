<template>
    <div>
      <header>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </header>
      <main>
        <slot />
      </main>
      <footer>
        <p>&copy; 2024 My Vue App</p>
      </footer>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  header {
    background-color: #f8f9fa;
    padding: 1rem;
  }
  
  nav a {
    margin: 0 1rem;
  }
  
  main {
    padding: 2rem;
  }
  
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #f8f9fa;
  }
  </style>
  