<script setup lang="ts">
import {ref} from "vue";
interface TicketIxF {
    location: string,
    names: string[],
    issue: string,
    id: string
}
const pages = { Add: 'add', Edit: 'edit', Detail: 'detail', List: 'list' }
const page = ref(pages.List)
const ticketList = ref<TicketIxF[]>([])
const
</script>

<template>
    <main>
        <section v-if="page === pages.Add"></section>
        <section v-else-if="page === pages.Detail"></section>
        <section v-else-if="page === pages.Edit"></section>
        <section v-else></section>
    </main>
</template>

<style></style>