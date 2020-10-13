<template>
    <section>
        <h1>{{title}}</h1>
        <p v-html='message'>no message.</p>
        <hr>
        <div class="right">
            <router-link to="/">Go to Top</router-link>
        </div>

    </section>
</template>

<script>
export default {
    data: function(){
        return {
            title: 'Login'
        }
    },
    computed: {
        message: function(){
            let id = this.$route.params.id;
            let pass = this.$route.params.pass;
            return 'ID:'+id+'<br>PASS:'+pass;
        }

    },
    validate ({params}){
      if(params.id==undefined){
        return false;
      }
      if(params.pass==undefined){
        return false;
      }
      return true;
    },
}
</script>

<style>
.container {
  padding: 5px 10px;
}

h1{
  font-size: 60pt;
  color: #345980;
}
p{
  padding-top: 5px;
  font-size: 20pt;
}
pre{
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}
hr{
  margin: 10px 0px;
}

</style>
