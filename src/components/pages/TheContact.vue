<template>
    <section>
    <h2 class="page-title">Contact <span>me</span></h2>
        <div class="contact">
            <div class="contact__left">
                <h3 class="send-message">Send a Message</h3>
                <form action="">
                    <input type="text" placeholder="Your name" required>
                    <input type="email" placeholder="Your email" required>
                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
                    <input type="submit" value="send">
                </form>
            </div>
            <div class="contact__right">
                <h3 class="contact-info">
                    Contact info
                </h3>
                <div class="contact-items">
                    <p class="location"><span>Locaton:</span> Uzbekistan, Tashekent</p>
                    <p><span>Email:</span><a href="mailto:yusufbek.dev@gmail.com">Yusufbek.dev@gmail.com</a></p>
                    <p><span>Tel:</span><a href="tel:912931771">+998912931771</a></p>
                </div>
                <iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.6696829433!2d69.19696657458032!3d41.28256807305834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1710421393785!5m2!1sen!2s" 
                    width="400" height="300" 
                    style="border:0;"
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
  section {
    padding:0 8%;
  }
  .contact {
    padding: 70px 0;
    display: flex;
    justify-content: space-between;
   
    &__left {
        width: 45%;
        .send-message {
            margin-bottom: 15px;
        }
        form {
        
            input {
                width: 80%;
                padding: 12px 20px;
                border-radius: 5px;
                margin-bottom: 20px;
                background-color: #2a2828;
                color: #a0a0a0;
                font-size: 1rem;
                border: none;
                &::placeholder {
                    color: #a0a0a0;
                    font-size: 1.1rem;
                    
                }
                &:focus{
                    background-color: #a0a0a0;
                    color: #2a2828;
                    font-size: 1rem;
                    outline: none;
                    &::placeholder {
                        color: #2a2828;
                    }
                }
            }
            input[type=submit] {
                margin:20px 0 0;
                width: 35%;
                font-size: 1.1rem;
                font-weight: 700;
                background-color: #a0a0a0;
                color: #2a2828;
                cursor: pointer;
                transition: .3s all;
                &:hover {
                    background-color: #2a2828;
                    color: #a0a0a0;
                }
            }
            textarea {
                padding: 15px;
                font-size: 1.1rem;
                width: 80%;
                border:#00000092 solid 1.5px;
                border-radius: 5px;
                resize: none;
                &:focus {
                    outline: none;
                }
            }
        }
        @media (max-width: 950px) {
            width: 50%;
            form {
                input,textarea {
                    width: 95%;
                }
            }
        }
    }
    &__right {
        width: 45%;
        .contact-info {
            color: #000;
            font-size: 1.2rem;
            margin-bottom: 15px;
        }
        .contact-items {
            display: flex;
            padding-bottom: 20px;
            flex-direction: column;
            row-gap: 15px;
            p {
                color: #000;
                &>span {
                    font-weight: 700;
                }
                a {
                    color: #000;
                }
            }
        }
        .map {
            width: 85%;
        }
        @media (max-width:950px) {
            width: 48%;
            .map {
                width: 100%;
            }
        }
        @media (max-width: 650px) {
            
        }
    }
    @media (max-width: 650px) {
        flex-direction: column;
        row-gap: 20px;
        &__left {
            width: 100%;
        }
        &__right {
            width: 100%;
        }
    }

  }
</style>
