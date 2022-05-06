<template>
<div id="app">
    <HeaderPage/>
    <div class="contents">
        <div class="player-container">
            <video v-bind:src="videoSrc" playsinline controls>
            </video>
        </div>
        <div class="comment-input">
            <v-text-field v-model="name" label="名前" class="comment-name"></v-text-field>
            <p v-if="nameError != ''" style="color: red; font-size: 8px;">{{nameError}}</p>
            <v-textarea v-model="comment" class="comment-area" label="コメント"></v-textarea>
            <p v-if="commentError != ''" style="color: red; font-size: 8px;">{{commentError}}</p>
            <v-spacer></v-spacer>
            <v-btn @click="setComment" class="comment-button">コメントする</v-btn>
        </div>
        <div class="comment-list">
            <h1>コメント欄</h1>
            <div class="comments" v-if="isCommentSet">
                <div v-for="(comment, index) in comments" :key="index">
                    {{comment.name}}：
                    {{comment.comment}}
                </div>
            </div>
            <div class="comments_loading" v-else>
                <img src="~/assets/image/loading.gif" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import{ mapGetters } from 'vuex'
import axios from 'axios';

export default {
    data() {
        return {
            videoSrc: 'https://trpg.teruidog.com/kaikou-another/' + this.$route.params.name + '.mp4',
            page: this.$route.params.name,
            name: '',
            comment: '',
            comments: [],
            nameError: '',
            commentError: '',
            isCommentSet: false,
        }
    },

    mounted: function() {
        this.isLoaded();
        this.getComment();
    },

    methods: {
        isLoaded() {
            this.$store.commit('load/isLoaded');
        },
        async getComment() {
            const response = await this.$axios.$get('api/comments/' + this.page)
            this.setCommentLine(response.comments)
        },
        setCommentLine(comments) {
            for(let i=0;i<comments.length;i++) {
                this.comments.push(comments[i])
            }
            this.isCommentSet = true;
        },
        setComment() {
            let err = 0;

            if(this.name == ''){
                this.nameError = '名前を入力してください。'
                err++
            } else {
                this.nameError = ''
            }
            if(this.comment == '') {
                this.commentError = 'コメントを入力してください。'
                err++
            } else {
                this.commentError = ''
            }

            if(err != 0){
                return false
            }
            this.insertComment();
            this.comment = '';
            this.isCommentSet = false;
            this.comments = [];
            window.setTimeout(() => {
                this.getComment()
            },500)
        },
        insertComment() {
            this.$axios.$post('api/comment', {data: {
                name: this.name,
                comment: this.comment,
                page: this.page
            }})
        },
    }
}
</script>

<style scoped>
.contents {
    width: max(80%, 80%);
    margin: 0 auto;
}
.player-container {
    margin-top: 16vh;
    text-align: center;
}
.player-container video {
    width: 100%;
}
.comment-input {
    /* width: 80%; */
    margin: 0 auto;
    padding-top: 10px;
}
.comment-name, .comment-area {
    width: max(60%,265px);
}
.comment-list {
    margin-top: 10px;
}
.comments_loading img {
    width: 50px;
    height: auto;
}
.comments_loading {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
}
.comment-list h1{
    font-size: 20px;
}
</style>