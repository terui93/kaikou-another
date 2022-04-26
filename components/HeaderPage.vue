<template>
    <header>
        <div class="headerlogo1">
            <img src="~/assets/image/kaikou-logo.png">
        </div>
        <div class="headerlogo2">
            <img src="~/assets/image/kaikou-logo2.png">
        </div>
        <a v-on:click="audioPlay" v-show="!playingNow"><img src="~/assets/image/music_play.png" alt="play"></a>
        <a v-on:click="audioStop" v-show="playingNow"><img src="~/assets/image/music_stop.png" alt="stop"></a>
    </header>
</template>

<script>
import audioPath from '~/assets/sound/hero.mp3'

export default {
    data() {
        return {
            visible: true,
            audio: '',
            playingNow: false
        }
    },

    mounted: function() {

    },

    methods: {
        audioPlay() {
            this.audio = new Audio(audioPath);
            this.audio.loop = true;
            this.audio.play();
            this.audio.volume = 0.05;
            this.playingNow = !this.playingNow;
        },
        audioStop() {
            this.audio.pause();
            this.playingNow = !this.playingNow;
        }
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
header a {
    position: absolute;
    z-index: 15;
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
}
header a img {
    width: auto;
    height: 5vh;
}
</style>