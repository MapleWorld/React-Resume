cat = rgb2gray(imread('./cat.jpg'));

figure;
imshow(anisotropicGaussianFilter(cat, 15, 2), []);


  