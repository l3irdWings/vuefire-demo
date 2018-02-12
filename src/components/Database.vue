<template>
  <div class="database">
    <h1><b>Database</b></h1>
    <b-container>
      <b-row>
        <b-col id="input_col">
          <div id="new_message_div">
            <img src="./../assets/logo.png">
            <img src="./../assets/vue-fire.png" width="200" height="200">
            <b-form-input id="new_message_input" type="text" v-model="newMessage" required placeholder="Write Comment"></b-form-input>
            <b-button id="new_message_button" v-on:click="addMessage()">Send</b-button>
          </div>
        </b-col>
        <b-col id="output_col">
          <div id="messages_div">
            <b-badge v-for="message in messages" v-bind:key="message['.key']"><h4>{{ message.message }}</h4></b-badge>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {db} from '../firebase'

export default {
  name: 'database',
  data () {
    return {
      newMessage: ''
    }
  },
  firebase: {
    messages: db.ref('message')
  },
  methods: {
    addMessage () {
      this.$firebaseRefs.messages.push({
        message: this.newMessage
      })
      this.newMessage = ''
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  span.badge {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px 10px 0;
  }
  #input_col {
    position: relative;
    height: 500px;
  }
  #new_message_div {
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    height: 320px;
    margin-top: -160px;
  }
  #new_message_input {
    margin-top: 10px;
    height: 50px;
  }
  #new_message_button {
    height: 50px;
    margin-top: 10px;
  }
  #output_col {
    position: relative;
    height: 500px;
  }
  #messages_div {
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    height: 320px;
    margin-top: -160px;
  }
</style>
