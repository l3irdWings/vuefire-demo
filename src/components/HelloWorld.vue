<template>
  <div class="hello">
    <!--<pre>{{ messageObject }}</pre>-->
    <div>
      <div v-for="message in messages" v-bind:key="message['.key']">
        <h2><b-badge>{{ message.message }}</b-badge></h2>
      </div>
    </div>
    <b-form-input id="new_message_input" type="text" v-model="newMessage" required placeholder="Write Comment"></b-form-input>
    <b-button v-on:click="addMessage()">Send</b-button>
  </div>
</template>

<script>
import {messageRef} from '../firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newMessage: ''
    }
  },
  firebase: {
    messages: messageRef,
    messageObject: {
      source: messageRef,
      asObject: true
    }
  },
  methods: {
    addMessage () {
      messageRef.push({
        message: this.newMessage
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: 400px;
  margin: 10px auto;
}
</style>
