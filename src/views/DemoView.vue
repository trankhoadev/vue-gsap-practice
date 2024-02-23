
<script setup>
import { ref } from 'vue'


const editableStr = ref('This is an editable text.');
</script>

<template>
    <div>
        <!-- write ur code here -->
        <a-typography-paragraph v-model:content="editableStr" editable />
        <a-button type="primary">Primary Button</a-button>
    </div>
</template>

<style lang="scss" scoped></style>