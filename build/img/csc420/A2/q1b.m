% read image and grayscale
img = imread('./synthetic.png');

hsize = 3;
sigma = 2;
R = myHarrisCornerMetric(img, hsize, sigma);

threshold = 0.20;
radius = 1;
result = myNonMaximumSuppression(R, threshold, radius);
[X, Y] = find(result == 1);
figure;
imshow(img);
hold on;
plot(Y ,X ,'R.');