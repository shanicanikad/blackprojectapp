import React from 'react'
import '../Styles/Subscribe.css'

function Subscribe() {
    return (
        <div className="forMore">
            <div class="contain1">
                <form action="https://formsubmit.co/shanicanikad@gmail.com" method="POST">  For Monthly Updates, Please Subscribe
                <br />
                    <input type="text" placeholder="Email address" name="mail" required />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
    )
}

export default Subscribe