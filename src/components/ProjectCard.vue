<template>
    <div class="card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    width: 250px;
}
</style>