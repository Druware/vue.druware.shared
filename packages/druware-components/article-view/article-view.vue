<template>
  <div class="new-article-view">
    <article class="media mt-1 mb-3" v-if="article != null">
      <figure class="media-left" v-if="showIcon">
        <p class="image is-64x64">
          <router-link :to="route">
            <img v-if="article.iconImage != null" :src="'/api/asset/' + article.iconImage.fileName" />
            <img v-else-if="article.iconId != null" :src="'/api/asset/' + article.iconId" />
            <img v-else src="https://bulma.io/assets/images/placeholders/128x128.png" /></router-link>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <router-link :to="route">
            <h3 :class="'title mb-2 ' + (small ? 'is-5' : 'is-4')">{{article.title}}</h3>
          </router-link>
          <span v-html="compileMarkdown((summary) ? article.summary : article.body)"></span>
          <div class="level is-mobile mt-2">
            <div class="level-left">
              <strong  v-if="!disableByLine">{{article.byLine}} @ <small v-if="!disableDates">{{formatDate(article.posted)}}</small></strong>
            </div>
            <div class="level-right">
              <span v-if="!disableTags">
                <span v-for="tag in article.tags" :key="article.tags.indexOf(tag)">
                  <span class="tag m-1">{{tag}}</span>
                </span>
              </span>
              <a :href="url" v-if="summary && url !== ''" class="level-item">
                <span class="icon is-medium"><i class="fa fa-search"></i></span>
              </a>
              <router-link :to="route" v-else-if="summary && route !== ''" class="level-item">
                <span class="icon is-medium"><i class="fa fa-search"></i></span>
              </router-link>
            </div>
          </div>
        </div>
        <!-- nav v-if="enableComments || enableLikes" class="level is-mobile">
          <div class="level-left">
            <a v-if="enableLikes" class="level-item">
              <span class="icon is-small"><i class="fa fa-heart"></i></span>
            </a>
            <a v-if="enableComments" class="level-item">
              <span class="icon is-small"><i class="fa fa-comment"></i></span>
            </a>
          </div>
        </nav -->
        <div v-if="enableDisqus" id="disqus_thread"></div>
      </div>
    </article>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

import {marked} from "marked";

export default {
  name: "NewsArticleView",
  props: {
    article: {
      type: Object,
      default: null,
    },
    summary: {
      type: Boolean,
      default: false,
    },
    route: {
      type: String,
      default: "",
    },
    enableComments: {
      type: Boolean,
      default: false,
    },
    enableDisqus: {
      type: Boolean,
      default: false,
    },
    enableLikes: {
      type: Boolean,
      default: false,
    },
    disableTags: {
      type: Boolean,
      default: false,
    },
    disableByLine: {
      type: Boolean,
      default: false,
    },
    disableDates: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: "",
    },
    disqusShortname: {
      type: String,
      default: null,
    }
  },
  components: {
     RouterLink
  },
  methods: {
    showDisqusThread() {
      let disqus_config = function () {
        this.page.url = document.location.href;
        this.page.identifier = this.article.permalink ?? document.location.href;
      }
      let d = document, s = d.createElement('script');
      s.src = 'https://' + this.disqusShortname + '.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    },
    formatDate(str) {
      let d = new Date(str);
      return (
          d.toLocaleDateString("en-US") + "  " + d.toLocaleTimeString("en-US")
      );
    },
    compileMarkdown(str) {
      return marked(str);
    },
  },
    mounted() {
      if (this.enableDisqus && this.disqusShortname !== null) {
        this.showDisqusThread();
      }
    }
}
</script>

<style scoped>
.new-article-view {
  overflow: hidden;
}
</style>
