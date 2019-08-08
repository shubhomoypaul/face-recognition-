import React, { Component } from 'react';

const exampleImage = require('../img/example.jpg');

export default class Home extends Component {
  render() {
    const WIDTH = document.documentElement.clientWidth;
    return (
      <div
        style={{
          border: 'solid',
          borderRadius: 8,
          width: { WIDTH },
          margin: 10,
          padding: 5
        }}
      >
        <h2>Face Recognition</h2>
        <h4>
          Web Application for face detection and recognition, running in front-end browser using React and{' '}
          <a href="https://github.com/justadudewhohacks/face-api.js">
            face-api.js
          </a>{' '}
          (without back-end)
        </h4>
        <img src={exampleImage} alt="example" width="350" />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            margin: 'auto',
            marginLeft: 10
          }}
        >
          <h3>How to Use</h3>
          <p>
            This App try to detect all faces from input image and recognize.
          </p>
          <div>
            <ul>
              <h4>Requirement:</h4>
              <li>
                Support any PC browser with Javascript enabled.
              </li>
              <li>Support Android phone for Photo Input and Video Camera</li>
              <li>Support Iphone on Safari and Chrome only for Photo Input</li>
            </ul>
            <ul>
              <h4>Photo Input:</h4>
              <li>Input image can be image file or URL</li>
              <li>Image file must be jpg, jpeg, or png format</li>
              <li>
                Image URL host should allow cross-origin requests (CORS) or else
                the App will not be able to access the image. (any facebook
                images are good for testing with this App)
              </li>
              <li>
                The App will try to detect all faces, which might take few
                seconds depend on how many faces are in the image.
              </li>
              <li>
                Face detection can be difficult if the object face is tilted,
                too large or too small, and/or blurry face.
              </li>
              <li>
                The App might recognize member wrongly if their face look
                similar, or the object face does not look straight to camera.
              </li>
            </ul>
            <ul>
              <h4>Video Camera:</h4>
              <li>
                Video Input works well with PC webcam or Android phone's camera.
              </li>
              <li>
                Currently Iphone camera is not supported for live detection in
                this App.
              </li>
              <li>
                App will try to detect and recognize any faces, but performance
                depends on CPU of the device.
              </li>
              <li>
                Detection and Recognition with PC webcam can be fast, while
                working on smartphone can be slower.
              </li>
            </ul>
            <ul>
              <h4>Reference:</h4>
              <li>
                face-api.js API{' '}
                <a href="https://github.com/justadudewhohacks/face-api.js">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
