import React from 'react';

interface ProtectProps {
  ifIsTrue: boolean;
  children?: JSX.Element,
  fallback?: JSX.Element,
}
export const ShowBox = ({ ifIsTrue, fallback, children, ...props }: ProtectProps) => {
  let returnChildren = <></>;

  if (!!children) {
    returnChildren = React.cloneElement(children, { ...props });
  }

  if (ifIsTrue) {
    return returnChildren;
  }

  return fallback ? <>{fallback}</> : <></>;
}



