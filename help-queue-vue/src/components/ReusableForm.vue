<script setup lang="ts">
interface Props {
    submitHandler: (e: any) => void,
    buttonText: string,
    ticket?: TicketIxF
}
const props = defineProps<Props>()
function studentNames() {
    return props.ticket ? props.ticket.names.join(' and ') : ''
}

</script>

<template>
    <form @submit.prevent="submitHandler">
        <label for="names">Student Names:</label>
        <input type="text" id="names" name="names" placeholder="Who is having the issue?" :value="studentNames" />
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" placeholder="Where are you?" :value="props.ticket.location" />
        <label for="issue">Issue:</label>
        <textarea id="issue" name="issue" placeholder="What is your issue?">{{props.ticket.issue}}</textarea>
        <input type="submit" :value="props.buttonText" />
    </form>
</template>