import React from 'react';

export const Tag = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg xmlSpace="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  </svg>
));
