<template>
    <div class="navbar">
        <Slide 
            :closeOnNavigation="true"
            noOverlay
            
        >
            <a id="home" href="#">
                <span>Главная</span>
            </a>
            <a id="action" href="#">
                    <span>Действие</span>
            </a>
            <a id="new" href="#">
                <span>Новые поступления</span>
            </a>
        </Slide>
        <div class="navbar__name">Pasange</div>
        <div class="navbar__btns">
            <UpButton><img :src="image1" /></UpButton>
            <router-link class="router-link" to="/cart"><UpButton><img :src="image2" /></UpButton></router-link>
        </div>
    </div>
</template>

<script>
import image1 from "../img/icons/search.png";
import image2 from "../img/icons/market.png";
import UpButton from './UI/UpButton.vue';
import { Slide } from 'vue-burger-menu';
import { mapGetters } from "vuex";

export default {
    name: 'navbar-component',
    components: {
        Slide,
        UpButton,
    },
    computed: {
        ...mapGetters(["itemsInCart", "itemsInLiked"]),
    },
    data () {
            return {
                image1: image1,
                image2: image2,
            }
    }
}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 90px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    color: black;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 10px;
}
.navbar__name {
    font-size: 50px;
    font-weight: bold;
    margin-left: 120px;
    cursor: pointer;
}
.navbar__btns {
    display: flex;
    flex-direction: row;
}

</style>