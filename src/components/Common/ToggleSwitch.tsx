/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { staticTheme } from '../../util/theme';
import { ThemeContext } from '../../store/ThemeContext';

const { space } = staticTheme;

type ToggleSwitchProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  checked: boolean;
};

export const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>((props, ref) => {
  const { className, style, checked, ...rest } = props;
  const [toggle, setToggle] = React.useState<0 | 1>(0);
  const { theme, dark } = React.useContext(ThemeContext);
  const { primary, background } = theme;

  React.useLayoutEffect(() => {
    if (checked) {
      setToggle(1);
    } else {
      setToggle(0);
    }
  }, [checked]);

  return (
    <label
      css={css`
        display: flex;
        align-items: center;
        padding: ${space.xs};
        background-color: ${dark ? background.background30 : background.background20};
        width: calc(${space.m} * 2.7);
        border-radius: ${space.m};
        cursor: pointer;
      `}
      className={className}
      style={style}>
      <input
        css={css`
          opacity: 0;
          width: 0;
          height: 0;
        `}
        ref={ref}
        type="checkbox"
        checked={checked}
        {...rest}
      />
      <span
        css={css`
          display: inline-block;
          opacity: 0;
          flex-grow: ${toggle};
          flex-shrink: ${toggle === 0 ? 1 : 0};
          transition: flex-grow 0.2s, flex-shrink 0.2s;
        `}
      />
      <span
        css={css`
          display: inline-block;
          background-color: ${dark ? primary.lighter : primary.main};
          width: ${space.m};
          height: ${space.m};
          border-radius: 50%;
          cursor: pointer;
        `}
        className="toggle-state"
      />
    </label>
  );
});
