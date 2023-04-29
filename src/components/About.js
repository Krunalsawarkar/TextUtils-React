import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className="container">
                <h1 style={{color : props.mode==='dark'?'white':'black'}}>About Us</h1>
                <p style={{color : props.mode==='dark'?'white':'black'}}>Welcome to our Text Utility website! We are a team of dedicated professionals who are passionate about providing you with convenient and efficient tools to enhance your text processing experience. Our mission is to simplify your everyday tasks by offering a range of user-friendly utilities designed to assist you in various aspects of working with text. Whether you need to format, analyze, or manipulate text in any way, our website has got you covered.<br/><br/>
                With our powerful tools, you can effortlessly convert text between different cases, remove duplicates, count words and characters, sort lines, and perform many other essential functions. We understand the value of your time, which is why we have developed these utilities to be quick, reliable, and easy to use. Our intuitive interface ensures that you can access the features you need without any hassle, making your text-related tasks a breeze.<br/><br/>

                At our Text Utility website, we are committed to delivering excellence in every aspect. We strive to provide you with a seamless and enjoyable experience, ensuring that our tools are up-to-date and equipped with the latest advancements in text processing technology. We are continuously expanding our range of utilities to meet the evolving needs of our users, aiming to be your go-to destination for all your text-related requirements.

                We value your feedback and suggestions, as they play a crucial role in improving our services. If you have any ideas, comments, or questions, please don't hesitate to reach out to us. Our team is dedicated to providing prompt support and assistance to ensure your satisfaction.<br/><br/>

                Thank you for choosing our Text Utility website. We are excited to be part of your text processing journey and look forward to serving you with the best tools and resources available.</p>
            </div>
        </div>
    )
}
