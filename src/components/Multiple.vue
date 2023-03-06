<script setup>
    import Card from "./Card.vue";
</script>

<script>
export default {
    name: "Card",
    data() {
        return {
            repeater: 1,
        }
    },
    props: {
        num: String
    },
    watch: { 
        num: function(newVal, oldVal) {
            this.repeater = Number(newVal);
        }
    },
    mounted() {
        this.repeater = Number(this.num);
    }
}
</script>

<template>
    <div>
        <Card v-for="number in repeater" :id="-1" />
    </div>
</template>