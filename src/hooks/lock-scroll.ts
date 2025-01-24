/**
 * Функція для переключення стилю overflow елементу body.
 *
 * @param {('auto' | 'hidden' )} overflow - Значення стилю або дія overflow. Може бути одним із: 'auto' або 'hidden'.
 * @returns {void}
 */
export function toggleOverflow(overflow: 'auto' | 'hidden'): void {
  // for removing scroll bar
  if (document && document.body) {
    // видалення overflow з атрибута style щоб не заважав модальному вікні
    // style перебиває клас що на тегі body з модалки
    if (overflow === 'auto') document.body.style.removeProperty('overflow');
    else document.body.style.overflow = overflow;
  }
}
