declare module "react-pageflip" {
  import { Component, CSSProperties, ReactNode } from "react";

  export interface HTMLFlipBookProps {
    width: number;
    height: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
    className?: string;
    style?: CSSProperties;
    startPage?: number;
    onFlip?: (e: { data: number }) => void;
    onChangeState?: (e: { data: "user_fold" | "fold_corner" | "flipping" | "read" }) => void;
    children?: ReactNode;
  }

  export interface PageFlipApi {
    flipNext(): void;
    flipPrev(): void;
    /** Salta a una página concreta con la animación de giro. */
    flip(page: number, corner?: "top" | "bottom"): void;
    /** Salta a una página concreta sin animar. */
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    getState(): "user_fold" | "fold_corner" | "flipping" | "read";
    getSettings(): { disableFlipByClick: boolean; flippingTime: number };
  }

  export default class HTMLFlipBook extends Component<HTMLFlipBookProps> {
    pageFlip(): PageFlipApi | undefined;
  }
}
