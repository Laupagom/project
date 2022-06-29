/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WebtrainingPersonalCard {
        "firstName": string;
        "lastName": string;
        "photo": string;
        "resume": string;
        "rol": string;
    }
    interface WebtrainingVideoPlayer {
        "provider": string;
        "source": any;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWebtrainingPersonalCardElement extends Components.WebtrainingPersonalCard, HTMLStencilElement {
    }
    var HTMLWebtrainingPersonalCardElement: {
        prototype: HTMLWebtrainingPersonalCardElement;
        new (): HTMLWebtrainingPersonalCardElement;
    };
    interface HTMLWebtrainingVideoPlayerElement extends Components.WebtrainingVideoPlayer, HTMLStencilElement {
    }
    var HTMLWebtrainingVideoPlayerElement: {
        prototype: HTMLWebtrainingVideoPlayerElement;
        new (): HTMLWebtrainingVideoPlayerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "webtraining-personal-card": HTMLWebtrainingPersonalCardElement;
        "webtraining-video-player": HTMLWebtrainingVideoPlayerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WebtrainingPersonalCard {
        "firstName"?: string;
        "lastName"?: string;
        "photo"?: string;
        "resume"?: string;
        "rol"?: string;
    }
    interface WebtrainingVideoPlayer {
        "provider"?: string;
        "source"?: any;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "webtraining-personal-card": WebtrainingPersonalCard;
        "webtraining-video-player": WebtrainingVideoPlayer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "webtraining-personal-card": LocalJSX.WebtrainingPersonalCard & JSXBase.HTMLAttributes<HTMLWebtrainingPersonalCardElement>;
            "webtraining-video-player": LocalJSX.WebtrainingVideoPlayer & JSXBase.HTMLAttributes<HTMLWebtrainingVideoPlayerElement>;
        }
    }
}
