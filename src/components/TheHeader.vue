<!-- <template>
    <header>
      <nav class="nav">
        <div>
            <a href="#" class="logo">
                <img src="../../images/yusuf.png" alt="Yusuf logo">
            </a>
        </div>
        <ul class="nav-list">
            <li class="nav-list__item">
                <a href="#">Home</a>
            </li>
            <li class="nav-list__item">
                <a href="#">About</a>
            </li>
            <li class="nav-list__item">
                <a href="#">Portfolio</a>
            </li>
            <li class="nav-list__item">
                <a href="#">Service</a>
            </li>
            <li class="nav-list__item">
                <a href="#">Contact</a>
            </li>
        </ul>
      </nav>

    </header>
</template>

<script>
export default {

}
</script>

<style scoped>



header {
    position: sticky;
    height: 14vh;
    background-color:#383838;
}
.logo img{
    width: 140px;
    height: 140px;
    display: block;
}
.nav {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 20px;
}
.nav-list__item a{
    position: relative;
    font-size: 1.4rem;
    color:#d8d8d8;
}
.nav-list__item a::after{
        transition: 0.3s;
        left: 0;
        bottom: -10px;
        content: "";
        position: absolute;
        width: 0%;
        height: 3px;
        background-color: rgb(134, 35, 227);

}
.nav-list__item {
    margin-right: 60px;
}
.nav-list__item:last-child{
    margin-right: 0;
}

</style> -->


<template>
    <header>
        <div class="logo">
            <a href="home" >
                Yusufbek.dev
            </a>
        </div>
        <ul class="nav-list" ref="list">
            <li class="nav-list__item" @click="barClick">
                <a to="home" class="link" href="#">Home</a>
            </li>
            <li class="nav-list__item" @click="barClick">
                <a href="service" class="link">About</a>
            </li>
            <li class="nav-list__item" @click="barClick">
                <a to="contact" class="link" href="#">Portfolio</a>
            </li>
            <li class="nav-list__item" >
                <a href="#" class="link">Contact</a>
            </li>
        </ul>
        <div class="bar" ref="bar" @click="barClick">
                <div class="bar-line"></div>
                <div class="bar-line"></div>
                <div class="bar-line"></div>
        </div>
    </header>
</template>
📞
<script>
export default {
    methods: {
        barClick() {
            const refElement = this.$refs['bar']
            const refList = this.$refs['list']
            refElement.classList.toggle('active')
            refList.classList.toggle('active')
        },
    }
}

</script>

<style scoped>
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
    top: 0px;
    width: 100vw;
    padding: 0 5%;
    background:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
              url('../../images/hairis-min.jpg') no-repeat top center;
              background-size:cover;
    /* box-shadow: 0 0 10px wheat; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13vh;
    /* box-shadow: 0px 0px 10px 0px gray; */
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
    color: rgb(42, 40, 40);
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
    background: linear-gradient(90deg, rgba(255,61,61,1) 0%, rgba(92,0,0,1) 100%, rgba(255,61,61,1) 100%);
}
.router-link-active::after {
    width: 100%;
}
.router-link-active {
    color: #fff;
}
a:hover {
    color: #c72b3c;
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
        top:13vh;
        background-color: #000000ef;
        left: -100%;
        width: 100%;
        height:87vh;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: .3s ease all
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