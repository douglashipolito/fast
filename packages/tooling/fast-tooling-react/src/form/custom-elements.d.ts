// custom-elements.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        "fast-design-system-provider": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            "use-defaults"?: boolean;
        };
        "fast-checkbox": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            events?: {
                change?: (e: React.ChangeEvent<HTMLElement>) => void;
            };
        };
        "fast-text-field": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            name?: string;
            events?: {
                input?: (e: React.ChangeEvent<HTMLElement>) => void;
            };
        };
    }
}

/**
 * Satisfy TypeScript importing modules without typings
 */
declare module "@skatejs/val";
