
<template>
    <header>
        <div class="logo">
            <a href="#" >
               Yusufbek.<span style="color: #4372e4; font-weight:700;">dev</span>
            </a>
        </div>
        <ul class="nav-list" ref="list">
            <li class="nav-list__item" @click="barClick">
                <a href="#hero" class="link active" @click="addActive">Home</a>
            </li>
            <li class="nav-list__item" @click="barClick">
                <a href="#about" class="link" @click="addActive">About</a>
            </li>
            <li class="nav-list__item" @click="barClick">
                <a href="#portfolio" class="link" @click="addActive">Portfolio</a>
            </li>
            <li class="nav-list__item" @click="barClick">
                <a href="#contact" class="link" @click="addActive">Contact</a>
            </li>
        </ul>
        <div class="bar" ref="bar" @click="barClick">
                <div class="bar-line"></div>
                <div class="bar-line"></div>
                <div class="bar-line"></div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        barClick() {
            const refElement = this.$refs['bar']
            const refList = this.$refs['list']
            refElement.classList.toggle('active')
            refList.classList.toggle('active')
        },
        addActive(event){
            let allLinks = document.querySelectorAll('.link');
            allLinks.forEach(link=>{
                link.classList.remove('active');
            })
            event.target.classList.add('active')
        }
    },
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap');
:root {
    --primary:#c72b3c;
    --second-primary-color:#61CE70;
    --third-primary-color:#06290d;
    --second-color:#d8d8d8;
    --text-color:#6E6E6E;
    --dark-backround:#383838;
    
}
header {
    position: sticky;
    z-index: 99;
    top: 0px;
    width: 100vw;
    padding: 0 7%;
    background:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
              url('../../images/hairis-min.jpg') no-repeat top center;
              background-size:cover;
    /* box-shadow: 0 0 10px wheat; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 11vh;
    max-height: 13vh;
    /* box-shadow: 0px 0px 10px 0px gray; */
}
.logo {
    a {
        color:#a0a0a0;
        font-size: 1.1rem;
     font-family: 'Protest Strike', sans-serif;

        &:hover {
            color: #a0a0a0;
        }
        span {
            font-family: inherit;
        }
    }
}
.nav-list {
    display: flex;
    justify-content: space-between;
}
.nav-list__item {
    margin-left: 35px;
    font-size: 1.3rem;
    transition: 0.2s;
    padding: 0 7px;
}
a {
    font-family:"Poppins", sans-serif;
    position: relative;
    color: #2a2828;
    text-decoration:none;
    color: #a0a0a0;
    padding: 0 10px;
    transition: 0.3s;
}
.link::after {
    transition: 0.3s;
    left: 0;
    bottom: -10px;
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background: #4372e4
}
// .router-link-active::after {
//     width: 100%;
// }
// .router-link-active {
//     color: #fff;
// }
router-link:hover, .active {
    color: #4372e4;
}
.active::after {
    width: 100%;
}
a:hover::after {
    width: 100%;
}
.logo img{
    width: 150px;
    height: 150px;
    cursor: pointer;
}

.bar {
    display: none;
    cursor: pointer;
}
.bar>div {
    transition: 0.3s;
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin-bottom: 5px;
    border-radius: 5px;
}
.bar.active div:nth-child(1){
    transform: translateY(8px) rotate(45deg);
}
.bar.active div:nth-child(2){
    opacity: 0;
}
.bar.active div:nth-child(3){
    transform: translateY(-8px) rotate(-45deg);
}
/* @media (max-width:1024px) {
    header {
        flex-direction: column;
        justify-content: center;
    }
} */
@media (max-width:900px) {
    .bar {
        display: block;
    }
    .nav-list {
        z-index: 100;
        position: absolute;
        top:11vh;
        background-color: #000000ef;
        left: -100%;
        width: 100%;
        min-height:89vh;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: .3s ease all;
    }
    .nav-list.active {
        left: 0;
    }
    header {
        flex-direction: row;
        justify-content: space-between;
    }
    .nav-list__item {
        font-size: 2.5rem;
        margin-left: 0;
    }
    /* .nav-list__item:last-child {
        width: 80vw;
        margin: 0 auto;
    } */
}
@media (max-width:680px) {
    .nav-list {
        height: 87vh;
        justify-self: start;
    }
    .nav-list__item {
        font-size: 1.8rem;
    }
}
</style>