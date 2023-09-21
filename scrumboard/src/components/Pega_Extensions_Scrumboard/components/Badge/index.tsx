import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { BadgeContainer } from './styles';

interface BadgeProps {
  value: string;
  valuetype: string;
}

const Badge: React.FC<BadgeProps> = ({ value, valuetype }) => {
  const theme = useContext(ThemeContext);

  const [color, setColor] = useState<string>(theme.colors.primary);

  useEffect(() => {
    if (valuetype === 'CaseID') {
      setColor('#131FC2');
    } else if (valuetype === 'CaseStatus') {
      setColor('#61D856');
    } else {
      // Set a default color if valuetype is neither 'category' nor 'status'
      setColor(theme.colors.primary);
    }
  }, [valuetype, theme.colors.primary]);

  return (
    <BadgeContainer color={color}>
      <p>{value}</p>
    </BadgeContainer>
  );
};

export default Badge;
