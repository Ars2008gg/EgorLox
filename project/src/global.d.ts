declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'

declare module '*.module.scss' {
    interface IClassName {
        [className: string]: string
    }
    const classNames: IClassName
    export = classNames
}

declare const _PLATFORM_: 'desktop' | 'mobile'