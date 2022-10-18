<template>
<div>
    <h1 class="title">About</h1>
    <br><br>
    <div class="background1">
        <div class="bgcolor">
            <div class="abs">
                <div class="box">
                    
                    <h4>     
                        We are third year students of System information engeneering.
                        This website was developed by:
                        Eitan Chertok and Ehud Malul
                        as part of web development course.

                        we are well experienced with html, node js, vue.
                        We can define ourselfs as fullstack developers.
                        other project we have developed in this course are:
                        <ol>
                            <li>third age website</li>
                            <li>pacman game using dhtml and js</li>
                        </ol>
                        Thank you for visit our website.
                    
                        This website is the best food website in the world!!
                        We are good at marketing..but this time we dont have to do
                        nothing, check by yourselfs.
                    </h4>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "AboutPage",
}
</script>
<style lang="scss" scoped>




.background1{
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
}
.bgcolor {
//     position:absolute;
//     width:100%;
//     height:100%;
//     top:0px;
//     left:0px;
//     bottom:0px;
//     right:0px;
    background-color:#000000;
    opacity:0.5;
}
.abs {
    width: 100%;
    position:absolute;
}
.box {
    width: 60%;
    margin: auto;
    min-width:220px;
    min-height:80px;
    background:#ffffff;
    border:1px solid grey;
    padding:20px;
    -webkit-border-radius:10px;
    border-radius:10px;
    -webkit-box-shadow:#333 5px 5px 2px;
}

</style>