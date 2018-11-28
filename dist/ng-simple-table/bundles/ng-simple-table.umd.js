(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-simple-table', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['ng-simple-table'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,i0,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSimpleTableService = (function () {
        function NgSimpleTableService() {
        }
        NgSimpleTableService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSimpleTableComponent = (function () {
        function NgSimpleTableComponent() {
            this._pagination = true;
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
                return this._pagination;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._pagination = value;
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
                        template: "<div class=\"smt-table-wrapper\">\n  <table class=\"smt-table\">\n    <thead>\n    <tr>\n      <th *ngFor=\"let column of columns\" class=\"{{column.withSorting ? '':'no-sort'}}\" width=\"{{column.width ? column.width:'auto'}}\" [ngClass]=\"getColumnClass(column)\">\n        {{ column.titleKey }}\n        <div *ngIf=\"column.withSorting\" class=\"smt-sorting-btn-block\">\n          <button class=\"btn\" (click)=\"sortColumn(column, 1)\"><i class=\"fa fa-sort-up\"></i></button>\n          <button class=\"btn\" (click)=\"sortColumn(column, 0)\"><i class=\"fa fa-sort-down\"></i></button>\n        </div>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let row of list\">\n      <td *ngFor=\"let column of columns\">\n        <div (click)=\"selectRow(row)\">{{column.rowKey && row[column.rowKey]}}</div>\n        <div class=\"smt-btns-block\" *ngIf=\"column.withAction\">\n          <button (click)=\"view(row)\" class=\"btn btn-sm btn-view\"><i class=\"fa fa-search\"></i></button>\n          <button (click)=\"edit(row)\" class=\"btn btn-sm btn-edit\"><i class=\"fa fa-edit\"></i></button>\n          <button (click)=\"delete(row)\" class=\"btn btn-sm btn-delete\"><i class=\"fa fa-trash\"></i></button>\n        </div>\n        <div *ngIf=\"column.withSelection\">\n          <input class=\"smt-checkbox\" type=\"checkbox\" (change)=\"toggleCheckbox(row)\" [disabled]=\"row.checkbox_disabled\" [checked]=\"row.checkbox_checked\"/>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"pagination\" class=\"smt-pagination-wrap\">\n  <div class=\"per-page-btns\">\n    <button (click)=\"itemsPerPage(10)\"  [class]=\"meta.perPage === 10 ? 'btn active': 'btn'\">10</button>\n    <button (click)=\"itemsPerPage(25)\"  [class]=\"meta.perPage === 25 ? 'btn active': 'btn'\">25</button>\n    <button (click)=\"itemsPerPage(50)\"  [class]=\"meta.perPage === 50 ? 'btn active': 'btn'\">50</button>\n    <button (click)=\"itemsPerPage(100)\"  [class]=\"meta.perPage === 100 ? 'btn active': 'btn'\">100</button>\n  </div>\n  <div class=\"smt-paging-simple-numbers\">\n    <ul class=\"smt-pagination\">\n      <button class=\"btn page-link\" [disabled]=\"meta.currentPage === 1\" (click)=\"turnPage((meta.currentPage - 1) * -1)\"> \u276E\u276E </button>\n      <button class=\"btn page-link\" [disabled]=\"meta.currentPage === 1\" (click)=\"turnPage(-1)\"><span class=\"pagination-default\">\u276E</span></button>\n      <button class=\"btn page-link numbers\" [disabled]=\"true\"> {{meta.currentPage}} </button>\n      <button class=\"btn page-link\" [disabled]=\"meta.currentPage === meta.pagesCount\" (click)=\"turnPage(1)\"><span class=\"pagination-default\">\u276F</span></button>\n      <button class=\"btn page-link\" [disabled]=\"meta.currentPage === meta.pagesCount\" (click)=\"turnPage(meta.pagesCount - meta.currentPage)\"> \u276F\u276F </button>\n    </ul>\n  </div>\n</div>\n\n<ng-content></ng-content>\n\n<div *ngIf=\"showConformationModal\">\n  <div class=\"smt-overlay\"></div>\n  <div class=\"smt-choice-modal\">\n    <p>Are you sure?</p>\n    <button class=\"btn btn-accept\" (click)=\"this.handleDelete.emit(itemID_for_deleting); showConformationModal = false\">Yes</button>\n    <button class=\"btn btn-cancel\" (click)=\"itemID_for_deleting = null; showConformationModal = false\">No</button>\n  </div>\n</div>\n",
                        styles: [".smt-checkbox{width:15px}.smt-table-responsive{background-color:#222932}.smt-table{width:100%;border-collapse:collapse}.smt-table td,.smt-table th{padding:12px 8px;border:1px solid #e2e2e4}.smt-sorting-btn-block{display:inline-flex;float:right}.smt-sorting-btn-block button{background:0 0;padding:0;margin:0;border:none;cursor:pointer}.smt-sorting-btn-block button i{font-size:12px}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\2191\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\2193\"}.smt-pagination-wrap{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;margin-top:1em}.per-page-btns button{background:#fff;border-color:#c8c7cc;color:#007bff}.per-page-btns button:hover{background-color:#f2f2f2}.per-page-btns button.active{background:#007bff;border-color:#007bff;color:#fff}.per-page-btns button.active:hover{background-color:#006fe6}.smt-pagination{margin:0;padding:0 3px 3px 0}.smt-pagination button{padding:5px 10px;border-radius:5px;margin-left:5px}.smt-pagination .page-link:not(.numbers){background:#fff;border-color:#c8c7cc;color:#007bff}.smt-pagination .page-link:not(.numbers):hover{background-color:#f2f2f2}.smt-pagination .page-link:not(.numbers):disabled{background:#fff;border-color:#c8c7cc;color:#c8c7cc;cursor:not-allowed}.smt-pagination .numbers{color:#fff;background-color:#007bff;border-color:#007bff}.btn-accept{background-color:#1fbba6;border-color:#1fbba6}.btn-cancel{background-color:#b32925;border-color:#b32925}.smt-choice-modal{text-align:center;position:fixed;background:#fff;padding:20px;left:50%;top:50%;border-radius:5px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.smt-choice-modal button{color:#fff;border:none;outline:0;margin:0 10px;padding:5px 15px;border-radius:4px}.smt-choice-modal p{font-size:18px}.smt-overlay{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(54,65,80,.8);color:#fff}.btn{line-height:1.45;text-overflow:ellipsis;overflow:hidden;margin:0 .15rem;cursor:pointer;transition:.3s;background-image:none;box-shadow:none;outline:0;font-size:.875rem;padding:.25rem .5rem;border-radius:.2rem;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent}.btn.active,.btn.disabled,.btn:active,.btn:focus,.btn:hover,.btn[disabled]{box-shadow:none;outline:0}.btn-view{background-color:#1fbba6;border-color:#1fbba6;color:#fff}.btn-view:hover{background-color:#30ddc6;border-color:#30ddc6;color:#fff}.btn-view.active,.btn-view.active:focus,.btn-view.dropdown-toggle:active:hover,.btn-view:active,.btn-view:active:focus,.btn-view:active:hover{background-color:#1ba593;border-color:#1ba593}.btn-view:focus{background-color:#46e0cc;border-color:#46e0cc;color:#fff}.btn-view.disabled.active,.btn-view.disabled:active,.btn-view.disabled:focus,.btn-view.disabled:hover,.btn-view[disabled],.btn-view[disabled].active,.btn-view[disabled]:active,.btn-view[disabled]:focus,.btn-view[disabled]:hover,fieldset[disabled] .btn-view.active,fieldset[disabled] .btn-view:active,fieldset[disabled] .btn-view:focus,fieldset[disabled] .btn-view:hover{background-color:#5ce4d2;border-color:#5ce4d2;color:#fff}.btn-edit{background-color:#007bff;border-color:#007bff;color:#fff}.btn-edit:hover{background-color:#3395ff;border-color:#3395ff;color:#fff}.btn-edit.active,.btn-edit.active:focus,.btn-edit.dropdown-toggle:active:hover,.btn-edit:active,.btn-edit:active:focus,.btn-edit:active:hover{background-color:#006fe6;border-color:#006fe6}.btn-edit:focus{background-color:#4da3ff;border-color:#4da3ff;color:#fff}.btn-edit.disabled.active,.btn-edit.disabled:active,.btn-edit.disabled:focus,.btn-edit.disabled:hover,.btn-edit[disabled],.btn-edit[disabled].active,.btn-edit[disabled]:active,.btn-edit[disabled]:focus,.btn-edit[disabled]:hover,fieldset[disabled] .btn-edit.active,fieldset[disabled] .btn-edit:active,fieldset[disabled] .btn-edit:focus,fieldset[disabled] .btn-edit:hover{background-color:#66b0ff;border-color:#66b0ff;color:#fff}.btn-delete{background-color:#b32925;border-color:#b32925;color:#fff}.btn-delete:hover{background-color:#d53a36;border-color:#d53a36;color:#fff}.btn-delete.active,.btn-delete.active:focus,.btn-delete.dropdown-toggle:active:hover,.btn-delete:active,.btn-delete:active:focus,.btn-delete:active:hover{background-color:#9e2421;border-color:#9e2421}.btn-delete:focus{background-color:#da4f4b;border-color:#da4f4b;color:#fff}.btn-delete.disabled.active,.btn-delete.disabled:active,.btn-delete.disabled:focus,.btn-delete.disabled:hover,.btn-delete[disabled],.btn-delete[disabled].active,.btn-delete[disabled]:active,.btn-delete[disabled]:focus,.btn-delete[disabled]:hover,fieldset[disabled] .btn-delete.active,fieldset[disabled] .btn-delete:active,fieldset[disabled] .btn-delete:focus,fieldset[disabled] .btn-delete:hover{background-color:#de6360;border-color:#de6360;color:#fff}"]
                    },] },
        ];
        NgSimpleTableComponent.ctorParameters = function () { return []; };
        NgSimpleTableComponent.propDecorators = {
            columns: [{ type: i0.Input }],
            list: [{ type: i0.Input }],
            meta: [{ type: i0.Input }],
            pagination: [{ type: i0.Input }],
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgSimpleTableService = NgSimpleTableService;
    exports.NgSimpleTableComponent = NgSimpleTableComponent;
    exports.NgSimpleTableModule = NgSimpleTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctc2ltcGxlLXRhYmxlL2xpYi9uZy1zaW1wbGUtdGFibGUuc2VydmljZS50cyIsbnVsbCwibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL25nLXNpbXBsZS10YWJsZS9saWIvbmctc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc210LW5nLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNtdC10YWJsZS13cmFwcGVyXCI+XG4gIDx0YWJsZSBjbGFzcz1cInNtdC10YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbHVtbi53aXRoU29ydGluZyA/ICcnOiduby1zb3J0J319XCIgd2lkdGg9XCJ7e2NvbHVtbi53aWR0aCA/IGNvbHVtbi53aWR0aDonYXV0byd9fVwiIFtuZ0NsYXNzXT1cImdldENvbHVtbkNsYXNzKGNvbHVtbilcIj5cbiAgICAgICAge3sgY29sdW1uLnRpdGxlS2V5IH19XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4ud2l0aFNvcnRpbmdcIiBjbGFzcz1cInNtdC1zb3J0aW5nLWJ0bi1ibG9ja1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDEpXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LXVwXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDApXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LWRvd25cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGxpc3RcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIj57e2NvbHVtbi5yb3dLZXkgJiYgcm93W2NvbHVtbi5yb3dLZXldfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNtdC1idG5zLWJsb2NrXCIgKm5nSWY9XCJjb2x1bW4ud2l0aEFjdGlvblwiPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInZpZXcocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tdmlld1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImVkaXQocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZWRpdFwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVsZXRlXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4ud2l0aFNlbGVjdGlvblwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNtdC1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIChjaGFuZ2UpPVwidG9nZ2xlQ2hlY2tib3gocm93KVwiIFtkaXNhYmxlZF09XCJyb3cuY2hlY2tib3hfZGlzYWJsZWRcIiBbY2hlY2tlZF09XCJyb3cuY2hlY2tib3hfY2hlY2tlZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicGFnaW5hdGlvblwiIGNsYXNzPVwic210LXBhZ2luYXRpb24td3JhcFwiPlxuICA8ZGl2IGNsYXNzPVwicGVyLXBhZ2UtYnRuc1wiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgxMClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gMTAgPyAnYnRuIGFjdGl2ZSc6ICdidG4nXCI+MTA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMjUpXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDI1ID8gJ2J0biBhY3RpdmUnOiAnYnRuJ1wiPjI1PC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDUwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSA1MCA/ICdidG4gYWN0aXZlJzogJ2J0bidcIj41MDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgxMDApXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDEwMCA/ICdidG4gYWN0aXZlJzogJ2J0bidcIj4xMDA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzbXQtcGFnaW5nLXNpbXBsZS1udW1iZXJzXCI+XG4gICAgPHVsIGNsYXNzPVwic210LXBhZ2luYXRpb25cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IDFcIiAoY2xpY2spPVwidHVyblBhZ2UoKG1ldGEuY3VycmVudFBhZ2UgLSAxKSAqIC0xKVwiPiDDosKdwq7DosKdwq4gPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKC0xKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+w6LCncKuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwYWdlLWxpbmsgbnVtYmVyc1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+IHt7bWV0YS5jdXJyZW50UGFnZX19IDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gbWV0YS5wYWdlc0NvdW50XCIgKGNsaWNrKT1cInR1cm5QYWdlKDEpXCI+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWRlZmF1bHRcIj7DosKdwq88L3NwYW4+PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSBtZXRhLnBhZ2VzQ291bnRcIiAoY2xpY2spPVwidHVyblBhZ2UobWV0YS5wYWdlc0NvdW50IC0gbWV0YS5jdXJyZW50UGFnZSlcIj4gw6LCncKvw6LCncKvIDwvYnV0dG9uPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuPGRpdiAqbmdJZj1cInNob3dDb25mb3JtYXRpb25Nb2RhbFwiPlxuICA8ZGl2IGNsYXNzPVwic210LW92ZXJsYXlcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNtdC1jaG9pY2UtbW9kYWxcIj5cbiAgICA8cD5BcmUgeW91IHN1cmU/PC9wPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWFjY2VwdFwiIChjbGljayk9XCJ0aGlzLmhhbmRsZURlbGV0ZS5lbWl0KGl0ZW1JRF9mb3JfZGVsZXRpbmcpOyBzaG93Q29uZm9ybWF0aW9uTW9kYWwgPSBmYWxzZVwiPlllczwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIChjbGljayk9XCJpdGVtSURfZm9yX2RlbGV0aW5nID0gbnVsbDsgc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gZmFsc2VcIj5ObzwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5zbXQtY2hlY2tib3h7d2lkdGg6MTVweH0uc210LXRhYmxlLXJlc3BvbnNpdmV7YmFja2dyb3VuZC1jb2xvcjojMjIyOTMyfS5zbXQtdGFibGV7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9LnNtdC10YWJsZSB0ZCwuc210LXRhYmxlIHRoe3BhZGRpbmc6MTJweCA4cHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlMmU0fS5zbXQtc29ydGluZy1idG4tYmxvY2t7ZGlzcGxheTppbmxpbmUtZmxleDtmbG9hdDpyaWdodH0uc210LXNvcnRpbmctYnRuLWJsb2NrIGJ1dHRvbntiYWNrZ3JvdW5kOjAgMDtwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9LnNtdC1zb3J0aW5nLWJ0bi1ibG9jayBidXR0b24gaXtmb250LXNpemU6MTJweH0uZmEtc29ydC1hc2M6YmVmb3JlLC5mYS1zb3J0LXVwOmJlZm9yZXtjb250ZW50OlwiXFxcXDIxOTFcIn0uZmEtc29ydC1kZXNjOmJlZm9yZSwuZmEtc29ydC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxcXDIxOTNcIn0uc210LXBhZ2luYXRpb24td3JhcHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MXJlbTttYXJnaW4tdG9wOjFlbX0ucGVyLXBhZ2UtYnRucyBidXR0b257YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYzhjN2NjO2NvbG9yOiMwMDdiZmZ9LnBlci1wYWdlLWJ0bnMgYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0ucGVyLXBhZ2UtYnRucyBidXR0b24uYWN0aXZle2JhY2tncm91bmQ6IzAwN2JmZjtib3JkZXItY29sb3I6IzAwN2JmZjtjb2xvcjojZmZmfS5wZXItcGFnZS1idG5zIGJ1dHRvbi5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDA2ZmU2fS5zbXQtcGFnaW5hdGlvbnttYXJnaW46MDtwYWRkaW5nOjAgM3B4IDNweCAwfS5zbXQtcGFnaW5hdGlvbiBidXR0b257cGFkZGluZzo1cHggMTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tbGVmdDo1cHh9LnNtdC1wYWdpbmF0aW9uIC5wYWdlLWxpbms6bm90KC5udW1iZXJzKXtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNjOGM3Y2M7Y29sb3I6IzAwN2JmZn0uc210LXBhZ2luYXRpb24gLnBhZ2UtbGluazpub3QoLm51bWJlcnMpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uc210LXBhZ2luYXRpb24gLnBhZ2UtbGluazpub3QoLm51bWJlcnMpOmRpc2FibGVke2JhY2tncm91bmQ6I2ZmZjtib3JkZXItY29sb3I6I2M4YzdjYztjb2xvcjojYzhjN2NjO2N1cnNvcjpub3QtYWxsb3dlZH0uc210LXBhZ2luYXRpb24gLm51bWJlcnN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Ym9yZGVyLWNvbG9yOiMwMDdiZmZ9LmJ0bi1hY2NlcHR7YmFja2dyb3VuZC1jb2xvcjojMWZiYmE2O2JvcmRlci1jb2xvcjojMWZiYmE2fS5idG4tY2FuY2Vse2JhY2tncm91bmQtY29sb3I6I2IzMjkyNTtib3JkZXItY29sb3I6I2IzMjkyNX0uc210LWNob2ljZS1tb2RhbHt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzoyMHB4O2xlZnQ6NTAlO3RvcDo1MCU7Ym9yZGVyLXJhZGl1czo1cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5zbXQtY2hvaWNlLW1vZGFsIGJ1dHRvbntjb2xvcjojZmZmO2JvcmRlcjpub25lO291dGxpbmU6MDttYXJnaW46MCAxMHB4O3BhZGRpbmc6NXB4IDE1cHg7Ym9yZGVyLXJhZGl1czo0cHh9LnNtdC1jaG9pY2UtbW9kYWwgcHtmb250LXNpemU6MThweH0uc210LW92ZXJsYXl7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDU0LDY1LDgwLC44KTtjb2xvcjojZmZmfS5idG57bGluZS1oZWlnaHQ6MS40NTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjttYXJnaW46MCAuMTVyZW07Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjouM3M7YmFja2dyb3VuZC1pbWFnZTpub25lO2JveC1zaGFkb3c6bm9uZTtvdXRsaW5lOjA7Zm9udC1zaXplOi44NzVyZW07cGFkZGluZzouMjVyZW0gLjVyZW07Ym9yZGVyLXJhZGl1czouMnJlbTtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudH0uYnRuLmFjdGl2ZSwuYnRuLmRpc2FibGVkLC5idG46YWN0aXZlLC5idG46Zm9jdXMsLmJ0bjpob3ZlciwuYnRuW2Rpc2FibGVkXXtib3gtc2hhZG93Om5vbmU7b3V0bGluZTowfS5idG4tdmlld3tiYWNrZ3JvdW5kLWNvbG9yOiMxZmJiYTY7Ym9yZGVyLWNvbG9yOiMxZmJiYTY7Y29sb3I6I2ZmZn0uYnRuLXZpZXc6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzBkZGM2O2JvcmRlci1jb2xvcjojMzBkZGM2O2NvbG9yOiNmZmZ9LmJ0bi12aWV3LmFjdGl2ZSwuYnRuLXZpZXcuYWN0aXZlOmZvY3VzLC5idG4tdmlldy5kcm9wZG93bi10b2dnbGU6YWN0aXZlOmhvdmVyLC5idG4tdmlldzphY3RpdmUsLmJ0bi12aWV3OmFjdGl2ZTpmb2N1cywuYnRuLXZpZXc6YWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzFiYTU5Mztib3JkZXItY29sb3I6IzFiYTU5M30uYnRuLXZpZXc6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNDZlMGNjO2JvcmRlci1jb2xvcjojNDZlMGNjO2NvbG9yOiNmZmZ9LmJ0bi12aWV3LmRpc2FibGVkLmFjdGl2ZSwuYnRuLXZpZXcuZGlzYWJsZWQ6YWN0aXZlLC5idG4tdmlldy5kaXNhYmxlZDpmb2N1cywuYnRuLXZpZXcuZGlzYWJsZWQ6aG92ZXIsLmJ0bi12aWV3W2Rpc2FibGVkXSwuYnRuLXZpZXdbZGlzYWJsZWRdLmFjdGl2ZSwuYnRuLXZpZXdbZGlzYWJsZWRdOmFjdGl2ZSwuYnRuLXZpZXdbZGlzYWJsZWRdOmZvY3VzLC5idG4tdmlld1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldy5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldzphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldzpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi12aWV3OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzVjZTRkMjtib3JkZXItY29sb3I6IzVjZTRkMjtjb2xvcjojZmZmfS5idG4tZWRpdHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Ym9yZGVyLWNvbG9yOiMwMDdiZmY7Y29sb3I6I2ZmZn0uYnRuLWVkaXQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzM5NWZmO2JvcmRlci1jb2xvcjojMzM5NWZmO2NvbG9yOiNmZmZ9LmJ0bi1lZGl0LmFjdGl2ZSwuYnRuLWVkaXQuYWN0aXZlOmZvY3VzLC5idG4tZWRpdC5kcm9wZG93bi10b2dnbGU6YWN0aXZlOmhvdmVyLC5idG4tZWRpdDphY3RpdmUsLmJ0bi1lZGl0OmFjdGl2ZTpmb2N1cywuYnRuLWVkaXQ6YWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwNmZlNjtib3JkZXItY29sb3I6IzAwNmZlNn0uYnRuLWVkaXQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNGRhM2ZmO2JvcmRlci1jb2xvcjojNGRhM2ZmO2NvbG9yOiNmZmZ9LmJ0bi1lZGl0LmRpc2FibGVkLmFjdGl2ZSwuYnRuLWVkaXQuZGlzYWJsZWQ6YWN0aXZlLC5idG4tZWRpdC5kaXNhYmxlZDpmb2N1cywuYnRuLWVkaXQuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1lZGl0W2Rpc2FibGVkXSwuYnRuLWVkaXRbZGlzYWJsZWRdLmFjdGl2ZSwuYnRuLWVkaXRbZGlzYWJsZWRdOmFjdGl2ZSwuYnRuLWVkaXRbZGlzYWJsZWRdOmZvY3VzLC5idG4tZWRpdFtkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdC5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdDphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdDpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1lZGl0OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzY2YjBmZjtib3JkZXItY29sb3I6IzY2YjBmZjtjb2xvcjojZmZmfS5idG4tZGVsZXRle2JhY2tncm91bmQtY29sb3I6I2IzMjkyNTtib3JkZXItY29sb3I6I2IzMjkyNTtjb2xvcjojZmZmfS5idG4tZGVsZXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Q1M2EzNjtib3JkZXItY29sb3I6I2Q1M2EzNjtjb2xvcjojZmZmfS5idG4tZGVsZXRlLmFjdGl2ZSwuYnRuLWRlbGV0ZS5hY3RpdmU6Zm9jdXMsLmJ0bi1kZWxldGUuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZTpob3ZlciwuYnRuLWRlbGV0ZTphY3RpdmUsLmJ0bi1kZWxldGU6YWN0aXZlOmZvY3VzLC5idG4tZGVsZXRlOmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM5ZTI0MjE7Ym9yZGVyLWNvbG9yOiM5ZTI0MjF9LmJ0bi1kZWxldGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZGE0ZjRiO2JvcmRlci1jb2xvcjojZGE0ZjRiO2NvbG9yOiNmZmZ9LmJ0bi1kZWxldGUuZGlzYWJsZWQuYWN0aXZlLC5idG4tZGVsZXRlLmRpc2FibGVkOmFjdGl2ZSwuYnRuLWRlbGV0ZS5kaXNhYmxlZDpmb2N1cywuYnRuLWRlbGV0ZS5kaXNhYmxlZDpob3ZlciwuYnRuLWRlbGV0ZVtkaXNhYmxlZF0sLmJ0bi1kZWxldGVbZGlzYWJsZWRdLmFjdGl2ZSwuYnRuLWRlbGV0ZVtkaXNhYmxlZF06YWN0aXZlLC5idG4tZGVsZXRlW2Rpc2FibGVkXTpmb2N1cywuYnRuLWRlbGV0ZVtkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVsZXRlLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWxldGU6YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlbGV0ZTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWxldGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGU2MzYwO2JvcmRlci1jb2xvcjojZGU2MzYwO2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgX3BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF9jb2x1bW5zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9saXN0OiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9zb3J0OiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9tZXRhOiBNZXRhRGF0YSA9IHtcbiAgICBjdXJyZW50UGFnZTogMCxcbiAgICBuZXh0UGFnZTogMCxcbiAgICBwYWdlc0NvdW50OiAwLFxuICAgIHBlclBhZ2U6IDAsXG4gICAgcHJldlBhZ2U6IDAsXG4gICAgdG90YWxDb3VudDogMFxuICB9O1xuICBwcml2YXRlIF9zaG93Q29uZm9ybWF0aW9uTW9kYWw6IGJvb2xlYW47XG4gIGl0ZW1JRF9mb3JfZGVsZXRpbmc6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnMoY29sdW1uczogYW55W10pIHtcbiAgICBpZiAoY29sdW1ucyAmJiBBcnJheS5pc0FycmF5KGNvbHVtbnMpKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbGlzdChsaXN0OiBhbnlbXSkge1xuICAgIGlmIChsaXN0ICYmIEFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBsaXN0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBsaXN0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtZXRhKG1ldGE6IE1ldGFEYXRhKSB7XG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHRoaXMuX21ldGEgPSBtZXRhO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtZXRhKCk6IE1ldGFEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFnaW5hdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRpb247XG4gIH1cblxuICBAT3V0cHV0KClcbiAgaGFuZGxlVmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlRGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVTb3J0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVUdXJuUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVUb2dnbGVDaGVja0JveCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlQ2hhbmdlSXRlbXNQZXJQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgc2V0IHNvcnQoc29ydDogYW55W10pIHtcbiAgICBpZiAoc29ydCAmJiBBcnJheS5pc0FycmF5KHNvcnQpKSB7XG4gICAgICB0aGlzLl9zb3J0ID0gc29ydDtcbiAgICB9XG4gIH1cblxuICBnZXQgc29ydCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvbmZvcm1hdGlvbk1vZGFsKHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0NvbmZvcm1hdGlvbk1vZGFsKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb25mb3JtYXRpb25Nb2RhbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdmlldyhyb3cpIHtcbiAgICB0aGlzLmhhbmRsZVZpZXcuZW1pdChyb3cuaWQpO1xuICB9XG5cbiAgZWRpdChyb3cpIHtcbiAgICB0aGlzLmhhbmRsZUVkaXQuZW1pdChyb3cuaWQpO1xuICB9XG5cbiAgZGVsZXRlKHJvdykge1xuICAgIHRoaXMuc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1JRF9mb3JfZGVsZXRpbmcgPSByb3cuaWQ7XG4gIH1cblxuICBzb3J0Q29sdW1uKGNvbHVtbiwgdHlwZSkge1xuICAgIGNvbnN0IHNvcnRQYXJhbVNldCA9IHRoaXMuc29ydC5zb21lKFxuICAgICAgZWwgPT4gZWwuZmllbGQgPT09IGNvbHVtbi5zb3J0S2V5IHx8IGVsLmZpZWxkID09PSBjb2x1bW4ucm93S2V5XG4gICAgKTtcbiAgICBpZiAoc29ydFBhcmFtU2V0KSB7XG4gICAgICB0aGlzLnNvcnQgPSB0aGlzLnNvcnQubWFwKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLmlkID09PSBjb2x1bW4uaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZWwsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ID0gW1xuICAgICAgICAuLi50aGlzLnNvcnQsXG4gICAgICAgIHsgZmllbGQ6IGNvbHVtbi5zb3J0S2V5ID8gY29sdW1uLnNvcnRLZXkgOiBjb2x1bW4ucm93S2V5LCB0eXBlIH1cbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU29ydGluZy5lbWl0KHRoaXMuc29ydCk7XG4gIH1cblxuICB0dXJuUGFnZShpbmRleCkge1xuICAgIGNvbnN0IG5leHRQYWdlID0gdGhpcy5tZXRhLmN1cnJlbnRQYWdlICsgaW5kZXg7XG4gICAgdGhpcy5oYW5kbGVUdXJuUGFnZS5lbWl0KG5leHRQYWdlKTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhpdGVtKSB7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RSb3cuZW1pdChpdGVtKTtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrYm94KGl0ZW0pIHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoZWNrQm94LmVtaXQoaXRlbSk7XG4gIH1cblxuICBpdGVtc1BlclBhZ2UoY291bnQpIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZUl0ZW1zUGVyUGFnZS5lbWl0KGNvdW50KTtcbiAgfVxuXG4gIGdldENvbHVtbkNsYXNzKGNvbHVtbikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnNvcnQuZmluZChcbiAgICAgIGkgPT4gaS5maWVsZCA9PT0gY29sdW1uLnNvcnRLZXkgfHwgaS5maWVsZCA9PT0gY29sdW1uLnJvd0tleVxuICAgICk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICdzb3J0LXVwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnc29ydC1kb3duJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ1NpbXBsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1zaW1wbGUtdGFibGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdTaW1wbGVUYWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ1NpbXBsZVRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZVRhYmxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7OzttQ0FKRDtLQVFDOztJQ1JEOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcs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