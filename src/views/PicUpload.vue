
<script>


export default {
    data() {
        return {
            picFile: '',
            filePic: '',
            imageFile: [],
        }
    },
    methods:{
        uploadPic(event){
            
            this.picFile = event.target.files[0];

            if(this.picFile){
                const reader = new FileReader();
                reader.readAsDataURL(this.picFile);
                reader.onload = (e) =>{
                    console.log(e);
                    this.filePic = e.target.result;
                    this.imageFile = [
                        {
                            name: this.picFile.name,
                            path:this.filePic,
                        }
                    ]
                }
            }
        }
    },
};
</script>

<template>
    <input type="file" accept=".jpg, .png" @change="uploadPic">
    <img :src="filePic" alt="" style="height: 300px;">
    <button type="button" class="border-2">上傳圖片</button>

</template>

<style></style>