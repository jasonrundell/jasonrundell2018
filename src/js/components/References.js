import React from 'react';
import CONFIG from '../../config';

const AOS_CONFIG = {
  type: 'fade',
  duration: 300,
  delay: 100,
};

const REFERENCES = [
  {
    quote: 'Jason brings a creativity to technology rarely seen in many developers ... Jason continues to be a resource that I count on not only from a development perspective but also as a trusted advisor for future development and the evolution of our technology platforms.',
    cite_url: CONFIG.fileUploadPath + CONFIG.resumeFileName,
    cite_name: 'Gregg Tilston',
    company_name: 'Flight Centre Ltd.'
  },
  {
    quote: 'I found him very detailed and extremely helpful. He listened to my needs as a client and what I wanted for the site and delivered it on time and in budget.',
    cite_url: CONFIG.fileUploadPath + CONFIG.resumeFileName,
    cite_name: 'Jennifer Huether, MS',
    company_name: 'Cliff Lede Vineyards'
  },
  {
    quote: 'Jason is an extremely detail-oriented person who was an absolute pleasure to work with. He always provides creative ideas on how things can be completed more efficiently and effectively. Jason is a great team player and is never afraid to lend a helping hand in any task or request. His excellent knowledge in his field, complemented with his strong work ethic would be an asset to any company!',
    cite_url: CONFIG.fileUploadPath + CONFIG.resumeFileName,
    cite_name: 'Rina Kazavchinski',
    company_name: '52 Pick-Up Inc.'
  },
];

const List = (props) => {
  const items = props.items;
  const listItems = items.map((item, index) =>
    <React.Fragment key={index}>
      <blockquote className={props.className} data-aos={props.aosType} data-aos-duration={props.aosDuration} data-aos-delay={props.aosDelay}>
        { item.quote }
      </blockquote>
      <cite>- { item.cite_name } ({ item.company_name })</cite>
    </React.Fragment>
  );

  return listItems;
}

const References = () => (
  <React.Fragment>
    <h3 className="subsection-title" data-aos="fade" data-aos-duration="300" data-aos-delay="100">References</h3>
    <div className="quote">
      <List
        items={REFERENCES}
        aosType={AOS_CONFIG.type}
        aosDuration={AOS_CONFIG.duration}
        aosDelay={AOS_CONFIG.delay}
      />
    </div>
  </React.Fragment>
);

export default References;
