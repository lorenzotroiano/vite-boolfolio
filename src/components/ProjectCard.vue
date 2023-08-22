<template>
    <h1>{{ project.title }}</h1>
    <p>descrizione: {{ project.description }}</p>
    <img :src="'http://localhost:8000/storage/' + project.main_picture" alt="">
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
    name: 'ProjectCard',
    data() {
        return {
            project: {}
        }
    },

    mounted() {
        const projectId = this.$route.params.id;

        axios.get(API_URL + '/project-card/' + projectId)
            .then(res => this.project = res.data.projects)
            .catch(err => console.error(err));
    }
}
</script>