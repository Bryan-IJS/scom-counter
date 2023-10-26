var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("@scom/scom-counter/global/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-counter/global/utils.ts", ["require", "exports", "@ijstech/eth-wallet"], function (require, exports, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNumeric = void 0;
    const isNumeric = (value) => {
        if (value instanceof eth_wallet_1.BigNumber) {
            return !value.isNaN() && value.isFinite();
        }
        if (typeof value === 'string') {
            const parsed = new eth_wallet_1.BigNumber(value);
            return !parsed.isNaN() && parsed.isFinite();
        }
        return !isNaN(value) && isFinite(value);
    };
    exports.isNumeric = isNumeric;
});
// export const formatNumberWithSeparators = (value: number | string | BigNumber, options: IFormatNumberOptions): string => {
//   let bigValue: BigNumber;
//   if (value instanceof BigNumber) {
//     bigValue = value;
//   } 
//   else {
//     bigValue = new BigNumber(value);
//   }
//   if (bigValue.isNaN() || !bigValue.isFinite()) {
//     return '0';
//   }
//   if (options.precision || options.precision === 0) {
//     let outputStr = '';
//     if (bigValue.gte(1)) {
//       outputStr = bigValue.toFormat(options.precision, options.roundingMode || BigNumber.ROUND_HALF_CEIL);
//     } 
//     else {
//       outputStr = bigValue.toFormat(options.precision);
//     }
//     if (outputStr.length > 18) {
//       outputStr = outputStr.substring(0, 18) + '...';
//     }
//     return outputStr;
//   }
//   return bigValue.toFormat();
// }
define("@scom/scom-counter/global/index.ts", ["require", "exports", "@scom/scom-counter/global/interfaces.ts", "@scom/scom-counter/global/utils.ts"], function (require, exports, interfaces_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(interfaces_1, exports);
    __exportStar(utils_1, exports);
});
define("@scom/scom-counter/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.counterStyle = exports.textStyle = exports.containerStyle = void 0;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
        padding: 10,
        background: 'var(--custom-background-color, var(--background-main))'
    });
    exports.textStyle = components_1.Styles.style({
        color: 'var(--custom-text-color, var(--text-primary))'
    });
    exports.counterStyle = components_1.Styles.style({
        display: 'block',
    });
});
define("@scom/scom-counter/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_2.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    exports.default = {
        fullPath
    };
});
define("@scom/scom-counter/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-counter/data.json.ts'/> 
    exports.default = {
        "defaultBuilderData": {
            // "apiEndpoint": "/dune/query/2030584",
            "dataSource": "Dune",
            "queryId": "2030584",
            "title": "Ethereum Beacon Chain Deposits",
            "options": {
                "counterColName": "deposited",
                "counterLabel": "ETH deposited"
            }
        }
    };
});
define("@scom/scom-counter/dataOptionsForm.tsx", ["require", "exports", "@ijstech/components"], function (require, exports, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ScomCounterDataOptionsForm = class ScomCounterDataOptionsForm extends components_3.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        get data() {
            return this._data;
        }
        set data(value) {
            this._data = value;
            this.renderUI();
        }
        async refreshFormData() {
            this._data = await this.formEl.getFormData();
            return this._data;
        }
        renderUI() {
            this.formEl.clearInnerHTML();
            this.formEl.jsonSchema = this._jsonSchema;
            this.formEl.formOptions = {
                columnWidth: '100%',
                columnsPerRow: 1,
                confirmButtonOptions: {
                    hide: true
                }
            };
            this.formEl.renderForm();
            this.formEl.clearFormData();
            this.formEl.setFormData(this._data);
            const inputs = this.formEl.querySelectorAll('[scope]');
            for (let input of inputs) {
                const inputEl = input;
                inputEl.onChanged = this.onInputChanged;
            }
        }
        async onInputChanged() {
            const data = await this.formEl.getFormData();
            await this.onCustomInputChanged(data);
        }
        async onCustomInputChanged(data) {
        }
        async init() {
            super.init();
            this.onInputChanged = this.onInputChanged.bind(this);
            const jsonSchema = this.getAttribute('jsonSchema', true);
            this._jsonSchema = jsonSchema;
            const counterColName = this.getAttribute('counterColName', true, '');
            const counterLabel = this.getAttribute('counterLabel', true, '');
            const stringDecimal = this.getAttribute('stringDecimal', true, 0);
            const stringPrefix = this.getAttribute('stringPrefix', true, '');
            const stringSuffix = this.getAttribute('stringSuffix', true, '');
            this.data = {
                options: {
                    counterColName,
                    counterLabel,
                    stringDecimal,
                    stringPrefix,
                    stringSuffix
                }
            };
        }
        render() {
            return (this.$render("i-panel", null,
                this.$render("i-vstack", { gap: '0.5rem' },
                    this.$render("i-panel", { id: 'pnlForm' },
                        this.$render("i-form", { id: 'formEl' })))));
        }
    };
    ScomCounterDataOptionsForm = __decorate([
        components_3.customModule,
        (0, components_3.customElements)('i-scom-counter-data-options-form')
    ], ScomCounterDataOptionsForm);
    exports.default = ScomCounterDataOptionsForm;
});
define("@scom/scom-counter/formSchema.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEmbedderSchema = exports.getBuilderSchema = void 0;
    ///<amd-module name='@scom/scom-counter/formSchema.ts'/> 
    function visualizationOptions(columns) {
        return {
            type: 'object',
            title: 'Visualization Options',
            required: ['counterColName'],
            properties: {
                counterColName: {
                    title: 'Column',
                    type: 'string',
                    enum: columns
                },
                counterLabel: {
                    title: 'Label',
                    type: 'string'
                },
                stringDecimal: {
                    title: 'Decimals',
                    type: 'number'
                },
                stringPrefix: {
                    title: 'Prefix',
                    type: 'string'
                },
                stringSuffix: {
                    title: 'Suffix',
                    type: 'string'
                }
            }
        };
    }
    const theme = {
        darkShadow: {
            type: 'boolean'
        },
        customFontColor: {
            type: 'boolean'
        },
        fontColor: {
            type: 'string',
            format: 'color'
        },
        customBackgroundColor: {
            type: 'boolean'
        },
        backgroundColor: {
            type: 'string',
            format: 'color'
        },
        counterNumberColor: {
            type: 'string',
            format: 'color'
        },
        counterLabelColor: {
            type: 'string',
            format: 'color'
        },
        height: {
            type: 'string'
        }
    };
    const themeUISchema = {
        type: 'Category',
        label: 'Theme',
        elements: [
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/customFontColor'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/fontColor',
                                rule: {
                                    effect: 'ENABLE',
                                    condition: {
                                        scope: '#/properties/customFontColor',
                                        schema: {
                                            const: true
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/customBackgroundColor'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/backgroundColor',
                                rule: {
                                    effect: 'ENABLE',
                                    condition: {
                                        scope: '#/properties/customBackgroundColor',
                                        schema: {
                                            const: true
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/counterNumberColor'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/counterLabelColor'
                            }
                        ]
                    },
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/darkShadow'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/height'
                            }
                        ]
                    }
                ]
            }
        ]
    };
    function getBuilderSchema(column) {
        return {
            dataSchema: {
                type: 'object',
                required: ['title'],
                properties: Object.assign({ title: {
                        type: 'string'
                    }, description: {
                        type: 'string'
                    } }, theme)
            },
            uiSchema: {
                type: 'Categorization',
                elements: [
                    {
                        type: 'Category',
                        label: 'General',
                        elements: [
                            {
                                type: 'VerticalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/title'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/description'
                                    }
                                ]
                            }
                        ]
                    },
                    themeUISchema
                ]
            },
            advanced: {
                dataSchema: {
                    type: 'object',
                    properties: {
                        options: visualizationOptions(column)
                    }
                }
            }
        };
    }
    exports.getBuilderSchema = getBuilderSchema;
    function getEmbedderSchema() {
        return {
            dataSchema: {
                type: 'object',
                required: ['title'],
                properties: Object.assign({ title: {
                        type: 'string'
                    }, description: {
                        type: 'string'
                    } }, theme)
            },
            uiSchema: {
                type: 'Categorization',
                elements: [
                    {
                        type: 'Category',
                        label: 'General',
                        elements: [
                            {
                                type: 'VerticalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/title'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/description'
                                    }
                                ]
                            }
                        ]
                    },
                    themeUISchema
                ]
            }
        };
    }
    exports.getEmbedderSchema = getEmbedderSchema;
});
define("@scom/scom-counter", ["require", "exports", "@ijstech/components", "@scom/scom-counter/global/index.ts", "@scom/scom-counter/index.css.ts", "@scom/scom-counter/assets.ts", "@scom/scom-counter/data.json.ts", "@scom/scom-chart-data-source-setup", "@scom/scom-counter/dataOptionsForm.tsx", "@scom/scom-counter/formSchema.ts", "@ijstech/eth-wallet"], function (require, exports, components_4, index_1, index_css_1, assets_1, data_json_1, scom_chart_data_source_setup_1, dataOptionsForm_1, formSchema_1, eth_wallet_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_4.Styles.Theme.ThemeVars;
    const currentTheme = components_4.Styles.Theme.currentTheme;
    const DefaultData = {
        dataSource: scom_chart_data_source_setup_1.DataSource.Dune,
        queryId: '',
        apiEndpoint: '',
        title: '',
        options: undefined,
        mode: scom_chart_data_source_setup_1.ModeType.LIVE
    };
    let ScomCounter = class ScomCounter extends components_4.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this.columnNames = [];
            this._data = DefaultData;
            this.tag = {};
            this.defaultEdit = true;
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            this.updateCounterData();
        }
        getTag() {
            return this.tag;
        }
        async setTag(value, fromParent) {
            if (fromParent) {
                this.tag.parentFontColor = value.fontColor;
                this.tag.parentCustomFontColor = value.customFontColor;
                this.tag.parentBackgroundColor = value.backgroundColor;
                this.tag.parentCustomBackgroundColor = value.customBackgoundColor;
                this.tag.customWidgetsBackground = value.customWidgetsBackground;
                this.tag.widgetsBackground = value.widgetsBackground;
                this.tag.customWidgetsColor = value.customWidgetsColor;
                this.tag.widgetsColor = value.widgetsColor;
                this.onUpdateBlock();
                return;
            }
            const newValue = value || {};
            for (let prop in newValue) {
                if (newValue.hasOwnProperty(prop)) {
                    this.tag[prop] = newValue[prop];
                }
            }
            this.width = this.tag.width || 700;
            this.height = this.tag.height || 200;
            this.onUpdateBlock();
        }
        _getActions(dataSchema, uiSchema, advancedSchema) {
            const actions = [
                {
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = DefaultData;
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { title, description } = userInputData, themeSettings = __rest(userInputData, ["title", "description"]);
                                const generalSettings = {
                                    title,
                                    description,
                                };
                                if (advancedSchema) {
                                    this._data = Object.assign(Object.assign({}, this._data), generalSettings);
                                }
                                else {
                                    this._data = Object.assign({}, generalSettings);
                                }
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                this.setData(this._data);
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                            },
                            undo: () => {
                                if (advancedSchema)
                                    oldData = Object.assign(Object.assign({}, oldData), { options: this._data.options });
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(oldData);
                                this.setData(oldData);
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(this.tag);
                                else
                                    this.setTag(this.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: dataSchema,
                    userInputUISchema: uiSchema
                },
                {
                    name: 'Data',
                    icon: 'database',
                    command: (builder, userInputData) => {
                        let _oldData = DefaultData;
                        return {
                            execute: async () => {
                                _oldData = Object.assign({}, this._data);
                                if (userInputData === null || userInputData === void 0 ? void 0 : userInputData.mode)
                                    this._data.mode = userInputData === null || userInputData === void 0 ? void 0 : userInputData.mode;
                                if (userInputData === null || userInputData === void 0 ? void 0 : userInputData.file)
                                    this._data.file = userInputData === null || userInputData === void 0 ? void 0 : userInputData.file;
                                if (userInputData === null || userInputData === void 0 ? void 0 : userInputData.dataSource)
                                    this._data.dataSource = userInputData === null || userInputData === void 0 ? void 0 : userInputData.dataSource;
                                if (userInputData === null || userInputData === void 0 ? void 0 : userInputData.queryId)
                                    this._data.queryId = userInputData === null || userInputData === void 0 ? void 0 : userInputData.queryId;
                                if (userInputData === null || userInputData === void 0 ? void 0 : userInputData.apiEndpoint)
                                    this._data.apiEndpoint = userInputData === null || userInputData === void 0 ? void 0 : userInputData.apiEndpoint;
                                if ((userInputData === null || userInputData === void 0 ? void 0 : userInputData.options) !== undefined)
                                    this._data.options = userInputData.options;
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                this.setData(this._data);
                            },
                            undo: () => {
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(_oldData);
                                this.setData(_oldData);
                            },
                            redo: () => { }
                        };
                    },
                    customUI: {
                        render: async (data, onConfirm, onChange) => {
                            const vstack = new components_4.VStack(null, { gap: '1rem' });
                            const dataSourceSetup = new scom_chart_data_source_setup_1.default(null, Object.assign(Object.assign({}, this._data), { chartData: JSON.stringify(this.counterData), onCustomDataChanged: async (dataSourceSetupData) => {
                                    if (onChange) {
                                        onChange(true, Object.assign(Object.assign({}, this._data), dataSourceSetupData));
                                    }
                                } }));
                            const hstackBtnConfirm = new components_4.HStack(null, {
                                verticalAlignment: 'center',
                                horizontalAlignment: 'end'
                            });
                            const button = new components_4.Button(null, {
                                caption: 'Confirm',
                                width: 'auto',
                                height: 40,
                                font: { color: Theme.colors.primary.contrastText }
                            });
                            hstackBtnConfirm.append(button);
                            vstack.append(dataSourceSetup);
                            const dataOptionsForm = new dataOptionsForm_1.default(null, Object.assign(Object.assign({}, this._data.options), { jsonSchema: advancedSchema }));
                            vstack.append(dataOptionsForm);
                            vstack.append(hstackBtnConfirm);
                            if (onChange) {
                                dataOptionsForm.onCustomInputChanged = async (optionsFormData) => {
                                    onChange(true, Object.assign(Object.assign(Object.assign({}, this._data), optionsFormData), dataSourceSetup.data));
                                };
                            }
                            button.onClick = async () => {
                                const { dataSource, file, mode } = dataSourceSetup.data;
                                if (mode === scom_chart_data_source_setup_1.ModeType.LIVE && !dataSource)
                                    return;
                                if (mode === scom_chart_data_source_setup_1.ModeType.SNAPSHOT && !(file === null || file === void 0 ? void 0 : file.cid))
                                    return;
                                if (onConfirm) {
                                    const optionsFormData = await dataOptionsForm.refreshFormData();
                                    onConfirm(true, Object.assign(Object.assign(Object.assign({}, this._data), optionsFormData), dataSourceSetup.data));
                                }
                            };
                            return vstack;
                        }
                    }
                }
            ];
            // if (advancedSchema) {
            //   const advanced = {
            //     name: 'Advanced',
            //     icon: 'sliders-h',
            //     command: (builder: any, userInputData: any) => {
            //       let _oldData: ICounterOptions = { counterColName: '' };
            //       return {
            //         execute: async () => {
            //           _oldData = { ...this._data?.options };
            //           if (userInputData?.options !== undefined) this._data.options = userInputData.options;
            //           if (builder?.setData) builder.setData(this._data);
            //           this.setData(this._data);
            //         },
            //         undo: () => {
            //           this._data.options = { ..._oldData };
            //           if (builder?.setData) builder.setData(this._data);
            //           this.setData(this._data);
            //         },
            //         redo: () => { }
            //       }
            //     },
            //     userInputDataSchema: advancedSchema,
            //   }
            //   actions.push(advanced);
            // }
            return actions;
        }
        getConfigurators() {
            const self = this;
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: () => {
                        const builderSchema = (0, formSchema_1.getBuilderSchema)(this.columnNames);
                        const dataSchema = builderSchema.dataSchema;
                        const uiSchema = builderSchema.uiSchema;
                        const advancedSchema = builderSchema.advanced.dataSchema;
                        return this._getActions(dataSchema, uiSchema, advancedSchema);
                    },
                    getData: this.getData.bind(this),
                    setData: async (data) => {
                        const defaultData = data_json_1.default.defaultBuilderData;
                        await this.setData(Object.assign(Object.assign({}, defaultData), data));
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Emdedder Configurator',
                    target: 'Embedders',
                    getActions: () => {
                        const embedderSchema = (0, formSchema_1.getEmbedderSchema)();
                        const dataSchema = embedderSchema.dataSchema;
                        const uiSchema = embedderSchema.uiSchema;
                        return this._getActions(dataSchema, uiSchema);
                    },
                    getLinkParams: () => {
                        const data = this._data || {};
                        return {
                            data: window.btoa(JSON.stringify(data))
                        };
                    },
                    setLinkParams: async (params) => {
                        if (params.data) {
                            const utf8String = decodeURIComponent(params.data);
                            const decodedString = window.atob(utf8String);
                            const newData = JSON.parse(decodedString);
                            let resultingData = Object.assign(Object.assign({}, self._data), newData);
                            await this.setData(resultingData);
                        }
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        updateStyle(name, value) {
            value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
        }
        updateTheme() {
            var _a;
            if (this.vStackCounter) {
                this.vStackCounter.style.boxShadow = ((_a = this.tag) === null || _a === void 0 ? void 0 : _a.darkShadow) ? '0 -2px 10px rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
            }
            const tags = this.tag || {};
            this.updateStyle('--custom-text-color', tags.customFontColor ? tags.fontColor : tags.customWidgetsColor ? tags.widgetsColor : tags.parentCustomFontColor ? tags.parentFontColor : '');
            this.updateStyle('--custom-background-color', tags.customBackgroundColor ? tags.backgroundColor : tags.customWidgetsBackground ? tags.widgetsBackground : tags.parentCustomBackgroundColor ? tags.parentBackgroundColor : '');
            this.updateStyle('--colors-primary-main', tags.counterNumberColor);
            this.updateStyle('--colors-primary-dark', tags.counterLabelColor);
        }
        onUpdateBlock() {
            this.renderCounter();
            this.updateTheme();
        }
        async updateCounterData() {
            var _a;
            this.loadingElm.visible = true;
            if (((_a = this._data) === null || _a === void 0 ? void 0 : _a.mode) === scom_chart_data_source_setup_1.ModeType.SNAPSHOT)
                await this.renderSnapshotData();
            else
                await this.renderLiveData();
            this.loadingElm.visible = false;
        }
        async renderSnapshotData() {
            var _a;
            if ((_a = this._data.file) === null || _a === void 0 ? void 0 : _a.cid) {
                try {
                    const data = await (0, scom_chart_data_source_setup_1.fetchContentByCID)(this._data.file.cid);
                    if (data) {
                        const { metadata, rows } = data;
                        this.counterData = rows;
                        this.columnNames = (metadata === null || metadata === void 0 ? void 0 : metadata.column_names) || [];
                        this.onUpdateBlock();
                        return;
                    }
                }
                catch (_b) { }
            }
            this.counterData = [];
            this.columnNames = [];
            this.onUpdateBlock();
        }
        async renderLiveData() {
            const dataSource = this._data.dataSource;
            if (dataSource) {
                try {
                    const data = await (0, scom_chart_data_source_setup_1.callAPI)({
                        dataSource,
                        queryId: this._data.queryId,
                        apiEndpoint: this._data.apiEndpoint
                    });
                    if (data) {
                        const { metadata, rows } = data;
                        this.counterData = rows;
                        this.columnNames = (metadata === null || metadata === void 0 ? void 0 : metadata.column_names) || [];
                        this.onUpdateBlock();
                        return;
                    }
                }
                catch (_a) { }
            }
            this.counterData = [];
            this.columnNames = [];
            this.onUpdateBlock();
        }
        formatCounter(num, decimals) {
            if (typeof num === 'object')
                num = num.toString();
            return components_4.FormatUtils.formatNumber(num, { decimalFigures: decimals });
        }
        async renderCounter(resize) {
            var _a;
            if (!this.counterElm && this._data.options)
                return;
            const { title, description } = this._data;
            const { counterColName, counterLabel, stringDecimal, stringPrefix, stringSuffix, coloredNegativeValues, coloredPositiveValues } = ((_a = this._data) === null || _a === void 0 ? void 0 : _a.options) || {};
            this.lbTitle.caption = title;
            this.lbDescription.caption = description;
            this.lbDescription.visible = !!description;
            this.counterElm.height = `calc(100% - ${this.vStackInfo.offsetHeight + 10}px)`;
            if (resize)
                return;
            this.counterElm.clearInnerHTML();
            if (this.counterData && this.counterData.length) {
                const value = this.counterData[0][counterColName];
                const isNumber = (0, index_1.isNumeric)(value);
                let _number = isNumber ? new eth_wallet_2.BigNumber(value).dividedBy(100) : new eth_wallet_2.BigNumber(0);
                const lbValue = new components_4.Label(this.counterElm, {
                    caption: `${stringPrefix || ''}${isNumber ? 0 : value}${stringSuffix || ''}`,
                    font: {
                        size: '32px',
                        color: Theme.colors.primary.main
                    }
                });
                lbValue.wordBreak = 'break-all';
                if (isNumber) {
                    if (!lbValue.isConnected)
                        await lbValue.ready();
                    const increment = new eth_wallet_2.BigNumber(value).dividedBy(20);
                    let interval = setInterval(() => {
                        _number = _number.plus(increment);
                        if (_number.gte(value)) {
                            _number = new eth_wallet_2.BigNumber(value);
                            clearInterval(interval);
                        }
                        lbValue.caption = `${stringPrefix || ''}${this.formatCounter(_number, stringDecimal)}${stringSuffix || ''}`;
                    }, 25);
                }
            }
            if (counterLabel) {
                new components_4.Label(this.counterElm, {
                    caption: counterLabel,
                    font: { size: '18px', color: Theme.colors.primary.dark }
                });
            }
        }
        resizeCounter() {
            this.renderCounter(true);
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            this.setTag({
                counterNumberColor: currentTheme.colors.primary.main,
                counterLabelColor: currentTheme.colors.primary.dark,
                height: 200,
                darkShadow: false
            });
            this.maxWidth = '100%';
            this.vStackCounter.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
            this.classList.add(index_css_1.counterStyle);
            const lazyLoad = this.getAttribute('lazyLoad', true, false);
            if (!lazyLoad) {
                const data = this.getAttribute('data', true);
                if (data) {
                    this.setData(data);
                }
            }
            this.isReadyCallbackQueued = false;
            this.executeReadyCallback();
            window.addEventListener('resize', () => {
                setTimeout(() => {
                    this.resizeCounter();
                }, 300);
            });
        }
        render() {
            return (this.$render("i-vstack", { id: "vStackCounter", position: "relative", height: "100%", padding: { top: 10, bottom: 10, left: 10, right: 10 }, class: index_css_1.containerStyle },
                this.$render("i-vstack", { id: "loadingElm", class: "i-loading-overlay" },
                    this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                        this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_1.default.fullPath('img/loading.svg'), width: 36, height: 36 } }))),
                this.$render("i-vstack", { id: "vStackInfo", width: "100%", maxWidth: "100%", margin: { left: 'auto', right: 'auto', bottom: 10 }, verticalAlignment: "center" },
                    this.$render("i-label", { id: "lbTitle", font: { bold: true }, class: index_css_1.textStyle }),
                    this.$render("i-label", { id: "lbDescription", margin: { top: 5 }, class: index_css_1.textStyle })),
                this.$render("i-vstack", { id: "counterElm", margin: { top: 16, bottom: 32 }, horizontalAlignment: "center", width: "100%", height: "100%", class: "text-center" })));
        }
    };
    ScomCounter = __decorate([
        components_4.customModule,
        (0, components_4.customElements)('i-scom-counter')
    ], ScomCounter);
    exports.default = ScomCounter;
});
