<template>
    <v-list three-line>
        <transition-group name='list' tag='div'>
            <User v-for="(item, index) in users" :item=item :key=index class='list-item' />
        </transition-group>
    </v-list>
    
</template>


<script>
    import User from './User';

    export default {
        name: 'UsersList',
        components: {
            User
        },
        props: {
            users: {
                default: () => {
                    return []
                }
            }
        },
        data: () => ({
            showAdress: false,
        }),
    }
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.list-item {
    animation: animation-list 0.5s;
}

@keyframes animation-list {   
  0% {     
    transform: translateY(-100%);
    opacity: 0;
  }   
  100% {
    transform: translateY(0%);
    opacity: 1;
   }
}

</style>