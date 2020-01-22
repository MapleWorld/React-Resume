function resultImage = anisotropicGaussianFilter(inputImage, sigmaX, sigmaY) 

    h_x = uint8(fspecial('gaussian', [1 15*sigmaX], sigmaX)*255); 
    h_y = uint8(fspecial('gaussian', [15*sigmaY 1], sigmaY)*255); 

    resultImage = conv2(double(inputImage), double(h_x), 'same');
    resultImage = conv2(double(resultImage), double(h_y), 'same');
    
end

