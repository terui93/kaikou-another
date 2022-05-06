<template>
    <transition>
        <header v-if="visible">
            <nuxt-link class="headerlogo1" to="/">
                <img src="~/assets/image/kaikou-logo.png">
            </nuxt-link>
            <nuxt-link class="headerlogo2" to="/">
                <img src="~/assets/image/kaikou-logo2.png">
            </nuxt-link>
            <a v-on:click="audioPlay" v-show="!playingNow" class="button"><img src="~/assets/image/music_play.png" alt="play"></a>
            <a v-on:click="audioStop" v-show="playingNow" class="button"><img src="~/assets/image/music_stop.png" alt="stop"></a>
        </header>
    </transition>
</template>

<script>
import audioPath from '~/assets/sound/hero.mp3'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
    data() {
        return {
            visible: this.$store.getters['load/firstView'],
            audio: this.$store.getters['load/audio'],
            playingNow: this.$store.getters['load/playingNow']
        }
    },

    mounted: function() {
    },

    computed: {
        getVisible: function() {
            return this.$store.getters["load/firstView"];
        }
    },

    watch: {
        getVisible(value) {
            this.visible = value
        }
    },

    methods: {
        audioPlay() {
            if (this.audio == '') {
                this.$store.commit('load/setAudio', audioPath);
                this.audio = this.$store.getters['load/audio'];
            }
            this.audio.loop = true;
            this.audio.play();
            this.audio.volume = 0.05;
            this.playingNow = !this.playingNow;
            this.$store.commit('load/isPlayingNow', this.playingNow);
        },
        audioStop() {
            this.audio.pause();
            this.playingNow = !this.playingNow;
            this.$store.commit('load/isPlayingNow', this.playingNow);
        },
    }
}
</script>

<style scoped>
header {
    background-color: #ff4400;
    width: 100%;
    height: 15vh;
    z-index: 10;
    position: fixed;
	top: 0;
	left: 0;
    justify-content: space-between;
}
.headerlogo1 img {
    position: absolute;
    width: auto;
    height: 80%;
    z-index: 15;
    left: 50%;
    transform: translate(-50%);
}
.headerlogo2 img {
    position: absolute;
    width: auto;
    height: 50%;
    z-index: 16;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
}
header .button {
    position: absolute;
    z-index: 15;
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
}
header .button img {
    width: auto;
    height: 5vh;
}
</style>