function finalImage = myconv(inputImage, filter) 

    imageSize = size(inputImage);
    finalImage = zeros(imageSize(1), imageSize(2), 'single');

    for  x = 1:imageSize(1)
        for  y = 1:imageSize(2)
            finalImage(x, y) = myconvHelper(inputImage, rot90(filter,2), x, y, imageSize(1), imageSize(2));
        end
    end
end

function computedValue = myconvHelper(imageMatrix, filter, x, y,xUpperBound, yUpperBound) 

    computedValue = 0;
    filterSize = size(filter);
    filterMedian = ceil(filterSize(1) / 2);
   
    for  x2 = 1:filterSize(1)
        for  y2 = 1:filterSize(2)
            
            x3 = (x - (x2 - filterMedian));
            y3 = (y - (y2 - filterMedian));

            if (x3 > 0 && y3 > 0 && x3 <= xUpperBound && y3 <= yUpperBound) 
                test1 = filterSize(1) - x2 + 1;
                test2 = filterSize(1) - y2 + 1;
                tempValue = double(imageMatrix(x3, y3))*double(filter(test1, test2));
                computedValue = double(computedValue) + tempValue;
            end
        end
    end
    
    computedValue = ceil(computedValue);
end



%fprintf('computedValue %i\n', double(imageMatrix(x3, y3))*double(filter(test1, test2)))
%fprintf('filter %i\n', filter(x2, y2))
%fprintf('x3 is equal to %i\n', x3)
%fprintf('y3 is equal to %i\n', y3)
%fprintf('x2 is equal to %i\n', test1)
%fprintf('y2 is equal to %i\n', test2)
%fprintf('imageMatrix %i\n', imageMatrix(x3, y3))
