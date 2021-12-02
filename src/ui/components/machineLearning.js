import * as React from 'react';

export default function About() {
    return (
        <div className="detail">
            <main id="main" className="main">
                <div className="main-inner">
                    <div className="content-wrap">
                        <div id="content" className="content">
                            <h1>Image Understanding</h1>
                            <div id="posts" className="posts-expand">
                                <h3>
                                    <a href="https://en.wikipedia.org/wiki/Canny_edge_detector" target="_blank" rel="noreferrer">
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
                                    <img className="medium-photo" src="./img/csc420/A1/tennisCourt.jpg" alt="tennisCourt"/>
                                    <img className="medium-photo" src="./img/csc420/A1/4a.jpg" alt="4a"/>
                                </div>
                                <h3>
                                    <a href="https://en.wikipedia.org/wiki/Harris_Corner_Detector" target="_blank" rel="noreferrer">
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
                                    <img className="medium-photo" src="./img/csc420/A2/building.jpg" alt="building"/>
                                    <img className="medium-photo" src="./img/csc420/A2/1a.jpg" alt="1a"/>
                                </div>
                                <ul>
                                    <li>Custom non-maximal suppression using ordfilt2.m or your own morphological operators function of choice.
                                        Use a circularelement, and experiment with varying radius as a parameter. 
                                    </li>
                                    <li>Explain why/how the results change with radius.
                                    </li>
                                    <li>
                                        As the radius increase for the non maximum suppression filter, the size of the dot also gets bigger, because
                                        more neighboring values are being changed to its local maximum by ordfilt2, as it reset the current value
                                        to the largest neighbor value, result in all neighbor values within the radius to exceed the threshold when
                                        actually just one pixel actually exceeds the threshold.
                                    </li>
                                    <div className="inline photoGroup">
                                        <img className="small-photo" src="./img/csc420/A2/1b1.jpg" alt="1b1"/>
                                        <img className="small-photo" src="./img/csc420/A2/1b3.jpg" alt="1b3"/>
                                        <img className="small-photo" src="./img/csc420/A2/1b5.jpg" alt="1b5"/>
                                    </div>
                                    <li> Write code to search the image for scale-invariant interest point (i.e.
                                        blob) detection using the Laplacian of Gaussian and checking a pixel's local neigh-
                                        bourhood as in SIFT. You may use code from tutorial 4 as a starting point. You
                                        must find extrema in both location and scale. Find the appropriate parameter
                                        settings, and display your keypoints for synthetic.png. Hint: Only investigate
                                        pixels with the LoG above or below a threshold.</li>
                                    <div className="inline photoGroup">
                                        <img className="medium-photo" src="./img/csc420/A2/synthetic.png" alt="synthetic"/>
                                        <img className="medium-photo" src="./img/csc420/A2/1c.jpg" alt="1c"/>
                                    </div>
                                    <li> Compare and contrast the Harris corner metric with non-maximal suppression as a keypoint detector to the Laplacian of Gaussian method. Show ex-
                                        amples where they detect different keypoints and the same keypoints and explain
                                        why they are the same/different using synthetic.png and building.png.
                                    </li>
                                    <div className="inline photoGroup">
                                        <img className="small-photo" src="./img/csc420/A2/1d1.jpg" alt="1d1"/>
                                        <img className="small-photo" src="./img/csc420/A2/1d2.jpg" alt="1d2"/>
                                        <img className="small-photo" src="./img/csc420/A2/1d3.jpg" alt="1d3"/>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div id="content" className="content">
                            <h1>Data analyze</h1>
                            <div id="posts" className="posts-expand">
                                <h3>
                                    <a href="https://en.wikipedia.org/wiki/Mental_chronometry" target="_blank" rel="noreferrer">
                                        Human Reaction time VS Mental Rotation
                                    </a> 
                                </h3>
                                <ul>
                                    <li>Analyze the relationship between subjects' reaction times (dependent variable) 
                                        and angles (independent variable) both within subjects and across subjects 
                                    </li>
                                    <li>54 subjects performed a mental rotation task similar to Shepard & Metzler (1971):
                                            multiple pairs of 3D objects were presented at four different rotating angles. 
                                            Data was obtained from Ganis & Kievit (2015).
                                        </li>
                                </ul>

                                <ul>
                                    <li> Steps:</li>
                                    <ol>
                                        <li>Load and normalize the dataset in matrix format</li>
                                        <li>Fit a line (linear regression) between reaction time (rt) and angle</li>

                                            <li>Register the slope and the intercept from your line fit
                                            Record the slope for this subject in place-holder variable "slopes"
                                            Scatter plot reaction times (y-axis) against angles (x-axis)
                                            </li>
                                            <div className="inline photoGroup">
                                            <img className="medium-photo" src="./img/cog260/ReactionTimePlots.png" alt="ReactionTimePlots"/>
                                        </div>

                                        <li>Take the average of mean response times across subjects, for each angle</li>
                                            <li>Take the standard deviation of mean response times across subjects, for each angle</li>
                                            <li>Plot the average and standard deviation values calculated above, against the four angles</li>
                                            <div className="inline photoGroup">
                                            <img className="medium-photo" src="./img/cog260/ReactionTimeVsAngle.png" alt="ReactionTimeVsAngle"/>
                                        </div>
                                    </ol>
                                </ul>
                            </div>

                            <div id="posts" className="posts-expand">
                                <h3>
                                    <a href="https://en.wikipedia.org/wiki/Statistical_classification" target="_blank" rel="noreferrer">
                                        Animal Classification
                                    </a> 
                                </h3>

                                <ul>
                                    <li> Steps:</li>
                                    <ol>
                                        <li>Load the animals from the Leuven Concept Database dataset in binary feature matrix (animal-by-feature).</li>
                                        <div className="inline photoGroup">
                                            <img className="large-photo" src="./img/cog260/AnimalDistance.png" alt="AnimalDistance"/>
                                        </div>
                                        <li>Evaluate each model by standard leave-one-animal-out cross validation</li>
                                        <li>Implement two models of categorization: a prototype model and an exemplar model</li>
                                        <li>Calculate Euclidean distance of each bird/fish to the exemplar and prototype feature vector</li>
                                        <li>Report predictive accuracy of each model in percentage (i.e. % correct predictions out of 53 animals)</li>
                                        <li>Perform an error analysis on the two models (i.e. report which exemplars each model failed on)</li>
                                        <div className="inline photoGroup">
                                            <img className="large-photo" src="./img/cog260/ModelAccuracy.png" alt="ModelAccuracy"/>
                                        </div>
                                    </ol>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}