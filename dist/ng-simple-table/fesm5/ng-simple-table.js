import { Injectable, NgModule, defineInjectable, EventEmitter, Component, Input, Output } from '@angular/core';
import { __assign, __spread } from 'tslib';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgSimpleTableService = /** @class */ (function () {
    function NgSimpleTableService() {
    }
    NgSimpleTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgSimpleTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgSimpleTableService.ngInjectableDef = defineInjectable({ factory: function NgSimpleTableService_Factory() { return new NgSimpleTableService(); }, token: NgSimpleTableService, providedIn: "root" });
    return NgSimpleTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgSimpleTableComponent = /** @class */ (function () {
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
        this.handleView = new EventEmitter();
        this.handleEdit = new EventEmitter();
        this.handleDelete = new EventEmitter();
        this.handleSorting = new EventEmitter();
        this.handleTurnPage = new EventEmitter();
        this.handleSelectRow = new EventEmitter();
        this.handleToggleCheckBox = new EventEmitter();
        this.handleChangeItemsPerPage = new EventEmitter();
    }
    Object.defineProperty(NgSimpleTableComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
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
         */
        function () {
            return this._list;
        },
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
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
         */
        function () {
            return this._meta;
        },
        set: /**
         * @param {?} meta
         * @return {?}
         */
        function (meta) {
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
         */
        function () {
            return this._show_pagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._show_pagination = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSimpleTableComponent.prototype, "sort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sort;
        },
        set: /**
         * @param {?} sort
         * @return {?}
         */
        function (sort) {
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
         */
        function () {
            return this._showConformationModal;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        { type: Component, args: [{
                    selector: 'smt-ng-simple-table',
                    template: "<div class=\"table-wrapper\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th *ngFor=\"let column of columns\" class=\"{{column.withSorting ? '':'no-sort'}}\" width=\"{{column.width ? column.width:'auto'}}\" [ngClass]=\"getColumnClass(column)\">\n        {{ column.titleKey }}\n        <div *ngIf=\"column.withSorting\" class=\"sorting-btn-block\">\n          <button class=\"sort-btn\" (click)=\"sortColumn(column, 1)\"><i class=\"fa fa-sort-up\"></i></button>\n          <button class=\"sort-btn\" (click)=\"sortColumn(column, 0)\"><i class=\"fa fa-sort-down\"></i></button>\n        </div>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let row of list\">\n      <td *ngFor=\"let column of columns\">\n        <div (click)=\"selectRow(row)\">{{column.rowKey && row[column.rowKey]}}</div>\n        <div class=\"action-btns-block\" *ngIf=\"column.withActionCol\">\n          <button (click)=\"view(row)\" class=\"btn btn-view\"><i class=\"fa fa-search\"></i></button>\n          <button (click)=\"edit(row)\" class=\"btn btn-edit\"><i class=\"fa fa-edit\"></i></button>\n          <button (click)=\"delete(row)\" *ngIf=\"!column.hideDeleteBtn\" class=\"btn btn-delete\"><i class=\"fa fa-trash\"></i></button>\n        </div>\n        <div *ngIf=\"column.withSelectionCol\">\n          <input type=\"checkbox\" (change)=\"toggleCheckbox(row)\" [disabled]=\"row.checkbox_disabled\" [checked]=\"row.checkbox_checked\"/>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"pagination\" class=\"pagination-wrap\">\n  <!--<div class=\"pagination-result\">{{meta?.currentPage}} / {{meta?.pagesCount}}</div>-->\n  <div class=\"per-page-btns\">\n    <button (click)=\"itemsPerPage(10)\"  [class]=\"meta.perPage === 10 ? 'active': ''\">10</button>\n    <button (click)=\"itemsPerPage(25)\"  [class]=\"meta.perPage === 25 ? 'active': ''\">25</button>\n    <button (click)=\"itemsPerPage(50)\"  [class]=\"meta.perPage === 50 ? 'active': ''\">50</button>\n    <button (click)=\"itemsPerPage(100)\"  [class]=\"meta.perPage === 100 ? 'active': ''\">100</button>\n  </div>\n  <div class=\"paging_simple_numbers\">\n    <ul class=\"pagination\">\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === 1\" (click)=\"turnPage((meta.currentPage - 1) * -1)\"> \u276E\u276E </button>\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === 1\" (click)=\"turnPage(-1)\"><span class=\"pagination-default\">\u276E</span></button>\n      <button class=\"page-link numbers\" [disabled]=\"true\"> {{meta.currentPage}} </button>\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === meta.pagesCount\" (click)=\"turnPage(1)\"><span class=\"pagination-default\">\u276F</span></button>\n      <button class=\"page-link\" [disabled]=\"meta.currentPage === meta.pagesCount\" (click)=\"turnPage(meta.pagesCount - meta.currentPage)\"> \u276F\u276F </button>\n    </ul>\n  </div>\n</div>\n\n<div class=\"alert-modal choice-modal\" *ngIf=\"showConformationModal\">\n  <p>{{'operation-modal.question'}}?</p>\n  <button class=\"btn-accept\" (click)=\"this.handleDelete.emit(itemID_for_deleting); showConformationModal = false\">Yes</button>\n  <button class=\"btn-cancel\" (click)=\"itemID_for_deleting = null; showConformationModal = false\">No</button>\n  <div class=\"overlay\"></div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NgSimpleTableComponent.ctorParameters = function () { return []; };
    NgSimpleTableComponent.propDecorators = {
        paginationState: [{ type: Input }],
        columns: [{ type: Input }],
        list: [{ type: Input }],
        meta: [{ type: Input, args: ['meta',] }],
        handleView: [{ type: Output }],
        handleEdit: [{ type: Output }],
        handleDelete: [{ type: Output }],
        handleSorting: [{ type: Output }],
        handleTurnPage: [{ type: Output }],
        handleSelectRow: [{ type: Output }],
        handleToggleCheckBox: [{ type: Output }],
        handleChangeItemsPerPage: [{ type: Output }]
    };
    return NgSimpleTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgSimpleTableModule = /** @class */ (function () {
    function NgSimpleTableModule() {
    }
    NgSimpleTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule
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

export { NgSimpleTableService, NgSimpleTableComponent, NgSimpleTableModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL25nLXNpbXBsZS10YWJsZS9saWIvbmctc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtdC1uZy1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBjbGFzcz1cInt7Y29sdW1uLndpdGhTb3J0aW5nID8gJyc6J25vLXNvcnQnfX1cIiB3aWR0aD1cInt7Y29sdW1uLndpZHRoID8gY29sdW1uLndpZHRoOidhdXRvJ319XCIgW25nQ2xhc3NdPVwiZ2V0Q29sdW1uQ2xhc3MoY29sdW1uKVwiPlxuICAgICAgICB7eyBjb2x1bW4udGl0bGVLZXkgfX1cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi53aXRoU29ydGluZ1wiIGNsYXNzPVwic29ydGluZy1idG4tYmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic29ydC1idG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDEpXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LXVwXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzb3J0LWJ0blwiIChjbGljayk9XCJzb3J0Q29sdW1uKGNvbHVtbiwgMClcIj48aSBjbGFzcz1cImZhIGZhLXNvcnQtZG93blwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgbGlzdFwiPlxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiPnt7Y29sdW1uLnJvd0tleSAmJiByb3dbY29sdW1uLnJvd0tleV19fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ0bnMtYmxvY2tcIiAqbmdJZj1cImNvbHVtbi53aXRoQWN0aW9uQ29sXCI+XG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidmlldyhyb3cpXCIgY2xhc3M9XCJidG4gYnRuLXZpZXdcIj48aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJlZGl0KHJvdylcIiBjbGFzcz1cImJ0biBidG4tZWRpdFwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUocm93KVwiICpuZ0lmPVwiIWNvbHVtbi5oaWRlRGVsZXRlQnRuXCIgY2xhc3M9XCJidG4gYnRuLWRlbGV0ZVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLndpdGhTZWxlY3Rpb25Db2xcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNoYW5nZSk9XCJ0b2dnbGVDaGVja2JveChyb3cpXCIgW2Rpc2FibGVkXT1cInJvdy5jaGVja2JveF9kaXNhYmxlZFwiIFtjaGVja2VkXT1cInJvdy5jaGVja2JveF9jaGVja2VkXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJwYWdpbmF0aW9uXCIgY2xhc3M9XCJwYWdpbmF0aW9uLXdyYXBcIj5cbiAgPCEtLTxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJlc3VsdFwiPnt7bWV0YT8uY3VycmVudFBhZ2V9fSAvIHt7bWV0YT8ucGFnZXNDb3VudH19PC9kaXY+LS0+XG4gIDxkaXYgY2xhc3M9XCJwZXItcGFnZS1idG5zXCI+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDEwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAxMCA/ICdhY3RpdmUnOiAnJ1wiPjEwPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDI1KVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAyNSA/ICdhY3RpdmUnOiAnJ1wiPjI1PC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDUwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSA1MCA/ICdhY3RpdmUnOiAnJ1wiPjUwPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDEwMClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gMTAwID8gJ2FjdGl2ZSc6ICcnXCI+MTAwPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnaW5nX3NpbXBsZV9udW1iZXJzXCI+XG4gICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKChtZXRhLmN1cnJlbnRQYWdlIC0gMSkgKiAtMSlcIj4gw6LCncKuw6LCncKuIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKC0xKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+w6LCncKuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGluayBudW1iZXJzXCIgW2Rpc2FibGVkXT1cInRydWVcIj4ge3ttZXRhLmN1cnJlbnRQYWdlfX0gPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IG1ldGEucGFnZXNDb3VudFwiIChjbGljayk9XCJ0dXJuUGFnZSgxKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+w6LCncKvPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSBtZXRhLnBhZ2VzQ291bnRcIiAoY2xpY2spPVwidHVyblBhZ2UobWV0YS5wYWdlc0NvdW50IC0gbWV0YS5jdXJyZW50UGFnZSlcIj4gw6LCncKvw6LCncKvIDwvYnV0dG9uPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJhbGVydC1tb2RhbCBjaG9pY2UtbW9kYWxcIiAqbmdJZj1cInNob3dDb25mb3JtYXRpb25Nb2RhbFwiPlxuICA8cD57eydvcGVyYXRpb24tbW9kYWwucXVlc3Rpb24nfX0/PC9wPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFjY2VwdFwiIChjbGljayk9XCJ0aGlzLmhhbmRsZURlbGV0ZS5lbWl0KGl0ZW1JRF9mb3JfZGVsZXRpbmcpOyBzaG93Q29uZm9ybWF0aW9uTW9kYWwgPSBmYWxzZVwiPlllczwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNhbmNlbFwiIChjbGljayk9XCJpdGVtSURfZm9yX2RlbGV0aW5nID0gbnVsbDsgc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gZmFsc2VcIj5ObzwvYnV0dG9uPlxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgX3Nob3dfcGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX2NvbHVtbnM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2xpc3Q6IGFueVtdID0gW107XG4gIHByaXZhdGUgX3NvcnQ6IGFueVtdID0gW107XG4gIHByaXZhdGUgX21ldGE6IE1ldGFEYXRhID0ge1xuICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgIG5leHRQYWdlOiAwLFxuICAgIHBhZ2VzQ291bnQ6IDAsXG4gICAgcGVyUGFnZTogMCxcbiAgICBwcmV2UGFnZTogMCxcbiAgICB0b3RhbENvdW50OiAwXG4gIH07XG4gIHByaXZhdGUgX3Nob3dDb25mb3JtYXRpb25Nb2RhbDogYm9vbGVhbjtcbiAgaXRlbUlEX2Zvcl9kZWxldGluZzogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwYWdpbmF0aW9uU3RhdGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnMoY29sdW1uczogYW55W10pIHtcbiAgICBpZiAoY29sdW1ucyAmJiBBcnJheS5pc0FycmF5KGNvbHVtbnMpKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbGlzdChsaXN0OiBhbnlbXSkge1xuICAgIGlmIChsaXN0ICYmIEFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBsaXN0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBsaXN0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIEBJbnB1dCgnbWV0YScpXG4gIHNldCBtZXRhKG1ldGE6IE1ldGFEYXRhKSB7XG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHRoaXMuX21ldGEgPSBtZXRhO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtZXRhKCk6IE1ldGFEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YTtcbiAgfVxuXG4gIHNldCBwYWdpbmF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd19wYWdpbmF0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd19wYWdpbmF0aW9uO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIGhhbmRsZVZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZUVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZURlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlU29ydGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlVHVyblBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZVNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlVG9nZ2xlQ2hlY2tCb3ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZUNoYW5nZUl0ZW1zUGVyUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHNldCBzb3J0KHNvcnQ6IGFueVtdKSB7XG4gICAgaWYgKHNvcnQgJiYgQXJyYXkuaXNBcnJheShzb3J0KSkge1xuICAgICAgdGhpcy5fc29ydCA9IHNvcnQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNvcnQoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0O1xuICB9XG5cbiAgc2V0IHNob3dDb25mb3JtYXRpb25Nb2RhbCh2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDb25mb3JtYXRpb25Nb2RhbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dDb25mb3JtYXRpb25Nb2RhbCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q29uZm9ybWF0aW9uTW9kYWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2aWV3KHJvdykge1xuICAgIHRoaXMuaGFuZGxlVmlldy5lbWl0KHJvdy5pZCk7XG4gIH1cblxuICBlZGl0KHJvdykge1xuICAgIHRoaXMuaGFuZGxlRWRpdC5lbWl0KHJvdy5pZCk7XG4gIH1cblxuICBkZWxldGUocm93KSB7XG4gICAgdGhpcy5zaG93Q29uZm9ybWF0aW9uTW9kYWwgPSB0cnVlO1xuICAgIHRoaXMuaXRlbUlEX2Zvcl9kZWxldGluZyA9IHJvdy5pZDtcbiAgfVxuXG4gIHNvcnRDb2x1bW4oY29sdW1uLCB0eXBlKSB7XG4gICAgY29uc3Qgc29ydFBhcmFtU2V0ID0gdGhpcy5zb3J0LnNvbWUoXG4gICAgICBlbCA9PiBlbC5maWVsZCA9PT0gY29sdW1uLnNvcnRLZXkgfHwgZWwuZmllbGQgPT09IGNvbHVtbi5yb3dLZXlcbiAgICApO1xuICAgIGlmIChzb3J0UGFyYW1TZXQpIHtcbiAgICAgIHRoaXMuc29ydCA9IHRoaXMuc29ydC5tYXAoZWwgPT4ge1xuICAgICAgICBpZiAoZWwuaWQgPT09IGNvbHVtbi5pZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnQgPSBbXG4gICAgICAgIC4uLnRoaXMuc29ydCxcbiAgICAgICAgeyBmaWVsZDogY29sdW1uLnNvcnRLZXkgPyBjb2x1bW4uc29ydEtleSA6IGNvbHVtbi5yb3dLZXksIHR5cGUgfVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTb3J0aW5nLmVtaXQodGhpcy5zb3J0KTtcbiAgfVxuXG4gIHR1cm5QYWdlKGluZGV4KSB7XG4gICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLm1ldGEuY3VycmVudFBhZ2UgKyBpbmRleDtcbiAgICB0aGlzLmhhbmRsZVR1cm5QYWdlLmVtaXQobmV4dFBhZ2UpO1xuICB9XG5cbiAgc2VsZWN0Um93KGl0ZW0pIHtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdy5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2tib3goaXRlbSkge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlQ2hlY2tCb3guZW1pdChpdGVtKTtcbiAgfVxuXG4gIGl0ZW1zUGVyUGFnZShjb3VudCkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlSXRlbXNQZXJQYWdlLmVtaXQoY291bnQpO1xuICB9XG4gIGdldENvbHVtbkNsYXNzKGNvbHVtbikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnNvcnQuZmluZChcbiAgICAgIGkgPT4gaS5maWVsZCA9PT0gY29sdW1uLnNvcnRLZXkgfHwgaS5maWVsZCA9PT0gY29sdW1uLnJvd0tleVxuICAgICk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICdzb3J0LXVwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnc29ydC1kb3duJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ1NpbXBsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1zaW1wbGUtdGFibGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdTaW1wbGVUYWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ1NpbXBsZVRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZVRhYmxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OytCQUpEOzs7Ozs7OztJQ2tFRTtnQ0FFMkIsSUFBSTt3QkFDTCxFQUFFO3FCQUNMLEVBQUU7cUJBQ0YsRUFBRTtxQkFDQztZQUN4QixXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFF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