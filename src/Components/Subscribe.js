import React from 'react'
import '../Styles/Subscribe.css'

function Subscribe() {
    return (
        <div className="forMore"> For Monthly Updates, Please Subscribe
            <div class="contain1">
                <input className= 'subscribe' type="text" placeholder="Email address" name="mail" required />
                <p><button onClick={() => alert("Thank you for Subscribing!")}> Subscribe </button></p>
            </div> OR Email Us
            <div class="contain1">
            <p><a href='mailto:shanicanikad@gmail.com'><button> Email </button></a></p>
            </div>
        </div>
    )
}

export default Subscribe