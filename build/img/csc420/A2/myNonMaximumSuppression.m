function result = myNonMaximumSuppression(R, threshold, radius) 
    domain = strel('disk', radius, 0);
    domain = domain.getnhood();
    Rmax = max(max(R));
    threshold = Rmax * threshold;
    filteredR = ordfilt2(R, sum(domain(:)), domain);
    result = filteredR > threshold;
end





