<template>
  <header class="topbar">
    <div class="container">
      <nav class="nav-links">
        <div class="flex">
          <router-link to="/">Home</router-link>
        </div>
        
        <router-link
          v-for="link in links"
          :key="link.text"
          :to="link.to"
        >
          {{ link.text }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawerOpen: false,
      links: [
        { text: "About", to: "/about" },
        { text: "Reviews", to: "/reviews" },
        { text: "Contact", to: "/contact" },
        { text: "Blog", to: "/blog" },
        { text: "FAQ", to: "/faq" }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  }
};
</script>

<style>
.topbar {
  background-color: #f8e9da;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  display: flex;
  align-items: center;
  width: 100%;
  transition: flex-direction 0.3s;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links.column-direction {
  flex-direction: column;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
}
.nav-links a {
  text-decoration: none;
  color: black;
}

.menu-icon {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }
}
</style>
