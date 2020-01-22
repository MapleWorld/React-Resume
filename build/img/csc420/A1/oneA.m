A = imread('F:/University/2016-2017/CSC420/Assignment/cat.jpg');

grayscale = rgb2gray(A);        

filter = [
    2, 4, 5, 4, 2; ...
    4, 9, 12, 9, 4; ...
    5, 12, 15, 12, 5; ...
    4, 9, 12, 9, 4; ...
    2, 4, 5, 4, 2];

finalImage = myconv(grayscale, filter);
imshow(finalImage, []);








%testImage = [
%    1, 2, 3, 4, 5, 6; ...
%    2, 146, 4, 5, 6, 7; ...
%    3, 4, 126, 6, 7, 8; ...
%    4, 5, 6, 7, 8, 9; ...
%    5, 6 ,7 ,8 ,9, 10];

%testImage = [
%    1, 1, 1; ...
%    1, 1, 1; ...
%    1, 1, 1];

%filter = [
%    1, 2, 3; ...
%    4, 5, 6; ...
%    7, 8, 9];

%imshow(conv2((grayscale),single(filter), 'same'), []);
%result = conv2((grayscale),single(filter), 'same');
%grayscale(1:10, 1:10)
%result(1:10, 1:10)
%finalImage(1:10, 1:10)


