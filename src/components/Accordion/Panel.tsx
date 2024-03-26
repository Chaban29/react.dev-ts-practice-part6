import { FC, ReactNode, Fragment, useState } from 'react';

interface IPanelProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
}

export const Panel: FC<IPanelProps> = ({
  title,
  children,
  isActive,
  onShow,
}: IPanelProps) => {
  const [isTextAnimation, setIsTextAnimation] = useState<boolean>(false);

  const handleShowAndAnimationText = () => {
    setIsTextAnimation(true);
    setTimeout(() => {
      setIsTextAnimation(false);
    }, 1000);
    onShow();
  };

  return (
    <Fragment>
      <h3>{title}</h3>
      {isActive ? (
        <p className={isTextAnimation ? 'animate' : ''}>{children}</p>
      ) : (
        <button type='button' onClick={handleShowAndAnimationText}>
          Show
        </button>
      )}
    </Fragment>
  );
};
