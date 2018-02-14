<template>
  <div class="storage">
    <h1><b>Storage</b></h1>
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
  name: 'storage',
  methods: {
    uploadImage () {
      let self = this
      let task = storage.ref(`/image/${this.newImage.name}`).put(this.newImage)
      task.on('state_changed',
        function progress (snapshot) {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(`Upload is ${percentage}% done`)
        },
        function error (err) {
          console.log(err)
        },
        function complete () {
          console.log('complete upload')
          // Upload completed successfully, now we can get the download URL
          const storageLocation = `gs://${storage.ref().bucket}/image/${self.newImage.name}`
          storage.refFromURL(storageLocation).getDownloadURL().then(url => {
            self.$firebaseRefs.images.push({
              storage_location: storageLocation,
              url: url
            })
          })
        }
      )
    }
  }
}
</script>

<style scoped>
  #new_image_input {
    margin-top: 10px;
    height: 50px;
  }
  #new_image_button {
    height: 50px;
    margin-top: 10px;
  }

</style>
