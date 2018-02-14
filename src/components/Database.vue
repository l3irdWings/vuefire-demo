<template>
  <div class="database">
    <h1><b>Database</b></h1>
    <b-container>
      <b-row>
        <b-col id="left_col">
          <div id="left_inside_div">
            <img src="./../assets/logo.png">
            <img src="./../assets/vue-fire.png" width="200" height="200">
          </div>
        </b-col>
        <b-col id="right_col">
          <div id="right_inside_div">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'database'
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
