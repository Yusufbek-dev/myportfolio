<template>
    <section class="hero">
        <div class="main">
            <div class="left">
                <h4>Hello,</h4>
                <h1>
                    I am A <VueWriter :array="arr" />
                </h1>
               
                <p class="main-description">Thank you for visiting! I'm developing creative & Interactive websites.
                    Reach out if you'd like to learn more!
                </p>
                <div class="socials">
                    <a href="https://www.linkedin.com/in/yusufbek-008914246/" class="icon">
                        <img src="../../../images/icons/linkedin (1).png" alt="linkedin">
                    </a>
                    <a href="https://github.com/Yusufbek-dev" class="icon">
                        <img src="../../../images/icons/github (2).png" alt="github">
                    </a>
                    <a href="https://app.netlify.com/teams/yusufbek01" class="icon">
                        <img src="../../../images/icons/netlify.png" alt="netlify">
                    </a>
                    <a href="https://t.me//Yusufbek_dev" class="icon">
                        <img src="../../../images/icons/telegram (1).png" alt="telegram">
                    </a>
                </div>
                <button @click="downloadPdf" download="download" class="cv-btn">Download CV</button>
            </div>
            <div class="right">
                <div class="shape"  @mouseenter="imgChange" @mouseleave="imgChange">
                    <div class="name" :class="{show:displayItem}">I'm
                       Yusufbek <br>A Web Developer <br><button>Contact me</button>
                    </div>
                    <img class="img" src="../../../images/yusufbek-removebg.png" alt="hero img">ß
                   
                </div>
          </div>
       </div>
       <div class="tech-stack">
        <p>Tech Stack</p>
        <div class="stacks">
            <img src="../../../images/icons/html.png" alt="html" />
            <img src="../../../images/icons/css3.png" alt="css3" />
            <img src="../../../images/icons/sass240.png" alt="sass" />
            <img src="../../../images/icons/js240.png" alt="javascript" />
            <img src="../../../images/icons/bootstrap6.png" alt="bootstrap" />
            <img src="../../../images/icons/v240.png" alt="vue" />
        </div>
    </div>
    </section>
</template>

<script>
import {saveAs} from 'file-saver';
export default {
    data() {
        return {
              displayItem:false,
              arr: ["Frontend Developer", "Freelancer"]
        }
    },
    methods: {
        downloadPdf() {
            const pdfUrl = 'https://drive.google.com/file/d/1SZ31resszOFoXSIilVo8CSv-y0eGkEK8/view?usp=drive_link';
            saveAs(pdfUrl, 'cv.pdf')
        }, 
        imgChange(){
            // const showEl = this.$el.querySelector('.name');
            // showEl.classList.toggle('show');
            return this.displayItem = !this.displayItem
        },
    }

}

</script>

<style scoped lang="scss">


.hero {
    padding: 140px 10% 100px;
    min-height: 89vh;
    background:linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
              url('../../../images/hairis-min.jpg') no-repeat center center;
              background-size:cover;


}
.main {
    width:100%;
    display: flex;
    justify-content: space-between;
    /* background-color:rgba(24, 23, 23, 0.76); */
}
.left {
    padding-right: 40px;
    width:59%;
}
.left h1 {
    display: flex;
    column-gap: 10px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    letter-spacing: 1px;
    color: #eaeaea;
}
.left h4 {
    margin-bottom: 9px;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #eaeaea;
}
h2>span {
    color: #c72b3c;
}
.main-description {
    margin-bottom: 40px;
    font-size: 1.3rem;
    letter-spacing: 1px;
    line-height: 30px;
    color: #eaeaea;
}


.right {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-top: 3px solid #4372e4;
  border-bottom: 3px solid #4372e4;
  width: 330px;
  height: 330px;
  border-radius: 50%;
  animation: bgchange ease 2s 0s infinite forwards;
}


.shape {
  z-index: 99;
  position: relative;
  transform: rotate(60deg);
  overflow: hidden;
  width: 280px;
  height: 280px;
  border-radius: 60% 60% 60% 60%;
  overflow: hidden;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #000000,
    #434343
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #000000, #434343);
  animation: change ease 2s 0s infinite forwards;
}

.shape {
    .img {
        top: -100px;
        left: -185px;
        position: relative;
        display: block;
        width: 650px;
        height: 420px;
        z-index: 101;
    }
    .name {
        z-index: 100;
        position: relative;
        background: linear-gradient(to right, #000000, #434343);
        color: #4372e4;
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 30% 20%;
        width: 650px;
        height: 420px;
        font-size: 1.6rem;
        button {
            padding: 10px 14px;
            border-radius: 5px;
            color: #fff;
            background-color: #4372e4;
            border: none;
            cursor: pointer;
        }
    }
    .name.show {
        animation: showUp .4s ease-in-out forwards;
        display: block;
    }
}
@keyframes showUp {
    0% {
        opacity: 0.3;
        display: block;
    }
    50%{
        opacity: 0.6;
    }
    100% {
        opacity: 1;
        display:block;
    }
}
// .show {
//     animation: showUp .3s ease-in-out forwards;
// }
.cv-btn {
    padding: 10px 15px;
    background-color:#383838;
    color: #eaeaea;
    border-radius: 20px;
    border:1px solid #383838;
    cursor: pointer;
    font-size: 1rem;
    transition: all ease-out .2s;
}
.cv-btn:hover{
  transform: scale(.966);
  color:#fff;
  background-color:#2c2c2c;
}
/* icons */

.socials {
    margin-bottom: 40px;
    width: 250px;
    display: flex;
    justify-content: space-between;
}

.icon img {
    width: 40px;
    height: 40px;
}
.icon {
    transition: all ease-out .1s;
}
.icon:hover {
    transform: scale(1.1);
}


.tech-stack {
  width: 60%;
  padding: 50px 0% 0;
  display: flex;
  justify-content: start;
  column-gap: 40px;
  align-items: center;
  p {
    color: #eaeaea;
    font-size: 1.4rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;
    img {
      min-width: 60px;
      min-height: 60px;
      display: block;
      max-width: 70px;
      max-height: 70px;
    }
  }
}



@keyframes bgchange {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    
}
@keyframes change {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
    
}
</style>

