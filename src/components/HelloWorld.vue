<template>
  <h1>Projects</h1>

  <ul>
    <li v-for="project in projects" :key="project.id">
      [{{ project.id }}] {{ project.title }}
    </li>
  </ul>


  <div class="pages row justify-content-center cursor-pointer">
    <div v-for="(page, index) in pages" :key="index" class="page col " :class="(page.active ? 'bg-white text-dark' : 'bg-secondary')
      + ' '
      + (page.url == null ? 'd-none' : '')" v-html="page.label" role="button"
      @click="loadPage(page.url)" />

  </div>
</template>

<script>

import axios from 'axios';


export default {

  data: function () {
    return {
      projects: [],
      pages: []
    }
  },
  methods: {

    loadPage(target) {

      if (target == null) return;

      this.loadProjects(target);
    },
    loadProjects(target) {
      axios.get(target)
        .then(response => {

          const data = response.data;
          console.log(data);

          this.projects = data.projects.data;
          this.pages = data.projects.links;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {

    this.loadProjects('http://127.0.0.1:8000/api/v1/project-index');
  }
}


</script>

<style>
.page {

  width: 50px;
}
</style>