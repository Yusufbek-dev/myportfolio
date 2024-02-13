<template>
    <section>
          
        <div class="portfolio">
            <ul class="portfolio__list">
                <li class="portfolio__list_item">
                  <img src="" alt="" >

                </li>
            </ul>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            webNmae:'',
            webUrl:'',
            img:null,
            imgNmae:'',



        }
    }
}
</script>

<style lang="scss" scoped>
.portfolio {
  &__list {
    display: flex;
    justify-content: space-between;
    &_item {
        width: 100%;
    }
  }

}
</style>
