import {mapActions, mapGetters} from "vuex";

export default {
    computed: {
      ...mapGetters('upload', ['singleUploadImageLink'])
    },
    methods: {
        ...mapActions('upload', ['singleUpload']),
        async uploadImageDataNetworkCall ($apollo, file) {
            try {
                const isUploadSuccess = await this.singleUpload({ $apollo, file: file, jwt: this.$store.state.auth.jwt })

                if (isUploadSuccess) {
                    this.$notifier.showMessage({
                        content: 'Image upload success',
                        color: 'success'
                    })
                    return this.singleUploadImageLink
                } else {
                    this.$notifier.showMessage({
                        content: 'Could not upload',
                        color: 'error'
                    })
                    return ''
                }
            } catch (err) {
                console.log(err.message)
            }
        }
    }
}
