
<script>
export default {
    data() {
        return {
            picfile: '',
            filepic: '',
        }
    },
    methods:{
        uploadPic(event){
            
            this.picfile = event.target.files[0];
            console.log(this.picfile);

            if(this.picfile){
                const reader = new FileReader();
                reader.onload = () =>{

                }
            }
        }
    },
};
</script>

<template>
    <input type="file" accept=".jpg, .png" @change="uploadPic()">
    <button type="button" class="border-2">上傳圖片</button>

</template>

<style></style>