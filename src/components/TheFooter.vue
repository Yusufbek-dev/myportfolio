<template>
    <footer>
        <div class="footer">
            <div class="footer-text">
                <div class="logo">
                    <a href="#">
                        Yusufbek.<span>dev</span>
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
                    <a href="tel:998912931771"><img src="../../images/icons/phone1.png" alt="phone"></a>
                    <a href=""> <img src="../../images/icons/telegram (1).png" alt="telegram"></a> 
                    <a href="https://www.linkedin.com/in/yusufbek-008914246/"><img src="../../images/icons/linkedin (1).png" alt="linkedin"></a>
                </div>
            </div>
        </div>
        <p>All right reserved © 2024 Yusufbek.dev </p>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    padding: 15px 8% 25px; 
    background:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
              url('../../images/hairis-min.jpg') no-repeat bottom center;
              background-size:cover;

    .logo {
      a {
        color:#a0a0a0;
        font-size: 1rem;
        font-family: 'Protest Strike', sans-serif;
        &:hover {
            color: #a0a0a0;
        }
        span {
              font-family: inherit;
              color: #4372e4;
            }
        }
        @media (max-width: 605px) {
            display: block;
            text-align: center;
            margin-bottom: 5px;
        }
    }
    .footer-text {
        p {
            color: #6E6E6E;
        }
    }
    .footer {
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        .social-title {
        font-size: 1.2rem;
        color:#d7d7d7;
        text-align: start;
    }
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
        @media (max-width: 605px) {
            flex-direction: column;
            row-gap: 20px;
            align-items: center;
            .contact-social {
                div {
                    padding-top: 7px; 
                    display: flex;
                column-gap: 30px;
                }
                
            }
            .social-title {
                text-align: center;
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