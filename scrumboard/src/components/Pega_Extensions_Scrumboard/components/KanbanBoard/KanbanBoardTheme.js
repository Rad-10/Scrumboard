import { DefaultTheme } from 'styled-components';

const KanbanBoardTheme = {
  ...DefaultTheme, // Inherit properties from the default theme or define your own
  colors: {
    primary: 'your-primary-color', // Define the colors you want for your component
    switch: 'your-switch-color'
    // Add other custom colors if needed
  }
  // Define other theme-related properties specific to your component
};

export default KanbanBoardTheme;
