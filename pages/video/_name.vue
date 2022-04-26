<template>
<div id="app">
    <HeaderPage/>
    <div class="player-container">
        <video v-bind:src="videoSrc" playsinline controls>
        </video>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            videoSrc: 'https://trpg.teruidog.com/kaikou-another/' + this.$route.params.name + '.mp4'
        }
    },

    mounted: function() {
        this.isLoaded();
    },

    methods: {
        isLoaded() {
            this.$store.commit('load/isLoaded');
        }
    }
}
</script>

<style scoped>
.player-container {
    margin-top: 16vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
</style>