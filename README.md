<h1>Exploring css Modules</h1>

``scr/App.tsx``

```jsx
import React from "react";

import { Button, ButtonWithArrow } from "./components/UI/Buttons";

const App: React.FC = () => {
  return (
    <div className="App" style={{
      display: 'grid',
      justifyItems: 'center',
      alignContent: 'center',
      rowGap: '10px',
      minHeight: '100vh'
    }}>
      <Button variant="btn__secondary" text="Start for free" />

      <ButtonWithArrow 
        variant="btn__primary" 
        text="Start for free"
        otherClasses={['btn__with-arrow']} />
    </div>
  );
}

export default App;
```

``scr/components/UI/Buttons/index.tsx``

```jsx
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
```

``src/components/UI/Buttons/Button.module.scss``

```scss
.btn {
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgb(51 51 51 / 8%);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 48px;
  outline: 0;
  padding: 0 16px;
  position: relative;
  text-align: left;
  text-decoration: none;

  &__primary {
    background-color: #1371c8;
  }

  &__secondary {
    background-color: #ff7a5c;
  }

  &__success {
    background-color: green;
  }

  &__danger {
    background-color: red;
  }

  &__warning {
    background-color: yellow;
  }

  &__transparent {
    background-color: transparent;
  }
}
```

``src/components/UI/Buttons/ButtonWidthArrow.module.scss``

```scss
.btn__with-arrow {
  display: flex;
  align-items: center;
  gap: 15px;

  & svg {
    height: 24px;
    fill: currentColor;
  }
}
```

``src/utils/index.ts``

```ts
export type StyleModule = {
  [key: string]: string;
}

export const getClassesFromStyleModule = ( otherClasses: string[], styleModule: StyleModule) => {
  const temp: string[] = []

  otherClasses.forEach((className) =>  {
    if(styleModule[className]) {
      temp.push(styleModule[className])
    }
  });

  return temp;
}

export const addMultipleClassNames = (
    base: string, 
    variant: string, 
    styleModule: StyleModule, 
    otherClasses: string[] = []
  ) => {

  const rest: string[] = []

  otherClasses.forEach((className) =>  {
    if(styleModule[className]) {
      rest.push(styleModule[className])
    }
  });

  return [ styleModule[base], styleModule[variant], ...rest ].join(' ');
}
```