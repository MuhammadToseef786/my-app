import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
    }

  return (
    
    <div className="container">
        <h2 style = {{color: props.mode === 'dark' ? 'white' : '#042743'}} className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" >
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils provides powerful text analysis features that help users better understand their content. Whether you are writing an article, preparing an assignment, or creating professional documents, our tools can quickly calculate word count, character count, and estimated reading time. This allows users to improve the quality and readability of their text while saving valuable time.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Smart Text Editing Tools</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Our platform includes a variety of text manipulation tools designed to make editing easier and more efficient. Users can instantly convert text to uppercase or lowercase, remove unnecessary spaces, copy content with a single click, and perform other useful formatting operations. These features help streamline the writing process and ensure clean, well-structured content.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Simple, Responsive, and User-Friendly</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is built with simplicity and usability in mind. The clean interface ensures that users can access all features without confusion, while the responsive design provides a seamless experience across desktops, tablets, and mobile devices. Whether you are a student, teacher, content creator, or developer, TextUtils offers a fast and convenient way to analyze and manage your text efficiently.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
