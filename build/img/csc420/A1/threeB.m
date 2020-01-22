templateNoise = rgb2gray(imread('./templateNoise.png'));
waldoNoise = rgb2gray(imread('./waldoNoise.png'));

% TemplateNoise
templateNoiseSigma1 = findGradient(templateNoise, 1);

% WaldoNoise
waldoNoiseSigma1 = findGradient(waldoNoise, 1);

result = findWaldo(waldoNoiseSigma1, templateNoiseSigma1);
