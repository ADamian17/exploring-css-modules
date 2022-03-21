import React from 'react';
import { addMultipleClassNames } from '../../../utils';
import ArrowRight from '../SvgIcons/ArrowRight';

import btnStyles from './Button.module.scss';
import btnWidthArrowStyles from './ButtonWidthArrow.module.scss';

type Variant = 'btn__primary' | 'btn__secondary' |'btn__success' | 'btn__danger' | 'btn__warning' | 'btn__transparent';

type BtnProps = {
  variant: Variant,
  text: string
  otherClasses?: string[]
  [key: string]: any
}

export const Button: React.FC<BtnProps> = ({ variant, text, otherClasses, ...rest}) => {
  return(
    <button className={addMultipleClassNames('btn', variant, btnStyles, otherClasses)} {...rest}>
      {text}
    </button>
  )
};

export const ButtonWithArrow: React.FC<BtnProps> = ({variant, text, otherClasses, ...rest}) => {
  return(
    <button className={addMultipleClassNames('btn', variant, {...btnStyles, ...btnWidthArrowStyles}, otherClasses)} {...rest}>
      {text}
      <ArrowRight />
    </button>
  )
};
