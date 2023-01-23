<template>
    <v-select
        v-model="variant"
        :items="filterByScore"
        clearable
        label="Filter by score"
    ></v-select>
</template>

<script>
    export default {
        name: 'FilterByScore',
        props: ['items'],
        computed: {
            filterByScore() {
                return this.$store.state.filterByScore;
            }
        },

        data: () => ({
            variant: null
        }),

        watch: {
            variant(value) {
                value ? this.$store.commit('SET_FILTER_BY_SCORE', value) : this.$store.commit('SET_FILTER_BY_SCORE', null);
            }
        },
    }
</script>