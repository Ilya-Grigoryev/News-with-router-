<template>
  <div class="bg">
    <NewsLine v-for="(post, index) in news" 
        :key="index" 

        :index="index"
        :name="post.source.name"
        :title="post.title" 
        :description="post.description" 
        :urlToImage="post.urlToImage" 
        :url="post.url"
        :publishedAt="post.publishedAt"

        >{{post.author}}</NewsLine>
  </div>
</template>
<script>
  import NewsLine from '@/components/NewsLine.vue'

  export default {
    name: 'App',
    components: {
      NewsLine,
    },
    data(){
      return{
      news: [],
      href: 'https://newsapi.org/v2/top-headlines?country=bg&apiKey=d7f41a32c26b4bbfb596d58b1a54c766',
    }},
    methods:{
      getNews(){
      this.axios.get(this.href)
      .then((response) => {
        this.news = response.data.articles
      })
    },
    },
    mounted() {
    this.getNews()
    },
  };
  </script>