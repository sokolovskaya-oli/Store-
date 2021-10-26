import React from "react";

function PackBox(){
    return(
        <section>
            <div className="packbox_wrapper">
                <span className="packbox_img"><img src="../images/headphones-pack.svg" alt="headphones pack" /></span>
                <div className="packbox_description">
                        <h1>Whatever you get in the box</h1>
                        
                        <div className="packbox_description_part">
                            <span><img src="../images/pointer.svg" alt="#" /></span>
                            <h2>5A Charger</h2>
                        </div>
                        <div className="packbox_description_part">
                        <span><img src="../images/pointer.svg" alt="#" /></span>
                            <h2>Extra battery</h2>
                        </div>
                        <div className="packbox_description_part">
                        <span><img src="../images/pointer.svg" alt="#" /></span>
                            <h2>Sophisticated bag</h2>
                        </div>
                        <div className="packbox_description_part">
                        <span><img src="../images/pointer.svg" alt="#" /></span>
                            <h2>User manual guide</h2>
                        </div>
                </div>

            </div>
        </section>
    )
}
export default PackBox