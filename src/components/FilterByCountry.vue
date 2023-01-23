<template>
    <v-select
        v-model="variant"
        :items="filterByCountry"
        clearable
        label="Filter by country"
    ></v-select>
</template>

<script>
    export default {
        name: 'FilterByCountry',
        props: ['items'],
        computed: {
            filterByCountry() {
                return this.$store.state.filterByCountry;
            }
        },

        data: () => ({
            variant: null
        }),

        watch: {
            variant(value) {
                value ? this.$store.commit('SET_FILTER_BY_COUNTRY', value) : this.$store.commit('SET_FILTER_BY_COUNTRY', null);
            }
        },
    }
</script>