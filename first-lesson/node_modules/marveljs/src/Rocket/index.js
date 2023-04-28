import React from 'react';

const weapons = ['🔪', '⚔️', '🗡', '💣', '💥', '🔫', '🧨', '🛡'];

export default ({ children }) =>
  React.Children.map(children, child => (
    <>
      <span role="image">
        {weapons[Math.floor(Math.random() * weapons.length)]}
      </span>
      {child}
      <span role="image">
        {weapons[Math.floor(Math.random() * weapons.length)]}
      </span>
    </>
  ));
