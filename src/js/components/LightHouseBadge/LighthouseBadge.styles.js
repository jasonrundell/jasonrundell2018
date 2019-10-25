import config from './config-styles'

export default {
  root: {
    maxWidth: '27rem',
    border: '3px solid ' + config.badgeColor,
    borderRadius: '0.7rem',
  },
  logo: {
    width: 'auto',
    height: '2rem',
    padding: '0.5rem',
  },
  detail: {
    padding: '0.5rem',
  },
  scorePass: {
    fontFamily: config.fontScore,
    fontSize: config.fontSizeRegular,
    color: config.colorScorePass,
  },
  scoreAverage: {
    fontFamily: config.fontScore,
    fontSize: config.fontSizeRegular,
    color: config.colorScoreAverage,
  },
  scoreFail: {
    fontFamily: config.fontScore,
    fontSize: config.fontSizeRegular,
    color: config.colorScoreFail,
  },
  label: {
    fontFamily: config.fontLabel,
    fontSize: config.fontSizeSmall,
  },
  link: {
    fontFamily: config.fontLink,
    fontSize: config.fontSizeSmall,
    color: config.badgeColor,
  },
  row: {
    scores: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    report: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
  },
}
