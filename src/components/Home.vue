<template>
    <h1>home</h1>
    <ul>
        <li v-for="project in projects" :key="project.id" class="list-unstyled">
            <router-link :to="{
                name: 'project-card',
                params: { id: project.id }
            }">
                {{ project.title }}
            </router-link>
        </li>
    </ul>

    <div class="justify-content-center">
        <div v-for="project in projects" :key="project.id" :project="project" class="my-3 mx-3" />
        <div class="pages row justify-content-center">
            <div v-for="(page, index) in pages" :key="index" v-html="page.label"
                class="col mx-2 py-3 text-white rounded fs-4" :class="{
                    'bg-primary': !page.active,
                    'bg-secondary': page.active,

                    'd-none': page.url === null
                }" @click="toPage(page.url)" style="width: 160px;">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
    name: 'Home',
    data() {
        return {
            projects: [],
            pages: []
        }
    },
    methods: {

        toPage(url) {
            axios.get(url)
                .then(res => {

                    const data = res.data.projects;

                    this.projects = data.data;
                    this.pages = data.links;
                })
                .catch(err => console.error(err));
        }
    },
    mounted() {
        axios.get(API_URL + '/projects-page')
            .then(res => {

                // this.projects = res.data.projects;
                const data = res.data.projects;

                this.projects = data.data;
                this.pages = data.links;
            })
            .catch(err => console.error(err));
    }
}

</script>