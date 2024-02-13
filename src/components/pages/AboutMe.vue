<template>
    <section>
        <h2 class="page-title">About <span>Me</span></h2>
        <div class="about">
            <div class="about__left">
                <img src="../../../images/d-about.jpg" alt="">
            </div>
            <div class="about__right">
                <p class="about__right_text">&nbsp;
                    I am a front-end web developer with a passion for building beautiful and user-friendly
                    websites. I have a strong understanding front-end development, and excited to put 
                    my skills to use in a professional setting. I am fast learner, team player, and I am 
                    confident that I can be a valuable asset to any web development team.
                </p>
                <p class="about__right_text" style="padding-top:15px">
                    &nbsp; In my free time, I enjoy reading, watching movies, and collecting <a href="">quotes</a>. I spend quality time with my loved ones.
                </p>

                <div class="about-info">
                    <div class="about-info__item">
                        <p class="name">NAME</p>
                        <p>Yusufbek Yuldashev</p>
                    </div>
                    <div class="about-info__item">
                        <p class="name">EMPLOYMENT</p>
                        <p>Open</p>
                    </div> 
                    <div class="about-info__item">
                        <p class="name">EMAIL</p>
                        <a href="mailto:yusufbek.dev@gmail.com" class="email">Yusufbek.dev@gmail.com</a>
                    </div> 
                    <div class="about-info__item">
                        <p class="name">PHONE</p>
                        <a href="tel:+998912931771" class="number">+99891931771</a>
                    </div>  
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    display: flex;
    justify-content: space-between;
    min-height: 89vh;
    padding: 80px 10%;
    &__left {
        width: 45%;
        display: block;
        img {
            width: 500px;
            height: 530px;
            transition: all .3s;
            &:hover {
                transform:scale(1.1) rotate(5deg);
                box-shadow: 10px 10px 10px #383838;
            }
        }
    }
    &__right {
        width: 48%;
        &_text {
            font-size: 1.4rem;
            color: #383838;
            text-align:justify;
            letter-spacing: 1.5px;
            line-height: 1.6;
            a {
                color: #4372e4;
                text-decoration: underline;
            }
        }
    }
    .about-info {
        padding-top: 40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        &__item {
            width: 45%;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            .name {
                color: #383838;
                font-weight: 600;
            }
            p,a {
                font-size: 1rem;
                color: #383838;
                font-weight: 200;
            }
        }
    }
}

</style>