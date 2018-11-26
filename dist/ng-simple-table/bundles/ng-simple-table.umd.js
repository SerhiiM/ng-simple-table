(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-simple-table', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['ng-simple-table'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,i0,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgSimpleTableService = (function () {
        function NgSimpleTableService() {
        }
        NgSimpleTableService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgSimpleTableService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgSimpleTableService.ngInjectableDef = i0.defineInjectable({ factory: function NgSimpleTableService_Factory() { return new NgSimpleTableService(); }, token: NgSimpleTableService, providedIn: "root" });
        return NgSimpleTableService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgSimpleTableComponent = (function () {
        function NgSimpleTableComponent() {
            this._show_pagination = true;
            this._columns = [];
            this._list = [];
            this._sort = [];
            this._meta = {
                currentPage: 0,
                nextPage: 0,
                pagesCount: 0,
                perPage: 0,
                prevPage: 0,
                totalCount: 0
            };
            this.itemID_for_deleting = null;
            this.handleView = new i0.EventEmitter();
            this.handleEdit = new i0.EventEmitter();
            this.handleDelete = new i0.EventEmitter();
            this.handleSorting = new i0.EventEmitter();
            this.handleTurnPage = new i0.EventEmitter();
            this.handleSelectRow = new i0.EventEmitter();
            this.handleToggleCheckBox = new i0.EventEmitter();
            this.handleChangeItemsPerPage = new i0.EventEmitter();
        }
        Object.defineProperty(NgSimpleTableComponent.prototype, "columns", {
            get: /**
             * @return {?}
             */ function () {
                return this._columns;
            },
            set: /**
             * @param {?} columns
             * @return {?}
             */ function (columns) {
                if (columns && Array.isArray(columns)) {
                    this._columns = columns;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSimpleTableComponent.prototype, "list", {
            get: /**
             * @return {?}
             */ function () {
                return this._list;
            },
            set: /**
             * @param {?} list
             * @return {?}
             */ function (list) {
                if (list && Array.isArray(list)) {
                    this._list = list;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSimpleTableComponent.prototype, "meta", {
            get: /**
             * @return {?}
             */ function () {
                return this._meta;
            },
            set: /**
             * @param {?} meta
             * @return {?}
             */ function (meta) {
                if (meta) {
                    this._meta = meta;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSimpleTableComponent.prototype, "pagination", {
            get: /**
             * @return {?}
             */ function () {
                return this._show_pagination;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._show_pagination = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSimpleTableComponent.prototype, "sort", {
            get: /**
             * @return {?}
             */ function () {
                return this._sort;
            },
            set: /**
             * @param {?} sort
             * @return {?}
             */ function (sort) {
                if (sort && Array.isArray(sort)) {
                    this._sort = sort;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSimpleTableComponent.prototype, "showConformationModal", {
            get: /**
             * @return {?}
             */ function () {
                return this._showConformationModal;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._showConformationModal = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSimpleTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.paginationState === false) {
                    this.pagination = false;
                }
            };
        /**
         * @param {?} row
         * @return {?}
         */
        NgSimpleTableComponent.prototype.view = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this.handleView.emit(row.id);
            };
        /**
         * @param {?} row
         * @return {?}
         */
        NgSimpleTableComponent.prototype.edit = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this.handleEdit.emit(row.id);
            };
        /**
         * @param {?} row
         * @return {?}
         */
        NgSimpleTableComponent.prototype.delete = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this.showConformationModal = true;
                this.itemID_for_deleting = row.id;
            };
        /**
         * @param {?} column
         * @param {?} type
         * @return {?}
         */
        NgSimpleTableComponent.prototype.sortColumn = /**
         * @param {?} column
         * @param {?} type
         * @return {?}
         */
            function (column, type) {
                /** @type {?} */
                var sortParamSet = this.sort.some(function (el) { return el.field === column.sortKey || el.field === column.rowKey; });
                if (sortParamSet) {
                    this.sort = this.sort.map(function (el) {
                        if (el.id === column.id) {
                            return __assign({}, el, { type: type });
                        }
                        return el;
                    });
                }
                else {
                    this.sort = __spread(this.sort, [
                        { field: column.sortKey ? column.sortKey : column.rowKey, type: type }
                    ]);
                }
                this.handleSorting.emit(this.sort);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        NgSimpleTableComponent.prototype.turnPage = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** @type {?} */
                var nextPage = this.meta.currentPage + index;
                this.handleTurnPage.emit(nextPage);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSimpleTableComponent.prototype.selectRow = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.handleSelectRow.emit(item);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSimpleTableComponent.prototype.toggleCheckbox = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.handleToggleCheckBox.emit(item);
            };
        /**
         * @param {?} count
         * @return {?}
         */
        NgSimpleTableComponent.prototype.itemsPerPage = /**
         * @param {?} count
         * @return {?}
         */
            function (count) {
                this.handleChangeItemsPerPage.emit(count);
            };
        /**
         * @param {?} column
         * @return {?}
         */
        NgSimpleTableComponent.prototype.getColumnClass = /**
         * @param {?} column
         * @return {?}
         */
            function (column) {
                /** @type {?} */
                var item = this.sort.find(function (i) { return i.field === column.sortKey || i.field === column.rowKey; });
                if (item) {
                    if (item.type === 1) {
                        return 'sort-up';
                    }
                    else {
                        return 'sort-down';
                    }
                }
                return '';
            };
        NgSimpleTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'smt-ng-simple-table',
                        template: "<div class=\"table-wrapper\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th *ngFor=\"let column of columns\" class=\"{{column.withSorting ? '':'no-sort'}}\" width=\"{{column.width ? column.width:'auto'}}\" [ngClass]=\"getColumnClass(column)\">\n        {{ column.titleKey }}\n        <div *ngIf=\"column.withSorting\" class=\"sorting-btn-block\">\n          <button class=\"sort-btn\" (click)=\"sortColumn(column, 1)\"><i class=\"fa fa-sort-up\"></i></button>\n          <button class=\"sort-btn\" (click)=\"sortColumn(column, 0)\"><i class=\"fa fa-sort-down\"></i></button>\n        </div>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let row of list\">\n      <td *ngFor=\"let column of columns\">\n        <div (click)=\"selectRow(row)\">{{column.rowKey && row[column.rowKey]}}</div>\n        <div class=\"action-btns-block\" *ngIf=\"column.withActionCol\">\n          <button (click)=\"view(row)\" class=\"btn btn-view\"><i class=\"fa fa-search\"></i></button>\n          <button (click)=\"edit(row)\" class=\"btn btn-edit\"><i class=\"fa fa-edit\"></i></button>\n          <button (click)=\"delete(row)\" *ngIf=\"!column.hideDeleteBtn\" class=\"btn btn-delete\"><i class=\"fa fa-trash\"></i></button>\n        </div>\n        <div *ngIf=\"column.withSelectionCol\">\n          <input type=\"checkbox\" (change)=\"toggleCheckbox(row)\" [disabled]=\"row.checkbox_disabled\" [checked]=\"row.checkbox_checked\"/>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"pagination\" class=\"pagination-wrap\">\n  <!--<div class=\"pagination-result\">{{meta?.currentPage}} / {{meta?.pagesCount}}</div>-->\n  <div class=\"per-page-btns\">\n    <button (click)=\"itemsPerPage(10)\"  [class]=\"meta.perPage === 10 ? 'active': ''\">10</button>\n    <button (click)=\"itemsPerPage(25)\"  [class]=\"meta.perPage === 25 ? 'active': ''\">25</button>\n    <button (click)=\"itemsPerPage(50)\"  [class]=\"meta.perPage === 50 ? 'active': ''\">50</button>\n    <button (click)=\"itemsPerPage(100)\"  [class]=\"meta.perPage === 100 ? 'active': ''\">100</button>\n  </div>\n  <div class=\"paging_simple_numbers\">\n    <ul class=\"pagination\">\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === 1\" (click)=\"turnPage((meta.currentPage - 1) * -1)\"> \u276E\u276E </button>\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === 1\" (click)=\"turnPage(-1)\"><span class=\"pagination-default\">\u276E</span></button>\n      <button class=\"page-link numbers\" [disabled]=\"true\"> {{meta.currentPage}} </button>\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === meta.pagesCount\" (click)=\"turnPage(1)\"><span class=\"pagination-default\">\u276F</span></button>\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === meta.pagesCount\" (click)=\"turnPage(meta.pagesCount - meta.currentPage)\"> \u276F\u276F </button>\n    </ul>\n  </div>\n</div>\n\n<div class=\"alert-modal choice-modal\" *ngIf=\"showConformationModal\">\n  <p>{{'operation-modal.question'}}?</p>\n  <button class=\"btn-accept\" (click)=\"this.handleDelete.emit(itemID_for_deleting); showConformationModal = false\">Yes</button>\n  <button class=\"btn-cancel\" (click)=\"itemID_for_deleting = null; showConformationModal = false\">No</button>\n  <div class=\"overlay\"></div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NgSimpleTableComponent.ctorParameters = function () { return []; };
        NgSimpleTableComponent.propDecorators = {
            paginationState: [{ type: i0.Input }],
            columns: [{ type: i0.Input }],
            list: [{ type: i0.Input }],
            meta: [{ type: i0.Input, args: ['meta',] }],
            handleView: [{ type: i0.Output }],
            handleEdit: [{ type: i0.Output }],
            handleDelete: [{ type: i0.Output }],
            handleSorting: [{ type: i0.Output }],
            handleTurnPage: [{ type: i0.Output }],
            handleSelectRow: [{ type: i0.Output }],
            handleToggleCheckBox: [{ type: i0.Output }],
            handleChangeItemsPerPage: [{ type: i0.Output }]
        };
        return NgSimpleTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgSimpleTableModule = (function () {
        function NgSimpleTableModule() {
        }
        NgSimpleTableModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule
                        ],
                        declarations: [NgSimpleTableComponent],
                        exports: [NgSimpleTableComponent]
                    },] },
        ];
        return NgSimpleTableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgSimpleTableService = NgSimpleTableService;
    exports.NgSimpleTableComponent = NgSimpleTableComponent;
    exports.NgSimpleTableModule = NgSimpleTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctc2ltcGxlLXRhYmxlL2xpYi9uZy1zaW1wbGUtdGFibGUuc2VydmljZS50cyIsbnVsbCwibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL25nLXNpbXBsZS10YWJsZS9saWIvbmctc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc210LW5nLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIGNsYXNzPVwie3tjb2x1bW4ud2l0aFNvcnRpbmcgPyAnJzonbm8tc29ydCd9fVwiIHdpZHRoPVwie3tjb2x1bW4ud2lkdGggPyBjb2x1bW4ud2lkdGg6J2F1dG8nfX1cIiBbbmdDbGFzc109XCJnZXRDb2x1bW5DbGFzcyhjb2x1bW4pXCI+XG4gICAgICAgIHt7IGNvbHVtbi50aXRsZUtleSB9fVxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLndpdGhTb3J0aW5nXCIgY2xhc3M9XCJzb3J0aW5nLWJ0bi1ibG9ja1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzb3J0LWJ0blwiIChjbGljayk9XCJzb3J0Q29sdW1uKGNvbHVtbiwgMSlcIj48aSBjbGFzcz1cImZhIGZhLXNvcnQtdXBcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNvcnQtYnRuXCIgKGNsaWNrKT1cInNvcnRDb2x1bW4oY29sdW1uLCAwKVwiPjxpIGNsYXNzPVwiZmEgZmEtc29ydC1kb3duXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBsaXN0XCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgKGNsaWNrKT1cInNlbGVjdFJvdyhyb3cpXCI+e3tjb2x1bW4ucm93S2V5ICYmIHJvd1tjb2x1bW4ucm93S2V5XX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tYnRucy1ibG9ja1wiICpuZ0lmPVwiY29sdW1uLndpdGhBY3Rpb25Db2xcIj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ2aWV3KHJvdylcIiBjbGFzcz1cImJ0biBidG4tdmlld1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImVkaXQocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1lZGl0XCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZShyb3cpXCIgKm5nSWY9XCIhY29sdW1uLmhpZGVEZWxldGVCdG5cIiBjbGFzcz1cImJ0biBidG4tZGVsZXRlXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4ud2l0aFNlbGVjdGlvbkNvbFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAoY2hhbmdlKT1cInRvZ2dsZUNoZWNrYm94KHJvdylcIiBbZGlzYWJsZWRdPVwicm93LmNoZWNrYm94X2Rpc2FibGVkXCIgW2NoZWNrZWRdPVwicm93LmNoZWNrYm94X2NoZWNrZWRcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInBhZ2luYXRpb25cIiBjbGFzcz1cInBhZ2luYXRpb24td3JhcFwiPlxuICA8IS0tPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcmVzdWx0XCI+e3ttZXRhPy5jdXJyZW50UGFnZX19IC8ge3ttZXRhPy5wYWdlc0NvdW50fX08L2Rpdj4tLT5cbiAgPGRpdiBjbGFzcz1cInBlci1wYWdlLWJ0bnNcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMTApXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDEwID8gJ2FjdGl2ZSc6ICcnXCI+MTA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMjUpXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDI1ID8gJ2FjdGl2ZSc6ICcnXCI+MjU8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoNTApXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDUwID8gJ2FjdGl2ZSc6ICcnXCI+NTA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMTAwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAxMDAgPyAnYWN0aXZlJzogJydcIj4xMDA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdpbmdfc2ltcGxlX251bWJlcnNcIj5cbiAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IDFcIiAoY2xpY2spPVwidHVyblBhZ2UoKG1ldGEuY3VycmVudFBhZ2UgLSAxKSAqIC0xKVwiPiDDosKdwq7DosKdwq4gPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IDFcIiAoY2xpY2spPVwidHVyblBhZ2UoLTEpXCI+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWRlZmF1bHRcIj7DosKdwq48L3NwYW4+PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnZS1saW5rIG51bWJlcnNcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPiB7e21ldGEuY3VycmVudFBhZ2V9fSA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gbWV0YS5wYWdlc0NvdW50XCIgKGNsaWNrKT1cInR1cm5QYWdlKDEpXCI+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWRlZmF1bHRcIj7DosKdwq88L3NwYW4+PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IG1ldGEucGFnZXNDb3VudFwiIChjbGljayk9XCJ0dXJuUGFnZShtZXRhLnBhZ2VzQ291bnQgLSBtZXRhLmN1cnJlbnRQYWdlKVwiPiDDosKdwq/DosKdwq8gPC9idXR0b24+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImFsZXJ0LW1vZGFsIGNob2ljZS1tb2RhbFwiICpuZ0lmPVwic2hvd0NvbmZvcm1hdGlvbk1vZGFsXCI+XG4gIDxwPnt7J29wZXJhdGlvbi1tb2RhbC5xdWVzdGlvbid9fT88L3A+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tYWNjZXB0XCIgKGNsaWNrKT1cInRoaXMuaGFuZGxlRGVsZXRlLmVtaXQoaXRlbUlEX2Zvcl9kZWxldGluZyk7IHNob3dDb25mb3JtYXRpb25Nb2RhbCA9IGZhbHNlXCI+WWVzPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tY2FuY2VsXCIgKGNsaWNrKT1cIml0ZW1JRF9mb3JfZGVsZXRpbmcgPSBudWxsOyBzaG93Q29uZm9ybWF0aW9uTW9kYWwgPSBmYWxzZVwiPk5vPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBfc2hvd19wYWdpbmF0aW9uID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY29sdW1uczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfbGlzdDogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfc29ydDogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfbWV0YTogTWV0YURhdGEgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gICAgbmV4dFBhZ2U6IDAsXG4gICAgcGFnZXNDb3VudDogMCxcbiAgICBwZXJQYWdlOiAwLFxuICAgIHByZXZQYWdlOiAwLFxuICAgIHRvdGFsQ291bnQ6IDBcbiAgfTtcbiAgcHJpdmF0ZSBfc2hvd0NvbmZvcm1hdGlvbk1vZGFsOiBib29sZWFuO1xuICBpdGVtSURfZm9yX2RlbGV0aW5nOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb25TdGF0ZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1ucyhjb2x1bW5zOiBhbnlbXSkge1xuICAgIGlmIChjb2x1bW5zICYmIEFycmF5LmlzQXJyYXkoY29sdW1ucykpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2x1bW5zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBsaXN0KGxpc3Q6IGFueVtdKSB7XG4gICAgaWYgKGxpc3QgJiYgQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgICAgdGhpcy5fbGlzdCA9IGxpc3Q7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxpc3QoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9XG5cbiAgQElucHV0KCdtZXRhJylcbiAgc2V0IG1ldGEobWV0YTogTWV0YURhdGEpIHtcbiAgICBpZiAobWV0YSkge1xuICAgICAgdGhpcy5fbWV0YSA9IG1ldGE7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1ldGEoKTogTWV0YURhdGEge1xuICAgIHJldHVybiB0aGlzLl9tZXRhO1xuICB9XG5cbiAgc2V0IHBhZ2luYXRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9zaG93X3BhZ2luYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93X3BhZ2luYXRpb247XG4gIH1cblxuICBAT3V0cHV0KClcbiAgaGFuZGxlVmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlRGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVTb3J0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVUdXJuUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVUb2dnbGVDaGVja0JveCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlQ2hhbmdlSXRlbXNQZXJQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc2V0IHNvcnQoc29ydDogYW55W10pIHtcbiAgICBpZiAoc29ydCAmJiBBcnJheS5pc0FycmF5KHNvcnQpKSB7XG4gICAgICB0aGlzLl9zb3J0ID0gc29ydDtcbiAgICB9XG4gIH1cblxuICBnZXQgc29ydCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvbmZvcm1hdGlvbk1vZGFsKHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0NvbmZvcm1hdGlvbk1vZGFsKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb25mb3JtYXRpb25Nb2RhbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb25TdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZpZXcocm93KSB7XG4gICAgdGhpcy5oYW5kbGVWaWV3LmVtaXQocm93LmlkKTtcbiAgfVxuXG4gIGVkaXQocm93KSB7XG4gICAgdGhpcy5oYW5kbGVFZGl0LmVtaXQocm93LmlkKTtcbiAgfVxuXG4gIGRlbGV0ZShyb3cpIHtcbiAgICB0aGlzLnNob3dDb25mb3JtYXRpb25Nb2RhbCA9IHRydWU7XG4gICAgdGhpcy5pdGVtSURfZm9yX2RlbGV0aW5nID0gcm93LmlkO1xuICB9XG5cbiAgc29ydENvbHVtbihjb2x1bW4sIHR5cGUpIHtcbiAgICBjb25zdCBzb3J0UGFyYW1TZXQgPSB0aGlzLnNvcnQuc29tZShcbiAgICAgIGVsID0+IGVsLmZpZWxkID09PSBjb2x1bW4uc29ydEtleSB8fCBlbC5maWVsZCA9PT0gY29sdW1uLnJvd0tleVxuICAgICk7XG4gICAgaWYgKHNvcnRQYXJhbVNldCkge1xuICAgICAgdGhpcy5zb3J0ID0gdGhpcy5zb3J0Lm1hcChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5pZCA9PT0gY29sdW1uLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydCA9IFtcbiAgICAgICAgLi4udGhpcy5zb3J0LFxuICAgICAgICB7IGZpZWxkOiBjb2x1bW4uc29ydEtleSA/IGNvbHVtbi5zb3J0S2V5IDogY29sdW1uLnJvd0tleSwgdHlwZSB9XG4gICAgICBdO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZVNvcnRpbmcuZW1pdCh0aGlzLnNvcnQpO1xuICB9XG5cbiAgdHVyblBhZ2UoaW5kZXgpIHtcbiAgICBjb25zdCBuZXh0UGFnZSA9IHRoaXMubWV0YS5jdXJyZW50UGFnZSArIGluZGV4O1xuICAgIHRoaXMuaGFuZGxlVHVyblBhZ2UuZW1pdChuZXh0UGFnZSk7XG4gIH1cblxuICBzZWxlY3RSb3coaXRlbSkge1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93LmVtaXQoaXRlbSk7XG4gIH1cblxuICB0b2dnbGVDaGVja2JveChpdGVtKSB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGVDaGVja0JveC5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgaXRlbXNQZXJQYWdlKGNvdW50KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VJdGVtc1BlclBhZ2UuZW1pdChjb3VudCk7XG4gIH1cbiAgZ2V0Q29sdW1uQ2xhc3MoY29sdW1uKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuc29ydC5maW5kKFxuICAgICAgaSA9PiBpLmZpZWxkID09PSBjb2x1bW4uc29ydEtleSB8fCBpLmZpZWxkID09PSBjb2x1bW4ucm93S2V5XG4gICAgKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gJ3NvcnQtdXAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdzb3J0LWRvd24nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nU2ltcGxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL25nLXNpbXBsZS10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ1NpbXBsZVRhYmxlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nU2ltcGxlVGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJCcm93c2VyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzttQ0FKRDs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7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