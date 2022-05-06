<template>
    <div id="title">
        <transition>
            <div v-if="visible" v-scroll="onScroll">
                <div class="backgroundDrak">
                    <p>これは、ちっぽけな人間達が運命に抗う物語</p>
                </div>
                <div class="empty"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies' 
import { mapMutations } from 'vuex'
Vue.use(VueCookies);

export default {
    data() {
        return {
            visible: false,
            alreadyVisit: false
        }
    },

    mounted: function() {
        this.getCookies();
        this.fadeTitle();
        this.setCookies();
    },

    methods: {
        fadeTitle() {
            if (!this.alreadyVisit) {
                window.setTimeout(() => {
                    this.visible = true;
                }, 5000);
                window.setTimeout(() => {
                    this.$store.commit('load/isFirstView');
                }, 7000)
            } else {
                    this.$store.commit('load/isFirstView');
            }
        },
        onScroll() {
            if (this.visible) {
                this.visible = false;
            }
        },
        getCookies() {
            if (this.$cookies.isKey('alreadyVisit')) {
                this.alreadyVisit = this.$cookies.get('alreadyVisit');
            }
        },
        setCookies() {
            this.$cookies.config('7d');
            this.$cookies.set('alreadyVisit', 'true');
        }
    }
}
</script>

<style scoped>
.backgroundDrak {
    background-color: black;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 99;
}

.backgroundDrak p {
    color: white;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: MS Mincho;
}

.empty {
    height: 500vh;
    width: 100%;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave {
  opacity: 1;
}

.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
</style>