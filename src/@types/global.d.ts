/// <reference types="react-scripts" />
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

export declare module "@mona-health/react-input-mask";

export declare module "*.pdf";

export declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}

export type PopupClick = MouseEvent & {
  path: Node[];
};

export declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
