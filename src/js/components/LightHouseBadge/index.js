import React from 'react';
import Logo from './lighthouse.png';
import styles from './LighthouseBadge.styles';


const LightHouseBadge = (props) => (
  <div style={styles.root}>
    <div style={styles.row.scores}>
      <div style={styles.detail}>
        <div style={styles.scorePass}>{props.performanceScore}</div>
        <div style={styles.label}>Performance</div>
      </div>
      <div style={styles.detail}>
        <div style={styles.scorePass}>{props.accessibilityScore}</div>
        <div style={styles.label}>Accessibility</div>
      </div>
      <div style={styles.detail}>
        <div style={styles.scorePass}>{props.bestPracticesScore}</div>
        <div style={styles.label}>Best Practices</div>
      </div>
      <div style={styles.detail}>
        <div style={styles.scorePass}>{props.seoScore}</div>
        <div style={styles.label}>SEO</div>
      </div>
    </div>
    <div style={styles.row.report}>
      <img src={Logo} style={styles.logo} alt="" />
      <a href={props.reportFileUrl} style={styles.link}>View Lighthouse {props.dateText} Report</a>
    </div>
  </div>
);

export default LightHouseBadge;
