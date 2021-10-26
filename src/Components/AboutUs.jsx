import React from "react"
import { NavLink } from "react-router-dom"

function AboutUs(){
    return(
        <div className="about_wrapper">
                <div className="about_contacts">
                    <h1>Наши контакты</h1>
                    <h3>Адрес</h3>
                    <p>220035, РБ, Минск, пр. Дзержинского, 65, 1 этаж</p>
                    <h3>Время работы</h3>

                    <p>10.00 - 22.00 <br/> БЕЗ ВЫХОДНЫХ</p>

                    <h3>Контакты для связи</h3>
                    <NavLink to="tel:+375(44)4444444">+375 44 444 44 44</NavLink>
                    <div className="about_map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4703.108285954958!2d27.515659!3d53.886354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd00486051cb5%3A0x6694b57b08476e2e!2z0L_RgNC-0YHQv9C10LrRgiDQlNC30LXRgNC20LjQvdGB0LrQvtCz0L4gMTksINCc0LjQvdGB0LogMjIwMDg5!5e0!3m2!1sru!2sby!4v1634125466798!5m2!1sru!2sby" style={{width: 100+"%", height:400+"px"}}></iframe></div>
                </div>



            <div className="about_description" id="part2">
            <h2>Sony WH-H910N hear on 3 WirelessNoise Cancelling <br/> Headphones (Original) from Sony Malaysia</h2>
            <ul>
                <li>The new Sony wh-h910n H. Ear range comes in five two-tone colour combinations to suit your look</li>
                <li>Features noise cancelling with dual noise sensor</li>
                <li>35 hours of battery life. 2.5 hours power with 10 minute quick-charge</li>
                <li>Quick attention to immediately reduce music volume and catch conversation</li>
                <li>Quick attention to immediately reduce music volume and catch conversation</li>
                <li>Compatible with Alexa, Google Assistant and Siri</li>
            </ul>
            <h3 id="part1">Description</h3>
                <p>The new Sony WH-H910N h. Ear range comes in a choice of five two-tone colour combinations to suit your lifestyle perfectly. With different colours on the headphone and ear pad, you can truly find a unique and individual look. Try them with your favourite outfit or accessories and it all just works – effortless harmony. With super-slim ear pads and a silicone headband that fits closer around the head, these WH H910N headphones stay comfortable all-day long. Light and compact, they fold up when not in use for easy storage in a case or bag. Enjoy your music on the WH-H910N headphones without any interruptions from the outside world with noise-cancelling technology. It blocks out external sounds so you can focus on what you're listening to and fully immerse yourself in your tunes. Dual noise cancellation microphones – one feed-forward and one feed-back – on the surface of the headphones catch more of the ambient sounds of your surroundings, whether it’s in-flight noise, city traffic or office chatter.</p>
                 <p >The Sony | Headphones Connect app offers Adaptive Sound Control, a smart function that automatically detects what you’re up to – for example, travelling, walking, or waiting – then adjusts ambient sound settings to suit the situation. You can also customise the settings to your preferences. With 35 hours of battery life with noise cancelling on, you’ll have enough power for even long trips away. Without noise cancelling you can even stretch to 40 hours of battery life. And if you need to charge in a hurry, you can get 2.5 hours worth of charge after just 10 minutes with the optional AC adapter or any good quality USB adapter. </p>
                 <p>The Sony WHH910N headphones let you hear those mp3 tunes like you've never heard them before. While mp3 compresses the original audio file, compromising quality, Sony's innovative DSEE HX technology upscale your files, so you can hear every glorious element of the mix, just as the artist intended.</p>
                 <p> Sony's LDAC audio coding technology transfers three times more data than standard Bluetooth audio, making everything from the vocals to the percussion sound crisp, punchy, and clear. And even when you're not using your headphones wirelessly, the handy detachable cable will also play high-resolution audio, giving you consistent quality. Answer phone calls, control music and activate Google Assistant or Siri – all using simple touch controls on the H910N headphones. Need to have a quick conversation? Hold your hand over the touch sensor, and the music quietens while sound from your environment gets louder.</p>
            </div>
                    <div className="about_description_img">
                        <img src="../images/pageSony2.png" alt="#" />        
                        <img src="../images/pageSony4.png" alt="#" />
                    </div>
        </div>
    )
}
export default AboutUs