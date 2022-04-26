<template>
    <div id="load">
        <transition>
            <div v-if="visible" class="kaikou-logo">
                <transition>
                    <div v-if="visibleLogo" class="logo1">
                        <img src="~/assets/image/kaikou-logo.png">
                    </div>
                </transition>
                <transition>
                    <div v-if="visibleLogo2" class="logo2">
                        <img src="~/assets/image/kaikou-logo2.png">
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: true,
            visibleLogo: false,
            visibleLogo2: false,
        };
    },

    mounted: function() {
        this.fadeLogos();
    },

    methods: {
        fadeLogos() {
            window.setTimeout(() => {
                this.visible = true;
            },500);
            window.setTimeout(() => {
                this.visibleLogo = true;
            },1000);
            window.setTimeout(() => {
                this.visibleLogo2 = true;
            },2000);
            window.setTimeout(() => {
                this.visible = false;
                this.visibleLogo = false;
                this.visibleLogo2 = false;
            },5000);
        }
    },
};
</script>

<style scoped>
.kaikou-logo{
	background: #ff4400;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 999;
}
.kaikou-logo .logo1 img {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 9900;
	width: 280px;
}
.kaikou-logo .logo2 img {
	position: fixed;
	left: 50%;
	top: 63%;
	transform: translate(-50%, -63%);
	z-index: 9999;
	width: 280px;
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