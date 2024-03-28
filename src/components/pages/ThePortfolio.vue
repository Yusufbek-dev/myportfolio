<template>
    <section class="portfoloi" id="portfolio" >
        <h2 class="page-title">My <span>Portfolio</span></h2>
        <p class="sub-title">Each project is a unique piece of development.</p>
        <!-- <div class="portfolio">
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
        </div> -->


        <swiper 
            :breakpoints="{0:{ slidesPerView:1,spaceBetween:15 }, 650:{ slidesPerView:2,spaceBetween:20 }, 950:{ slidesPerView:3, } }"
            :slidesPerView="3"
            :grid="{
            rows: 1,
            }"
            :spaceBetween="30"
            :pagination="{
            clickable: true,
            dynamicBullets:true,
            }"
    
            :grabCursor="ture"
            :modules="modules"
            class="mySwiper"

            
       
        >
            <swiper-slide class="sw">
                <img class="sw-img" src="../../../images/websites/find-coach.jpg" alt="">
                <p class="sw-text">
                    <strong>Find coach:</strong>About find coachs and register as coach.<br> <br>
                    <strong>Tools:</strong> Vue.js, Rooter, Vuex, firebase
                </p>
                <div class="sw-btns">
                    <a href="#">Code</a>
                    <a href="#">See Live</a>
                </div>
            </swiper-slide>
            <swiper-slide class="sw">
                <img class="sw-img" src="../../../images/websites/javascript-r.jpg" alt="">
                <p class="sw-text">
                    <strong>Find a meal and salad:</strong>About find recipes and create recipe <br> <br>
                    <strong>Tools:</strong> javascript.js, html, css, firebase
                </p>
                <div class="sw-btns">
                    <a href="#">Code</a>
                    <a href="#">See Live</a>
                </div>
            </swiper-slide>
            <swiper-slide class="sw">
                <img class="sw-img" src="../../../images/websites/people.jpg" alt="">
                <p class="sw-text">
                    <strong>Consulting Agency:</strong>About Consulting Agency.  Growth Strateg <br> <br>
                    <strong>Tools:</strong> Html, Scss, responsive
                </p>
                <div class="sw-btns">
                    <a href="#">Code</a>
                    <a href="#">See Live</a>
                </div>
            </swiper-slide>
            <swiper-slide class="sw">
                <img class="sw-img" src="../../../images/websites/find-coach.jpg" alt="">
                <p class="sw-text">
                    <strong>Find coach:</strong>This site help find a coach and also you can help other people with your knowlage. <br> <br>
                    <strong>Tools:</strong> Vue.js, Rooter, Vuex, firebase
                </p>
                <div class="sw-btns">
                    <a href="#">Code</a>
                    <a href="#">See Live</a>
                </div>
            </swiper-slide>
            <swiper-slide class="sw">
                <img class="sw-img" src="../../../images/websites/find-coach.jpg" alt="">
                <p class="sw-text">
                    <strong>Find coach:</strong>This site help find a coach and also you can help other people with your knowlage. <br> <br>
                    <strong>Tools:</strong> Vue.js, Rooter, Vuex, firebase
                </p>
                <div class="sw-btns">
                    <a href="#">Code</a>
                    <a href="#">See Live</a>
                </div>
            </swiper-slide>
            <swiper-slide class="sw">
                <img class="sw-img" src="../../../images/websites/find-coach.jpg" alt="">
                <p class="sw-text">
                    <strong>Find coach:</strong>This site help find a coach and also you can help other people with your knowlage. <br> <br>
                    <strong>Tools:</strong> Vue.js, Rooter, Vuex, firebase
                </p>
                <div class="sw-btns">
                    <a href="#">Code</a>
                    <a href="#">See Live</a>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import "swiper/css"


////////////////////


  import 'swiper/css/grid';
  import 'swiper/css/pagination';


  // import required modules
  import { Grid, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Grid, Pagination],
      };
    },
  };

</script>

// <style lang="scss" scoped>
.portfoloi {
    padding-top: 11vh;
    min-height: 89vh;
}
.swiper {
    // width: 80%;
    margin: 40px 8%;
    // padding: 40px auto;
    @media (max-width: 605px) {
        margin: 40px 5%;
    }
}
.sw {
    width: 200px;
    display: flex;
    flex-direction:column;
    gap: 20px;
    overflow: hidden;
    padding-bottom: 50px;
    a {
        color: #eaeaea;
        background-color: #4372e4;
        display: inline-block;
        padding: 7px 11px;
        border-radius:20px;
        margin-right: 15px;
        font-size: .9rem;
        transition: all .3s;
        border:1.5px solid #4372e4;
        &:hover {
            cursor: pointer;
            color: #4372e4;
            background-color: #eaeaea;

        }
    }
}
.sw-img {
    max-width: 100%;
    max-height: 100%;
    transition: all .3s;
    &:hover {
        transform: scale(1.1);
    }
}
// .portfolio {
//     display: flex;
//     padding: 40px 10% 20px;
//     min-height: 89vh;
//     &__list {
//         display: flex;
//         justify-content: space-between;
//         &_item {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             overflow: hidden;
//             img {
//                 max-width: 100%;
//                 transition: all .3s;
//                 &:hover {
//                     transform: scale(1.2);
//                 }
//             }
//         }
//     }
//     .info {
//         padding-top: 20px;
//         display: flex;
//         flex-direction: column;
//         row-gap: 10px;
//         background-color: #373838;
//         &__title {
//             color: #eaeaea;
//             font-size: .9rem;
//             padding: 10px 0;
//         }
//         &__desc {
//             color: #eaeaea;
//             font-size: .7rem;
//         }
//         &__btns {
//             display: flex;
//             column-gap: 10px;   
//         }
//         &__btn {
//             padding: 10px 20px;
//             color: #4372e4;
//             color: #eaeaea;
//             transition: all .3s;
//             &:hover {
//                 opacity: .9;
//                 color: #fff;
//             }
//         }
//     }
// }
</style>