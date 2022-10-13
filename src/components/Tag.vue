<template>
    <div class="tag">
        <slot name="default"><span class="tag-default">我是一个标签</span></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup() {
            return {}
        }
    })
</script>

<style scoped>
    .tag {
        display: inline-block;
    }
    .tag-default {
        color: #f99;
        font-size: 16px;
    }
</style>
