<template>
    <footer>
        <div class="footer">
            <div class="footer-text">
                <div class="logo">
                    <a href="#">
                        Yusufbek.dev
                    </a>
                </div>
                <p>
                    A dedicated Front-end Developer <br>
                    based in Uzbekistan, Tashkent ⛳︎
                </p>
            </div>
            <div class="contact-social">
                <p class="social-title">Contact</p>
                <div>
                    <a href="https://www.linkedin.com/in/yusufbek-008914246/">
                        <img src="../../images/icons/linkedin (1).png" alt="linkedin">
                    </a>
                    <a href="tel:998912931771"><img src="../../images/icons/phone1.png" alt="phone"></a>
                <a href=""> <img src="../../images/icons/telegram (1).png" alt=""></a> 
                </div>
            </div>
        </div>
        <p>All right reserved © 2024 Yusufbek.dev </p>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    padding: 15px 10% 25px; 
    background:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
              url('../../images/hairis-min.jpg') no-repeat bottom center;
              background-size:cover;

    .logo {
        padding-bottom: 5px;
        a {
            color: #d7d7d7;
            transition: all .3s;
            &:hover {
                color: #fff;
            }
        }
    }
    .footer-text {
        p {
            color: #6E6E6E;
        }
    }
    .social-title {
        font-size: 1.2rem;
        color:#d7d7d7;
        text-align: start;
    }
    .footer {
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        .contact-social {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            &>div {
                display: flex;
                column-gap: 13px;

            }
            a {
                display: flex;
                align-items: center;
                img {
                    width:30px;
                    height: 30px;
                }
                color: #6E6E6E;
                cursor: pointer;
                transition: all .2s ease-out;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
    &>p {
        padding-top: 10px;
        border-top: 1px solid #6E6E6E ;
        text-align: center;
        color: #6E6E6E;
    }
}
</style>