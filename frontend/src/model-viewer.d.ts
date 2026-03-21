import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "environment-image"?: string;
        "shadow-intensity"?: string | number;
        exposure?: string | number;
        ar?: boolean;
        "ar-modes"?: string;
        "disable-zoom"?: boolean;
      };
    }
  }
}

export {};
