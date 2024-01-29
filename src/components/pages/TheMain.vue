<template>
    <section class="hero">
        <div class="main">
            <div class="left">
                <h1>Hello Welcom to My Portfolio</h1>
                <h2>I am a<span> Web develper</span></h2>
                <p class="main-description">I can help boost your bussness. 
                    If you wnat to improve your bussnes get in tuch with me 
                </p>
                <div class="socials">
                    <a href="tel:912931771" class="icon">
                        <img src="../../../images/icons/linkedin (1).png" alt="linkedin">
                    </a>
                    <a href="tel:912931771" class="icon">
                        <img src="../../../images/icons/github (2).png" alt="github">
                    </a>
                    <a href="tel:912931771" class="icon">
                        <img src="../../../images/icons/netlify.png" alt="netlify">
                    </a>
                    <a href="tel:912931771" class="icon">
                        <img src="../../../images/icons/telegram (1).png" alt="telegram">
                    </a>
                </div>
                <button @click="downloadPdf" download="download" class="cv-btn">Download PDF</button>
            </div>
            <div class="right">
                <div class="shape">
                    <div class="img">
                        <img src="../../../images/yusufbek-removebg.png" alt="hero img">
                    </div>
                </div>
          </div>
    </div>
    </section>
</template>

<script>
import {saveAs} from 'file-saver';
export default {
    methods: {
        downloadPdf() {
            const pdfUrl = 'https://drive.google.com/file/d/1SZ31resszOFoXSIilVo8CSv-y0eGkEK8/view?usp=drive_link';
            saveAs(pdfUrl, 'cv.pdf')
        }
    }
}

</script>

<style scoped>
.hero {
    padding: 140px 10% 100px;
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
    width:55%;
}
.left h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    letter-spacing: 1px;
    color: #eaeaea;
}
.left h2 {
    margin-bottom: 29px;
    font-size: 1.8rem;
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
  border-top: 3px solid blue;
  border-bottom: 3px solid blue;
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
.shape img {
  top: -100px;
  left: -185px;
  position: relative;
  display: block;
  width: 650px;
  height: 420px;
}

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
    box-shadow: 0 0 20px #383838;
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

