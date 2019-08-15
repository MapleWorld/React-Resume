tennisCourt = rgb2gray(imread('./tennisCourt.jpg'));
figure;
imshow(edge(tennisCourt,'Canny', 0.5,'both'), []);

%BWP = edge(tennisCourt,'Prewitt');
%BWR = edge(tennisCourt,'Roberts');
%BWL = edge(tennisCourt,'log');
%BWC = edge(tennisCourt,'Canny');

%figure;
%imshow(edge(tennisCourt,'Canny',1), []);
%figure;
%imshow(BWP, []);
%figure;
%imshow(BWR, []);
%figure;
%imshow(BWL, []);
%figure;
%imshow(BWC, []);