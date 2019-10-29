import React from 'react'
import PropTypes from 'prop-types'
import Logo from './lighthouse.png'
import styles from './LightHouseBadge.styles.js'

const LightHouseBadge = ({
  performanceScore,
  accessibilityScore,
  bestPracticesScore,
  seoScore,
  reportFileUrl,
  dateText,
}) => ({
  render() {
    let report = ''
    if (reportFileUrl !== '') {
      report = (
        <a href={reportFileUrl} style={styles.link}>
          {`View Lighthouse ${dateText} Report`}
        </a>
      )
    } else {
      report = (
        <a
          href="https://developers.google.com/web/tools/lighthouse/"
          style={styles.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Lighthouse
        </a>
      )
    }
    return (
      <div style={styles.root}>
        <div style={styles.row.scores}>
          <div style={styles.detail}>
            <div style={styles.scorePass}>{performanceScore}</div>
            <div style={styles.label}>Performance</div>
          </div>
          <div style={styles.detail}>
            <div style={styles.scorePass}>{accessibilityScore}</div>
            <div style={styles.label}>Accessibility</div>
          </div>
          <div style={styles.detail}>
            <div style={styles.scorePass}>{bestPracticesScore}</div>
            <div style={styles.label}>Best Practices</div>
          </div>
          <div style={styles.detail}>
            <div style={styles.scorePass}>{seoScore}</div>
            <div style={styles.label}>SEO</div>
          </div>
        </div>
        <div style={styles.row.report}>
          <img src={Logo} style={styles.logo} alt="Lighthouse logo" />
          {report}
        </div>
      </div>
    )
  },
})

/**
 * <a href={reportFileUrl} style={styles.link">
        View Lighthouse
        {dateText}
        Report
      </a>
 */

LightHouseBadge.defaultProps = {
  reportFileUrl: '',
  dateText: '',
}

LightHouseBadge.propTypes = {
  performanceScore: PropTypes.string.isRequired,
  accessibilityScore: PropTypes.string.isRequired,
  bestPracticesScore: PropTypes.string.isRequired,
  seoScore: PropTypes.string.isRequired,
  reportFileUrl: PropTypes.string,
  dateText: PropTypes.string,
}

export default LightHouseBadge
