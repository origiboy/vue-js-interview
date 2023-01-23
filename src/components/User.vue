<template>
        <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
        ></v-subheader>

        <v-divider
            v-else-if="item.divider"
            :inset="item.inset"
        ></v-divider>

        <v-list-item
            v-else
            :key="item.title"
        >
        <v-list-item-avatar @click="showAdress = !showAdress">
            <v-img :src="item.avatar" v-if="!showAdress"></v-img>
            <svg v-if="showAdress" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="cross-circle" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="15" y1="15" x2="9" y2="9" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line id="secondary-2" data-name="secondary" x1="9" y1="15" x2="15" y2="9" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><circle id="primary" cx="12" cy="12" r="9" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></svg>
        </v-list-item-avatar>

        <v-list-item-content v-if="!showAdress">
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle>Cтрана: {{ item.country }}</v-list-item-subtitle>
            <v-list-item-subtitle>Рейтинг: {{ item.score }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content v-if="showAdress">
            <v-list-item-subtitle v-html="item.address"></v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    
</template>


<script>
    

    export default {
        name: 'User',

        props: ['item', 'index'],

        data: () => ({
            showAdress: false,
        }),

        
    }
</script>