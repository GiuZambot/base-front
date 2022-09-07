import { SizeIcon } from './styles';
import peopleIcon from './peopleIcon.svg';

export const UsersIcon = ({ size }: { size: number }) => {
  return (
    <SizeIcon size={size}>
      <img src={peopleIcon} alt='Forma de pessoa' />
    </SizeIcon>
  );
}
