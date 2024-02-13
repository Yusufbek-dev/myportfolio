<template>
    <section>
        <h2 class="page-title">My <span>Portfolio</span></h2>
        <div class="portfolio">
            <ul class="portfolio__list">
                <li class="portfolio__list_item">
                    <img src="../../../images/websites/visa4uzb.jpg" alt="" class="img">
                    <div class="info">
                        <p class="info__title">Find coach web app</p>
                        <p class="info__desc"> Tools:Vue.js, vuex, router, outherty,</p>
                        <div class="info__btns">
                            <a class="info__btn" href="https://github.com/Yusufbek-dev/Find-coach">see code on gitHub</a>
                            <a href="https://coach-finder-for-devs.netlify.app/coaches" class="info__btn">see online</a>
                        </div>
                    </div>
                </li>
                <li class="portfolio__list_item">
                    <img src="../../../images/websites/visa4uzb.jpg" alt="" class="img">
                    <div class="info">
                        <p class="info__title">Find coach web app</p>
                        <p class="info__desc"> Tools:Vue.js, vuex, router, outherty,</p>
                        <div class="info__btns">
                            <a class="info__btn" href="https://github.com/Yusufbek-dev/Find-coach">see code on gitHub</a>
                            <a href="https://coach-finder-for-devs.netlify.app/coaches" class="info__btn">see online</a>
                        </div>
                    </div>
                </li>
                <li class="portfolio__list_item">
                    <img src="../../../images/websites/visa4uzb.jpg" alt="" class="img">
                    <div class="info">
                        <p class="info__title">Find coach web app</p>
                        <p class="info__desc"> Tools:Vue.js, vuex, router, outherty,</p>
                        <div class="info__btns">
                            <a class="info__btn" href="https://github.com/Yusufbek-dev/Find-coach">see code on gitHub</a>
                            <a href="https://coach-finder-for-devs.netlify.app/coaches" class="info__btn">see online</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.portfolio {
    display: flex;
    padding: 40px 10% 20px;
    min-height: 89vh;
    &__list {
        display: flex;
        justify-content: space-between;
        &_item {
            width: 30%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            img {
                max-width: 100%;
                transition: all .3s;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
    .info {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        background-color: #373838;
        &__title {
            color: #eaeaea;
            font-size: .9rem;
            padding: 10px 0;
        }
        &__desc {
            color: #eaeaea;
            font-size: .7rem;
        }
        &__btns {
            display: flex;
            column-gap: 10px;
        }
        &__btn {
            padding: 10px 20px;
            color: #4372e4;
            color: #eaeaea;
            transition: all .3s;
            &:hover {
                opacity: .9;
                color: #fff;
            }
        }
    }
}
</style>