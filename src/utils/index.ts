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
