import { useLanguage } from '../i18n/LanguageContext'
import { profile as profilePt } from './profile'
import { profileEn } from './profile.en'
import { projects as projectsPt } from './projects'
import { projectsEn } from './projects.en'
import { skillNodes as skillNodesPt } from './skills'
import { skillNodesEn } from './skills.en'
import { careerTimeline as careerTimelinePt } from './timeline'
import { careerTimelineEn } from './timeline.en'

export function useLocalizedData() {
  const { language } = useLanguage()

  if (language === 'en') {
    return {
      profile: profileEn,
      projects: projectsEn,
      skillNodes: skillNodesEn,
      careerTimeline: careerTimelineEn
    }
  }

  return {
    profile: profilePt,
    projects: projectsPt,
    skillNodes: skillNodesPt,
    careerTimeline: careerTimelinePt
  }
}
