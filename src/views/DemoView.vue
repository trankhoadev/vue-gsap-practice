
<script setup>
import { ref } from 'vue';

const dataAnchor = ref([
    {
        key: 'horizontally-part-1',
        href: '#horizontally-part-1',
        title: 'Part 1',
    },
    {
        key: 'horizontally-part-2',
        href: '#horizontally-part-2',
        title: 'Part 2',
    },
    {
        key: 'horizontally-part-3',
        href: '#horizontally-part-3',
        title: 'Part 3',
    },
    {
        key: 'horizontally-part-4',
        href: '#horizontally-part-4',
        title: 'Part 4',
    },
    {
        key: 'horizontally-part-5',
        href: '#horizontally-part-5',
        title: 'Part 5',
    },
    {
        key: 'horizontally-part-6',
        href: '#horizontally-part-6',
        title: 'Part 6',
    },
]);
</script>

<template>
    <div class="container">
        <a-anchor direction="vertical" :items=dataAnchor></a-anchor>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>