book_img = imread('./book.jpg');
findbook_img = imread('./findBook.jpg');

book_img_gray = rgb2gray(book_img);
findbook_img_gray = rgb2gray(findbook_img);

run('F:/University/2016-2017/CSC420/Assignment/sift/toolbox/vl_setup');
[f1,d1] = vl_sift(im2single(book_img_gray));
p1 = subplot(1,2,1);
imshow(book_img);
h1 = vl_plotframe(f1);
h2 = vl_plotframe(f1);
set(h1,'color','k','linewidth',3);
set(h2,'color','y','linewidth',2);

[f2,d2] = vl_sift(im2single(findbook_img_gray));
p2 = subplot(1,2,2);
imshow(findbook_img);
h1 = vl_plotframe(f2);
h2 = vl_plotframe(f2);
set(h1,'color','k','linewidth',3);
set(h2,'color','y','linewidth',2);

%ah = axes('position',[.2,.2,.6,.6],'visible','off'); % <- select your pos...
%line([.1,.9],[.1,.9],'parent',ah,'linewidth',5);
     
%linkaxes([p1,p2]);

[matches, scores] = vl_ubcmatch(d1,d2) ;

D = pdist2(d1.',d2.');
[h,w] = size(D);

%for x = 1:w
%    for y = 1:h
%    end
%end

% For each row in the matrix from dist2 function, find the smallest and the
% second smallest values for each row and save the ratios and the indices.
ratio = zeros(4, size(w, 1));
for i = 1 : size(w, 1)
    aRow = w(i, :);
    [min_val1, min_ind1] = min(aRow);
    aRow(min_ind1) = max(aRow);
    [min_val2, min_ind2] = min(aRow);
    ratio(1, i) = min_val1 / min_val2;
    ratio(2, i) = i;
    ratio(3, i) = min_ind1;
    ratio(4, i) = min_ind2;
end


        
        