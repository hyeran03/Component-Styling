import React from "react";
import classNames from "classnames";
import "./Button.scss";

// size: large, medium, small
// color: blue, pink, gray
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  return (
    <button
      className={classNames(
        "Button",
        size,
        color,
        {
          outline,
          fullWidth
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;

// className={['Button', size].join(' ')}  -> .Button medium 이런식으로 클래스네임이 만들어짐
// className = {`Button ${size}`}
// 다양한 props를 사용할때는 classNames라는 라이브러리를 사용  -> className={classNames("Button", size)}
