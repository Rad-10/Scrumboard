import ICard from '../interfaces/ICard';
import ICategory from '../interfaces/ICategory';
import IStatus from '../interfaces/IStatus';

const mockCards: ICard[] = [
  {
    id: '2fab1909-0b9f-4783-976c-4ffecb805ac5',
    category: ICategory.BUG,
    title: 'Reset password button not working',
    description: 'The button does not contain any feedback, when you click on it, it does nothing',
    status: IStatus.DOING,
    hidden: false
  },

  {
    id: '74d031c0-59bb-4f4b-9910-71bb1c88c624',
    category: ICategory.FEATURE,
    title: 'Create landing page',
    description: '',
    status: IStatus.DONE,
    hidden: false
  },
  {
    id: 'a04170d8-5f03-4a97-bbd7-cbc9516d0840',
    category: ICategory.REFACTOR,
    title: 'Make the onDragEnd function more efficient',
    description: '',
    status: IStatus.TO_DO,
    hidden: false
  },
  {
    id: '29065b36-8873-4ccd-8c42-dcff14736650',
    category: ICategory.DEPLOY,
    title: 'Send first deploy to develop environment',
    description: '',
    status: IStatus.DONE,
    hidden: false
  },
  {
    id: '32eb3393-eddc-487a-abc3-1c199b86c4a2',
    category: ICategory.FEATURE,
    title: 'Create light and dark theme switch',
    description: '',
    status: IStatus.IN_REVIEW,
    hidden: false
  }
];

export default mockCards;
