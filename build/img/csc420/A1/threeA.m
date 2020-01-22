templateNoise = rgb2gray(imread('./templateNoise.png'));
waldoNoise = rgb2gray(imread('./waldoNoise.png'));

% Template Noise
templateNoiseSigma1 = findGradient(templateNoise, 1);
templateNoiseSigma2 = findGradient(templateNoise, 2);
templateNoiseSigma3 = findGradient(templateNoise, 3);

imshow(templateNoiseSigma1, [])
figure
imshow(templateNoiseSigma2, [])
figure
imshow(templateNoiseSigma3, [])

% WaldoNoise
waldoNoiseSigma1 = findGradient(waldoNoise, 1);
waldoNoiseSigma2 = findGradient(waldoNoise, 2);
waldoNoiseSigma3 = findGradient(waldoNoise, 3);

figure
imshow(waldoNoiseSigma1, [])
figure
imshow(waldoNoiseSigma2, [])
figure
imshow(waldoNoiseSigma3, [])