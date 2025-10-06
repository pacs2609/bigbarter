<template>
<section class="pages">
    <div class="container vdo">
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="p-3">
                        <iframe src="//www.youtube.com/embed/sAG3ObO7i1o" width="100%" height="360px" frameborder="0"></iframe>
                        <!-- <img style="margin-bottom :20px;" class="img-responsive" src="images/vdo/01.jpg"> -->
                        <a data-toggle="modal" data-target="#Modal-vdo01" style="cursor:pointer;" onclick="at('sAG3ObO7i1o')">
                            <p class="text-primary text-center">แนะนำการใช้งาน BarterGang</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="p-3">
                        <iframe src="//www.youtube.com/embed/4r_5tQd8IuU" width="100%" height="360px" frameborder="0"></iframe>
                        <!-- <img style="margin-bottom :20px;" class="img-responsive" src="images/vdo/01.jpg"> -->
                        <a data-toggle="modal" data-target="#Modal-vdo01" style="cursor:pointer;" onclick="at('4r_5tQd8IuU')">
                            <p class="text-primary text-center">BarterGang Ep.1</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'default'
})
</script>

<style>

</style>
