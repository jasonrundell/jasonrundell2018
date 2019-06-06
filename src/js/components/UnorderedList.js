// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
import React from 'react';
import Li from './Li';

const UnorderedList = (props) => {
  const items = props.items;
  const listItems = items.map((item, index) =>
    <Li key={index} className={props.classNameChildren} data-aos={props.aosType} data-aos-duration={props.aosDuration} data-aos-delay={props.aosDelay}>{item}</Li>
  );

  return (
    <ul className={props.className} data-aos={props.aosType} data-aos-duration={props.aosDuration} data-aos-delay={props.aosDelay}>{listItems}</ul>
  );
};

export default UnorderedList;
