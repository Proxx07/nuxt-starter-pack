import { advantages } from './models';

export const useAdvantages = () => {
  const { $i18n } = useNuxtApp();

  const translateWithNuxt = $i18n.t('hello-world');

  return {
    advantages,
    translateWithNuxt,
  };
};
