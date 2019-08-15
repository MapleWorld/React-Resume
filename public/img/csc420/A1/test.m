tennisCourt = rgb2gray(imread('./tennisCourt.jpg'));
[Gmag,Gdir] = imgradient(tennisCourt);

figure;
imshow(Gmag, []);