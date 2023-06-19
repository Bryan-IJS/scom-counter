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
define("@scom/scom-counter/global/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-counter/global/utils.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callAPI = exports.formatNumberWithSeparators = void 0;
    ///<amd-module name='@scom/scom-counter/global/utils.ts'/> 
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision || precision === 0) {
            let outputStr = '';
            if (value >= 1) {
                outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            return outputStr;
        }
        return value.toLocaleString('en-US');
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const callAPI = async (apiEndpoint) => {
        if (!apiEndpoint)
            return [];
        try {
            const response = await fetch(apiEndpoint);
            const jsonData = await response.json();
            return jsonData.result.rows || [];
        }
        catch (error) {
            console.log(error);
        }
        return [];
    };
    exports.callAPI = callAPI;
});
define("@scom/scom-counter/global/index.ts", ["require", "exports", "@scom/scom-counter/global/interfaces.ts", "@scom/scom-counter/global/utils.ts"], function (require, exports, interfaces_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(interfaces_1, exports);
    __exportStar(utils_1, exports);
});
define("@scom/scom-counter/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.counterStyle = exports.containerStyle = void 0;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
        padding: 10
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
            "apiEndpoint": "/dune/query/2030584",
            "title": "Ethereum Beacon Chain Deposits",
            "options": {
                "counterColName": "deposited",
                "counterLabel": "ETH deposited"
            }
        }
    };
});
define("@scom/scom-counter", ["require", "exports", "@ijstech/components", "@scom/scom-counter/global/index.ts", "@scom/scom-counter/index.css.ts", "@scom/scom-counter/assets.ts", "@scom/scom-counter/data.json.ts"], function (require, exports, components_3, index_1, index_css_1, assets_1, data_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_3.Styles.Theme.ThemeVars;
    const currentTheme = components_3.Styles.Theme.currentTheme;
    const options = {
        type: 'object',
        required: ['counterColName'],
        properties: {
            counterColName: {
                type: 'string'
            },
            counterLabel: {
                type: 'string'
            },
            stringDecimal: {
                type: 'number'
            },
            stringPrefix: {
                type: 'string'
            },
            stringSuffix: {
                type: 'string'
            }
        }
    };
    let ScomCounter = class ScomCounter extends components_3.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this.apiEndpoint = '';
            this._data = { apiEndpoint: '', title: '', options: undefined };
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
        async setTag(value) {
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
        getPropertiesSchema() {
            const propertiesSchema = {
                type: 'object',
                required: ['apiEndpoint', 'title'],
                properties: {
                    apiEndpoint: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    options
                }
            };
            return propertiesSchema;
        }
        getGeneralSchema() {
            const propertiesSchema = {
                type: 'object',
                required: ['apiEndpoint', 'title'],
                properties: {
                    apiEndpoint: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    }
                }
            };
            return propertiesSchema;
        }
        getAdvanceSchema() {
            const propertiesSchema = {
                type: 'object',
                properties: {
                    options
                }
            };
            return propertiesSchema;
        }
        getThemeSchema() {
            const themeSchema = {
                type: 'object',
                properties: {
                    darkShadow: {
                        type: 'boolean'
                    },
                    fontColor: {
                        type: 'string',
                        format: 'color'
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
                    // width: {
                    //   type: 'string'
                    // },
                    height: {
                        type: 'string'
                    }
                }
            };
            return themeSchema;
        }
        _getActions(propertiesSchema, themeSchema, advancedSchema) {
            const actions = [
                {
                    name: 'Settings',
                    icon: 'cog',
                    command: (builder, userInputData) => {
                        let _oldData = { apiEndpoint: '', title: '', options: undefined };
                        return {
                            execute: async () => {
                                _oldData = Object.assign({}, this._data);
                                if (userInputData) {
                                    if (advancedSchema) {
                                        this._data = Object.assign(Object.assign({}, this._data), userInputData);
                                    }
                                    else {
                                        this._data = Object.assign({}, userInputData);
                                    }
                                }
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                this.setData(this._data);
                            },
                            undo: () => {
                                if (advancedSchema)
                                    _oldData = Object.assign(Object.assign({}, _oldData), { options: this._data.options });
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(_oldData);
                                this.setData(_oldData);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: propertiesSchema,
                },
                {
                    name: 'Theme Settings',
                    icon: 'palette',
                    command: (builder, userInputData) => {
                        let oldTag = {};
                        return {
                            execute: async () => {
                                if (!userInputData)
                                    return;
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(userInputData);
                                else
                                    this.setTag(userInputData);
                            },
                            undo: () => {
                                if (!userInputData)
                                    return;
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(this.tag);
                                else
                                    this.setTag(this.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: themeSchema
                }
            ];
            if (advancedSchema) {
                const advanced = {
                    name: 'Advanced',
                    icon: 'sliders-h',
                    command: (builder, userInputData) => {
                        let _oldData = { counterColName: '' };
                        return {
                            execute: async () => {
                                var _a;
                                _oldData = Object.assign({}, (_a = this._data) === null || _a === void 0 ? void 0 : _a.options);
                                if ((userInputData === null || userInputData === void 0 ? void 0 : userInputData.options) !== undefined)
                                    this._data.options = userInputData.options;
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                this.setData(this._data);
                            },
                            undo: () => {
                                this._data.options = Object.assign({}, _oldData);
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                this.setData(this._data);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: advancedSchema,
                };
                actions.push(advanced);
            }
            return actions;
        }
        getConfigurators() {
            const self = this;
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: () => {
                        return this._getActions(this.getGeneralSchema(), this.getThemeSchema(), this.getAdvanceSchema());
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
                        return this._getActions(this.getPropertiesSchema(), this.getThemeSchema());
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
            var _a, _b, _c, _d, _e;
            if (this.vStackCounter) {
                this.vStackCounter.style.boxShadow = ((_a = this.tag) === null || _a === void 0 ? void 0 : _a.darkShadow) ? '0 -2px 10px rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
            }
            this.updateStyle('--text-primary', (_b = this.tag) === null || _b === void 0 ? void 0 : _b.fontColor);
            this.updateStyle('--background-main', (_c = this.tag) === null || _c === void 0 ? void 0 : _c.backgroundColor);
            this.updateStyle('--colors-primary-main', (_d = this.tag) === null || _d === void 0 ? void 0 : _d.counterNumberColor);
            this.updateStyle('--colors-primary-dark', (_e = this.tag) === null || _e === void 0 ? void 0 : _e.counterLabelColor);
        }
        onUpdateBlock() {
            this.renderCounter();
            this.updateTheme();
        }
        async updateCounterData() {
            if (this._data.apiEndpoint === this.apiEndpoint) {
                this.onUpdateBlock();
                return;
            }
            const apiEndpoint = this._data.apiEndpoint;
            this.apiEndpoint = apiEndpoint;
            if (apiEndpoint) {
                this.loadingElm.visible = true;
                const data = await (0, index_1.callAPI)(apiEndpoint);
                this.loadingElm.visible = false;
                if (data && this._data.apiEndpoint === apiEndpoint) {
                    this.counterData = data;
                    this.onUpdateBlock();
                    return;
                }
            }
            this.counterData = [];
            this.onUpdateBlock();
        }
        formatCounter(num, decimals) {
            return (0, index_1.formatNumberWithSeparators)(num, decimals);
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
                const isNumber = typeof value === 'number';
                let _number = isNumber ? (Number(value) / 100) : 0;
                const lbValue = new components_3.Label(this.counterElm, {
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
                    const increment = Number(value) / 20;
                    let interval = setInterval(() => {
                        _number += increment;
                        if (_number >= Number(value)) {
                            _number = Number(value);
                            clearInterval(interval);
                        }
                        lbValue.caption = `${stringPrefix || ''}${this.formatCounter(_number, stringDecimal)}${stringSuffix || ''}`;
                    }, 25);
                }
            }
            if (counterLabel) {
                new components_3.Label(this.counterElm, {
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
                fontColor: currentTheme.text.primary,
                backgroundColor: currentTheme.background.main,
                counterNumberColor: currentTheme.colors.primary.main,
                counterLabelColor: currentTheme.colors.primary.dark,
                height: 200,
                darkShadow: false
            });
            // const { width, height, darkShadow } = this.tag || {};
            // this.width = width || 700;
            // this.height = height || 200;
            this.maxWidth = '100%';
            this.vStackCounter.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
            this.classList.add(index_css_1.counterStyle);
            const lazyLoad = this.getAttribute('lazyLoad', true, true);
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
            return (this.$render("i-vstack", { id: "vStackCounter", position: "relative", background: { color: Theme.background.main }, height: "100%", padding: { top: 10, bottom: 10, left: 10, right: 10 }, class: index_css_1.containerStyle },
                this.$render("i-vstack", { id: "loadingElm", class: "i-loading-overlay" },
                    this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                        this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_1.default.fullPath('img/loading.svg'), width: 36, height: 36 } }))),
                this.$render("i-vstack", { id: "vStackInfo", width: "100%", maxWidth: "100%", margin: { left: 'auto', right: 'auto', bottom: 10 }, verticalAlignment: "center" },
                    this.$render("i-label", { id: "lbTitle", font: { bold: true, color: Theme.text.primary } }),
                    this.$render("i-label", { id: "lbDescription", margin: { top: 5 }, font: { color: Theme.text.primary } })),
                this.$render("i-vstack", { id: "counterElm", margin: { top: 16, bottom: 32 }, horizontalAlignment: "center", width: "100%", height: "100%", class: "text-center" })));
        }
    };
    ScomCounter = __decorate([
        components_3.customModule,
        (0, components_3.customElements)('i-scom-counter')
    ], ScomCounter);
    exports.default = ScomCounter;
});
