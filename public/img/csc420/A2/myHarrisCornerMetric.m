function Result = myHarrisCornerMetric(inputImage, hsize, sigma) 

    % Grayscale image
    img = rgb2gray(inputImage);

    % Compute Gradients I_x, I_y
    [Gx, Gy] = imgradientxy(img);

    % Get I_x^2, I_y^2, I_x*I_y
    Ix2 = Gx.^2;
    Iy2 = Gy.^2;
    Ixy = Gx.*Gy;

    % Gassusian Filter
    g = fspecial('gaussian', [hsize hsize], sigma);
    
    % Compute M = [Ix2g, Ixyg; Ixyg, Iy2g];
    Ix2g = conv2(Ix2, g, 'same');
    Iy2g = conv2(Iy2, g, 'same');
    Ixyg = conv2(Ixy, g, 'same');

    [h,w] = size(img);
    Result = zeros(size(img));

    for x = 1:h
        for y = 1:w
            % M for each pixel
            M = [Ix2g(x,y) Ixyg(x,y);
                Ixyg(x,y) Iy2g(x,y)];

            % Corneress with Harmonic Mean
            R = det(M) / trace(M);
            Result(x,y) = R;
        end
    end
    
    % Filter 
    Threshold = 0;
    Result(Result <= Threshold) = 0;
end






