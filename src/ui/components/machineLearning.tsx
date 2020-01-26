import * as React from 'react';

export default class About extends React.Component < null > {
    render() {
        return (
            <div className="detail">
                <main id="main" className="main">
                    <div className="main-inner">
                        <div className="content-wrap">
                            <div id="content" className="content">
                                <h1>Image Understanding</h1>
                                <div id="posts" className="posts-expand">
                                    <h3>
                                        <a href="https://en.wikipedia.org/wiki/Canny_edge_detector" target="_blank">
                                            Canny Edge Detector
                                        </a> 
                                        &nbsp; Detect and identify edge in an image
                                    </h3>
                                    <ul>
                                        <li> Steps:</li>
                                        <ol>
                                            <li>Apply Gaussian filter to smooth the image in order to remove the noise</li>
                                            <li>Find the intensity gradients of the image</li>
                                            <li>Apply non-maximum suppression to get rid of spurious response to edge detection</li>
                                            <li>Apply double threshold to determine potential edges</li>
                                            <li>Track edge by hysteresis thresholding: Finalize the detection of edges by suppressing all the other edges that are weak and not connected to strong edges.</li>
                                        </ol>
                                    </ul>
                                    <div className="inline photoGroup">
                                        <img className="medium-photo" src="./img/csc420/A1/tennisCourt.jpg"/>
                                        <img className="medium-photo" src="./img/csc420/A1/4a.jpg"/>
                                    </div>
                                    <h3>
                                        <a href="https://en.wikipedia.org/wiki/Harris_Corner_Detector" target="_blank">
                                            Harris Corner Metric Detector
                                        </a>: Harmonic Mean
                                    </h3>
                                    
                                    <figure className="highlight js">
                                        <table>
                                            <tr>
                                                <td className="code">
                                                    <pre>
                                                        <span className="line">

                                                    </span>
                                                    </pre>
                                                </td>
                                            </tr>
                                        </table>
                                    </figure>
                                    <div className="inline photoGroup">
                                        <img className="medium-photo" src="./img/csc420/A2/building.jpg"/>
                                        <img className="medium-photo" src="./img/csc420/A2/1a.jpg"/>
                                    </div>
                                    <ul>
                                        <li>Custom non-maximal suppression using ordfilt2.m or your own morphological operators function of choice.
                                            Use a circularelement, and experiment with varying radius as a parameter. Explain why/how the results change with radius.
                                            As the radius increase for the non maximum suppression filter, the size of the dot also gets bigger, because
                                            more neighboring values are being changed to its local maximum by ordfilt2, as it reset the current value
                                            to the largest neighbor value, result in all neighbor values within the radius to exceed the threshold when
                                            actually just one pixel actually exceeds the threshold.
                                        </li>
                                        <div className="inline photoGroup">
                                            <img className="small-photo" src="./img/csc420/A2/1b1.jpg"/>
                                            <img className="small-photo" src="./img/csc420/A2/1b3.jpg"/>
                                            <img className="small-photo" src="./img/csc420/A2/1b5.jpg"/>
                                        </div>
                                        <li> Write code to search the image for scale-invariant interest point (i.e.
                                            blob) detection using the Laplacian of Gaussian and checking a pixel's local neigh-
                                            bourhood as in SIFT. You may use code from tutorial 4 as a starting point. You
                                            must find extrema in both location and scale. Find the appropriate parameter
                                            settings, and display your keypoints for synthetic.png. Hint: Only investigate
                                            pixels with the LoG above or below a threshold.</li>
                                        <div className="inline photoGroup">
                                            <img className="medium-photo" src="./img/csc420/A2/synthetic.png"/>
                                            <img className="medium-photo" src="./img/csc420/A2/1c.jpg"/>
                                        </div>
                                        <li> Compare and contrast the Harris corner metric with non-maximal suppression as a keypoint detector to the Laplacian of Gaussian method. Show ex-
                                            amples where they detect different keypoints and the same keypoints and explain
                                            why they are the same/different using synthetic.png and building.png.
                                        </li>
                                        <div className="inline photoGroup">
                                            <img className="small-photo" src="./img/csc420/A2/1d1.jpg"/>
                                            <img className="small-photo" src="./img/csc420/A2/1d2.jpg"/>
                                            <img className="small-photo" src="./img/csc420/A2/1d3.jpg"/>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
