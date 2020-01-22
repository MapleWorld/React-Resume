% read image and grayscale
im = imread('./building.jpg');

hsize = 3;
sigma = 2;
result = myHarrisCornerMetric(im, hsize, sigma);
imagesc(result);


