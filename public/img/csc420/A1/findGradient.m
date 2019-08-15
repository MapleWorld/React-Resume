function gradient = findGradient(inputImage, gaussianSize) 

    filterX = [
        -1 0 +1; ...
        -2 0 +2; ...
        -1 0 +1;
        ];

    filterY = [
        -1 -2 -1; ...
        0 0 0; ...
        1 2 1;
        ];

    blurImage = imgaussfilt(inputImage, gaussianSize);
    gX = conv2(double(blurImage), double(filterX), 'same');
    gY = conv2(double(blurImage), double(filterY), 'same');

    gradient = sqrt(double(gX).^2 + double(gY).^2);
end