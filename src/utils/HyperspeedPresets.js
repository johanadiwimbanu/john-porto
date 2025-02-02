import {
  DistortionOptions,
  HyperspeedPresets,
  PresetOption,
} from '../constant/HyperspeedPresets';

const getRandomPreset = () => {
  const randomIndex = Math.floor(Math.random() * PresetOption.length);
  return PresetOption[randomIndex];
};

const getRandomDistortion = () => {
  const values = Object.values(DistortionOptions);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

const getRandomHyperspeedPresets = () => {
  return {
    ...HyperspeedPresets[getRandomPreset()],
    distortion: getRandomDistortion(),
  };
};

export { getRandomDistortion, getRandomPreset, getRandomHyperspeedPresets };
