import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const state = () => ({
    loaded: false,
    firstView: false,
    loadPageVisible: true,
    playingNow: false,
    audio: ''
});

export const mutations = {
    isLoaded(state) {
        state.loaded = true;
    },
    isFirstView(state) {
        state.firstView = true;
    },
    loadPageNotVisible(state) {
        state.loadPageVisible = false;
    },
    isPlayingNow(state, playing) {
        state.playingNow = playing;
    },
    setAudio(state, audioPath) {
        state.audio = new Audio(audioPath);
    }
};

export const getters = {
    loaded: state => state.loaded,
    firstView: state => state.firstView,
    loadPageVisible: state => state.loadPageVisible,
    playingNow: state => state.playingNow,
    audio: state => state.audio
};