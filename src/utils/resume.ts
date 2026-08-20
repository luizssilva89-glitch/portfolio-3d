import { Language } from '../i18n/LanguageContext'

export function getResumeUrl(language: Language): string {
  return language === 'pt'
    ? '/curriculo-luiz-sergio.pdf'
    : '/resume-luiz-sergio-en.pdf'
}

/**
 * Abre o curriculo criando um link real e clicando nele.
 * Evita o bloqueio de popup que o window.open sofre em varios navegadores.
 */
export function openResume(language: Language): void {
  const link = document.createElement('a')
  link.href = getResumeUrl(language)
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
