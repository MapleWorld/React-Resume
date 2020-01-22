im = imread('./building.jpg');
img = rgb2gray(im);
imgS = img;%conv2(img,fspecial('Gaussian',[25 25],0.5),'same');%Base smoothing
k = 1.1;
sigma = 2.0;
s = k.^(1:10)*sigma;
responseLoG = zeros(size(img,1),size(img,2),length(s));

%% Filter over a set of scales %
for si = 1:length(s)
    sL = s(si);
    hs = max(25,min(floor(sL*3),300));
    HL = fspecial('log',[hs hs],sL);
    imgFiltL = conv2(double(imgS),double(HL),'same');
    %Compute the LoG
    responseLoG(:,:,si)  = (sL^2)*imgFiltL;
end

result = zeros(size(img));

[h,w,d] = size(responseLoG);
threshold = 30;

for x = 1:h
    for y = 1:w
        %Get the maxima over scale
        f = squeeze(responseLoG(x,y,:));
        
        %Extrema
        [fMax,fmaxLocs] = findpeaks(f);
        [fMin,fminLocs] = findpeaks(-f);
        
        if (fMax > threshold)
            if (result(x,y) < max(fMax))
                result(x,y) = max(fMax);
            end
        end
        
    end
    display(x);
end

%domain = strel('disk', radius, 0);
%domain = domain.getnhood();
%filteredR = ordfilt2(R, sum(domain(:)), domain);
%result = filteredR > threshold;

[X, Y] = find(result > threshold);
figure;
imshow(im);
hold on;
plot(Y ,X ,'R.');


