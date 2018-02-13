<template>
  <div class="firestore">
    <h1><b>Firestore</b></h1>
    <b-container>
      <b-row>
        <b-col id="left_col">
          <div id="left_inside_div">
            <img src="./../assets/logo.png">
            <img src="./../assets/vue-fire.png" width="200" height="200">
            <b-form-input id="new_message_input" v-model="newMessage" required placeholder="Write Comment"></b-form-input>
            <b-button id="new_message_button" v-on:click="addMessage()">Send</b-button>
          </div>
        </b-col>
        <b-col id="right_col">
          <div id="right_inside_div">
            <b-badge v-for="message in messages" v-bind:key="message['.key']"><h4>{{ message.message | to-uppercase }}</h4></b-badge>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {firestore} from '../firebase'

export default {
  name: 'firestore',
  data () {
    return {
      newMessage: ''
    }
  },
  firestore: {
    messages: firestore.collection('message')
  },
  methods: {
    addMessage () {
      if (this.newMessage !== '') {
        this.$firestore.messages.add({
          message: this.newMessage
        })
        this.newMessage = ''
      }
    }
  },
  filters: {
    toUppercase (value) {
      return value.toString().toUpperCase()
    }
  },
  mounted () {
    window.addEventListener('keyup', event => {
      if (event.keyCode === 13) {
        this.addMessage()
      }
    })
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
  #new_message_input {
    margin-top: 10px;
    height: 50px;
  }
  #new_message_button {
    height: 50px;
    margin-top: 10px;
  }
</style>
