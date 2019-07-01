<template>

    <div class="project-detail-listing">
        <div class="custom-header">
            {{ title }}
        </div>
        <hr>
        <div v-for="data in dataListing">
            <div class="project-name">{{ data[arrayKey]}}</div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "listing",
        props: {
            title: String,
            dataListing: [Array],
            arrayKey: String
        }
    }
</script>

<style scoped>

    .project-detail-listing{
        display: inline-block;
        margin: 32px;
        padding: 16px;
        background-color: #9e9e9e;
    }
</style>