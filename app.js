const vm = new Vue({
  el: "#app",
  data: {
    sites: [],
    site: false,
    ativo: false,
  },
  methods: {
    fetchSites() {
      fetch("./api/sites.json")
      .then(r => r.json())
      .then(r => {
        this.sites = r
      })
    },
    fetchSite(id) {
      fetch(`./api/${id}/dados.json`)
      .then(r => r.json())
      .then( r => {
        this.site = r
      })
    },
    abrirModal(id) {
      this.fetchSite(id)
      window.scrollTo({
        top: this.scrollY,
        behavior: "smooth",
        
      })
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.site = false;
      
    },
  },
  created() {
    this.fetchSites()
  },
});

