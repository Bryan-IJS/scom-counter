/// <amd-module name="@scom/scom-counter/global/interfaces.ts" />
declare module "@scom/scom-counter/global/interfaces.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { ModeType } from "@scom/scom-chart-data-source-setup";
    export interface ICounterOptions {
        counterColName: string;
        counterLabel?: string;
        stringDecimal?: number;
        stringPrefix?: string;
        stringSuffix?: string;
        coloredPositiveValues?: boolean;
        coloredNegativeValues?: boolean;
    }
    export interface ICounterConfig {
        dataSource: string;
        queryId?: string;
        apiEndpoint?: string;
        title: string;
        description?: string;
        options: ICounterOptions;
        file?: {
            cid: string;
            name: string;
        };
        mode: ModeType;
    }
    export interface IFormatNumberOptions {
        precision?: number;
        roundingMode?: BigNumber.RoundingMode;
    }
}
/// <amd-module name="@scom/scom-counter/global/utils.ts" />
declare module "@scom/scom-counter/global/utils.ts" {
    import { BigNumber } from '@ijstech/eth-wallet';
    export const isNumeric: (value: string | number | BigNumber) => boolean;
}
/// <amd-module name="@scom/scom-counter/global/index.ts" />
declare module "@scom/scom-counter/global/index.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
    export * from "@scom/scom-counter/global/interfaces.ts";
    export * from "@scom/scom-counter/global/utils.ts";
}
/// <amd-module name="@scom/scom-counter/index.css.ts" />
declare module "@scom/scom-counter/index.css.ts" {
    export const containerStyle: string;
    export const textStyle: string;
    export const counterStyle: string;
}
/// <amd-module name="@scom/scom-counter/assets.ts" />
declare module "@scom/scom-counter/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-counter/data.json.ts" />
declare module "@scom/scom-counter/data.json.ts" {
    const _default_1: {
        defaultBuilderData: {
            dataSource: string;
            queryId: string;
            title: string;
            options: {
                counterColName: string;
                counterLabel: string;
            };
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-counter/dataOptionsForm.tsx" />
declare module "@scom/scom-counter/dataOptionsForm.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    interface IData {
        options: any;
    }
    interface ScomCounterDataOptionsFormElement extends ControlElement {
        jsonSchema?: any;
        counterColName?: string;
        counterLabel?: string;
        stringDecimal?: number;
        stringPrefix?: string;
        stringSuffix?: string;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-counter-data-options-form"]: ScomCounterDataOptionsFormElement;
            }
        }
    }
    export default class ScomCounterDataOptionsForm extends Module {
        private formEl;
        private _jsonSchema;
        private _data;
        constructor(parent?: Container, options?: any);
        get data(): IData;
        set data(value: IData);
        refreshFormData(): Promise<IData>;
        private renderUI;
        private onInputChanged;
        onCustomInputChanged(data: IData): Promise<void>;
        init(): Promise<void>;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-counter/formSchema.ts" />
declare module "@scom/scom-counter/formSchema.ts" {
    export function getBuilderSchema(column: string[]): {
        dataSchema: {
            type: string;
            required: string[];
            properties: {
                darkShadow: {
                    type: string;
                };
                customFontColor: {
                    type: string;
                };
                fontColor: {
                    type: string;
                    format: string;
                };
                customBackgroundColor: {
                    type: string;
                };
                backgroundColor: {
                    type: string;
                    format: string;
                };
                counterNumberColor: {
                    type: string;
                    format: string;
                };
                counterLabelColor: {
                    type: string;
                    format: string;
                };
                height: {
                    type: string;
                };
                title: {
                    type: string;
                };
                description: {
                    type: string;
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        elements: ({
                            type: string;
                            scope: string;
                            rule?: undefined;
                        } | {
                            type: string;
                            scope: string;
                            rule: {
                                effect: string;
                                condition: {
                                    scope: string;
                                    schema: {
                                        const: boolean;
                                    };
                                };
                            };
                        })[];
                    }[];
                }[];
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        scope: string;
                    }[];
                }[];
            })[];
        };
        advanced: {
            dataSchema: {
                type: string;
                properties: {
                    options: {
                        type: string;
                        title: string;
                        required: string[];
                        properties: {
                            counterColName: {
                                title: string;
                                type: string;
                                enum: string[];
                            };
                            counterLabel: {
                                title: string;
                                type: string;
                            };
                            stringDecimal: {
                                title: string;
                                type: string;
                            };
                            stringPrefix: {
                                title: string;
                                type: string;
                            };
                            stringSuffix: {
                                title: string;
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    export function getEmbedderSchema(): {
        dataSchema: {
            type: string;
            required: string[];
            properties: {
                darkShadow: {
                    type: string;
                };
                customFontColor: {
                    type: string;
                };
                fontColor: {
                    type: string;
                    format: string;
                };
                customBackgroundColor: {
                    type: string;
                };
                backgroundColor: {
                    type: string;
                    format: string;
                };
                counterNumberColor: {
                    type: string;
                    format: string;
                };
                counterLabelColor: {
                    type: string;
                    format: string;
                };
                height: {
                    type: string;
                };
                title: {
                    type: string;
                };
                description: {
                    type: string;
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        elements: ({
                            type: string;
                            scope: string;
                            rule?: undefined;
                        } | {
                            type: string;
                            scope: string;
                            rule: {
                                effect: string;
                                condition: {
                                    scope: string;
                                    schema: {
                                        const: boolean;
                                    };
                                };
                            };
                        })[];
                    }[];
                }[];
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        scope: string;
                    }[];
                }[];
            })[];
        };
    };
}
/// <amd-module name="@scom/scom-counter" />
declare module "@scom/scom-counter" {
    import { Module, ControlElement, Container, IDataSchema, VStack, IUISchema } from '@ijstech/components';
    import { ICounterConfig } from "@scom/scom-counter/global/index.ts";
    interface ScomCounterElement extends ControlElement {
        lazyLoad?: boolean;
        data: ICounterConfig;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-counter']: ScomCounterElement;
            }
        }
    }
    export default class ScomCounter extends Module {
        private vStackCounter;
        private vStackInfo;
        private loadingElm;
        private lbTitle;
        private lbDescription;
        private counterElm;
        private columnNames;
        private counterData;
        private _data;
        tag: any;
        defaultEdit: boolean;
        static create(options?: ScomCounterElement, parent?: Container): Promise<ScomCounter>;
        constructor(parent?: Container, options?: ScomCounterElement);
        private getData;
        private setData;
        private getTag;
        private setTag;
        private _getActions;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => ({
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
                customUI?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void, onChange?: (result: boolean, data: any) => void) => Promise<VStack>;
                };
                userInputDataSchema?: undefined;
                userInputUISchema?: undefined;
            })[];
            getData: any;
            setData: (data: ICounterConfig) => Promise<void>;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => ({
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
                customUI?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void, onChange?: (result: boolean, data: any) => void) => Promise<VStack>;
                };
                userInputDataSchema?: undefined;
                userInputUISchema?: undefined;
            })[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private updateStyle;
        private updateTheme;
        private onUpdateBlock;
        private updateCounterData;
        private renderSnapshotData;
        private renderLiveData;
        private formatCounter;
        private renderCounter;
        private resizeCounter;
        init(): Promise<void>;
        render(): any;
    }
}
