<template>
    <div id="home">
        <v-row>
            <v-col
                v-for="(video, index) in videos"
                :key="index"
                sm="6"
                md="4"
                cols="12"
                class="v-card-col"
            >
                <v-card
                    elevation="5"
                    class="video-card"
                >
                    <img :src="'/image/' + video.thumbnail" class="video-thumbnail" />
                    <v-card-title
                        v-text="video.name"
                    ></v-card-title>
                    <v-card-text
                        v-html="video.text"
                    ></v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="ml-2 mt-5"
                            outlined
                            rounded
                            small
                            :to="video.url"
                        >動画へ</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [
                {
                    id: 1,
                    name: '傀逅-Another Part1',
                    url: '/video/kaikou_another01',
                    text: '傀逅-Anotherの記念すべきPart1。ここから運命は動き出した――',
                    thumbnail: 'kaikou_another01_Moment.jpg',
                },
                {
                    id: 2,
                    name: '傀逅-Another Part2',
                    url: '/video/kaikou_another02',
                    text: '',
                    thumbnail: 'kaikou_another02_Moment.jpg',
                },
                {
                    id: 3,
                    name: '傀逅-Another Part3',
                    url: '/video/kaikou_another03',
                    text: '',
                    thumbnail: 'kaikou_another03_Moment.jpg',
                },
                {
                    id: 4,
                    name: '傀逅-Another Part4',
                    url: '/video/kaikou_another04',
                    text: '',
                    thumbnail: 'kaikou_another04_Moment.jpg',
                },
                {
                    id: 5,
                    name: '傀逅-Another Part5',
                    url: '/video/kaikou_another05',
                    text: '',
                    thumbnail: 'kaikou_another05_Moment.jpg',
                },
                {
                    id: 6,
                    name: '傀逅-Another Part6',
                    url: '/video/kaikou_another06',
                    text: '',
                    thumbnail: 'kaikou_another06_Moment.jpg',
                },
                {
                    id: 7,
                    name: '傀逅-Another Part7',
                    url: '/video/kaikou_another07',
                    text: '',
                    thumbnail: 'kaikou_another07_Moment.jpg',
                },
                {
                    id: 8,
                    name: '傀逅-Another Part8',
                    url: '/video/kaikou_another08',
                    text: '',
                    thumbnail: 'kaikou_another08_Moment.jpg',
                },
                {
                    id: 9,
                    name: '傀逅-Another おまけ',
                    url: '/video/kaikou_another_omake',
                    text: '',
                    thumbnail: 'kaikou_another_omake_Moment.jpg',
                },
            ]
        }
    },
    methods: {
        movePage(page) {
            this.$router.push(page);
        }
    }
}
</script>

<style scoped>
#home {
    margin-top: 16vh;
    display: block;
}
.cards {
    display: inline;
}
.video-card {
    width: 95%;
    margin: 0 auto;
}
.video-thumbnail {
    width: 100%;
}
</style>