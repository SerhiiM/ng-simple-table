/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
                    return tslib_1.__assign({}, el, { type: type });
                }
                return el;
            });
        }
        else {
            this.sort = tslib_1.__spread(this.sort, [
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
export { NgSimpleTableComponent };
if (false) {
    /** @type {?} */
    NgSimpleTableComponent.prototype._show_pagination;
    /** @type {?} */
    NgSimpleTableComponent.prototype._columns;
    /** @type {?} */
    NgSimpleTableComponent.prototype._list;
    /** @type {?} */
    NgSimpleTableComponent.prototype._sort;
    /** @type {?} */
    NgSimpleTableComponent.prototype._meta;
    /** @type {?} */
    NgSimpleTableComponent.prototype._showConformationModal;
    /** @type {?} */
    NgSimpleTableComponent.prototype.itemID_for_deleting;
    /** @type {?} */
    NgSimpleTableComponent.prototype.paginationState;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleView;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleEdit;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleDelete;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleSorting;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleTurnPage;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleSelectRow;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleToggleCheckBox;
    /** @type {?} */
    NgSimpleTableComponent.prototype.handleChangeItemsPerPage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1zaW1wbGUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFVLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFrRTVFO2dDQUUyQixJQUFJO3dCQUNMLEVBQUU7cUJBQ0wsRUFBRTtxQkFDRixFQUFFO3FCQUNDO1lBQ3hCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztTQUNkO21DQUUwQixJQUFJOzBCQStDbEIsSUFBSSxZQUFZLEVBQU87MEJBRXZCLElBQUksWUFBWSxFQUFPOzRCQUVyQixJQUFJLFlBQVksRUFBTzs2QkFFdEIsSUFBSSxZQUFZLEVBQU87OEJBRXRCLElBQUksWUFBWSxFQUFPOytCQUV0QixJQUFJLFlBQVksRUFBTztvQ0FFbEIsSUFBSSxZQUFZLEVBQU87d0NBRW5CLElBQUksWUFBWSxFQUFPO0tBNUVsQztJQW9CaEIsc0JBQ0ksMkNBQU87Ozs7UUFNWDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVRELFVBQ1ksT0FBYztZQUN4QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3pCO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQ0ksd0NBQUk7Ozs7UUFNUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7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Q0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNsQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDcEI7U0FDRjtRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDs7Z0JBck9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsK3lHQXdEWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7O2tDQW9CRSxLQUFLOzBCQUdMLEtBQUs7dUJBV0wsS0FBSzt1QkFXTCxLQUFLLFNBQUMsTUFBTTs2QkFtQlosTUFBTTs2QkFFTixNQUFNOytCQUVOLE1BQU07Z0NBRU4sTUFBTTtpQ0FFTixNQUFNO2tDQUVOLE1BQU07dUNBRU4sTUFBTTsyQ0FFTixNQUFNOztpQ0E3SVQ7O1NBZ0VhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YURhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbXQtbmctc2ltcGxlLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbHVtbi53aXRoU29ydGluZyA/ICcnOiduby1zb3J0J319XCIgd2lkdGg9XCJ7e2NvbHVtbi53aWR0aCA/IGNvbHVtbi53aWR0aDonYXV0byd9fVwiIFtuZ0NsYXNzXT1cImdldENvbHVtbkNsYXNzKGNvbHVtbilcIj5cbiAgICAgICAge3sgY29sdW1uLnRpdGxlS2V5IH19XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4ud2l0aFNvcnRpbmdcIiBjbGFzcz1cInNvcnRpbmctYnRuLWJsb2NrXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNvcnQtYnRuXCIgKGNsaWNrKT1cInNvcnRDb2x1bW4oY29sdW1uLCAxKVwiPjxpIGNsYXNzPVwiZmEgZmEtc29ydC11cFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic29ydC1idG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDApXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LWRvd25cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGxpc3RcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIj57e2NvbHVtbi5yb3dLZXkgJiYgcm93W2NvbHVtbi5yb3dLZXldfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1idG5zLWJsb2NrXCIgKm5nSWY9XCJjb2x1bW4ud2l0aEFjdGlvbkNvbFwiPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInZpZXcocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi12aWV3XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZWRpdChyb3cpXCIgY2xhc3M9XCJidG4gYnRuLWVkaXRcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKHJvdylcIiAqbmdJZj1cIiFjb2x1bW4uaGlkZURlbGV0ZUJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1kZWxldGVcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi53aXRoU2VsZWN0aW9uQ29sXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIChjaGFuZ2UpPVwidG9nZ2xlQ2hlY2tib3gocm93KVwiIFtkaXNhYmxlZF09XCJyb3cuY2hlY2tib3hfZGlzYWJsZWRcIiBbY2hlY2tlZF09XCJyb3cuY2hlY2tib3hfY2hlY2tlZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicGFnaW5hdGlvblwiIGNsYXNzPVwicGFnaW5hdGlvbi13cmFwXCI+XG4gIDwhLS08ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1yZXN1bHRcIj57e21ldGE/LmN1cnJlbnRQYWdlfX0gLyB7e21ldGE/LnBhZ2VzQ291bnR9fTwvZGl2Pi0tPlxuICA8ZGl2IGNsYXNzPVwicGVyLXBhZ2UtYnRuc1wiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgxMClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gMTAgPyAnYWN0aXZlJzogJydcIj4xMDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgyNSlcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gMjUgPyAnYWN0aXZlJzogJydcIj4yNTwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSg1MClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gNTAgPyAnYWN0aXZlJzogJydcIj41MDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgxMDApXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDEwMCA/ICdhY3RpdmUnOiAnJ1wiPjEwMDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZ2luZ19zaW1wbGVfbnVtYmVyc1wiPlxuICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gMVwiIChjbGljayk9XCJ0dXJuUGFnZSgobWV0YS5jdXJyZW50UGFnZSAtIDEpICogLTEpXCI+IOKdruKdriA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gMVwiIChjbGljayk9XCJ0dXJuUGFnZSgtMSlcIj48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZGVmYXVsdFwiPuKdrjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdlLWxpbmsgbnVtYmVyc1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+IHt7bWV0YS5jdXJyZW50UGFnZX19IDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSBtZXRhLnBhZ2VzQ291bnRcIiAoY2xpY2spPVwidHVyblBhZ2UoMSlcIj48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZGVmYXVsdFwiPuKdrzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gbWV0YS5wYWdlc0NvdW50XCIgKGNsaWNrKT1cInR1cm5QYWdlKG1ldGEucGFnZXNDb3VudCAtIG1ldGEuY3VycmVudFBhZ2UpXCI+IOKdr+KdryA8L2J1dHRvbj5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiYWxlcnQtbW9kYWwgY2hvaWNlLW1vZGFsXCIgKm5nSWY9XCJzaG93Q29uZm9ybWF0aW9uTW9kYWxcIj5cbiAgPHA+e3snb3BlcmF0aW9uLW1vZGFsLnF1ZXN0aW9uJ319PzwvcD5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1hY2NlcHRcIiAoY2xpY2spPVwidGhpcy5oYW5kbGVEZWxldGUuZW1pdChpdGVtSURfZm9yX2RlbGV0aW5nKTsgc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gZmFsc2VcIj5ZZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1jYW5jZWxcIiAoY2xpY2spPVwiaXRlbUlEX2Zvcl9kZWxldGluZyA9IG51bGw7IHNob3dDb25mb3JtYXRpb25Nb2RhbCA9IGZhbHNlXCI+Tm88L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcml2YXRlIF9zaG93X3BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF9jb2x1bW5zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9saXN0OiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9zb3J0OiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9tZXRhOiBNZXRhRGF0YSA9IHtcbiAgICBjdXJyZW50UGFnZTogMCxcbiAgICBuZXh0UGFnZTogMCxcbiAgICBwYWdlc0NvdW50OiAwLFxuICAgIHBlclBhZ2U6IDAsXG4gICAgcHJldlBhZ2U6IDAsXG4gICAgdG90YWxDb3VudDogMFxuICB9O1xuICBwcml2YXRlIF9zaG93Q29uZm9ybWF0aW9uTW9kYWw6IGJvb2xlYW47XG4gIGl0ZW1JRF9mb3JfZGVsZXRpbmc6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcGFnaW5hdGlvblN0YXRlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5zKGNvbHVtbnM6IGFueVtdKSB7XG4gICAgaWYgKGNvbHVtbnMgJiYgQXJyYXkuaXNBcnJheShjb2x1bW5zKSkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbnMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxpc3QobGlzdDogYW55W10pIHtcbiAgICBpZiAobGlzdCAmJiBBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICB0aGlzLl9saXN0ID0gbGlzdDtcbiAgICB9XG4gIH1cblxuICBnZXQgbGlzdCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH1cblxuICBASW5wdXQoJ21ldGEnKVxuICBzZXQgbWV0YShtZXRhOiBNZXRhRGF0YSkge1xuICAgIGlmIChtZXRhKSB7XG4gICAgICB0aGlzLl9tZXRhID0gbWV0YTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWV0YSgpOiBNZXRhRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gIH1cblxuICBzZXQgcGFnaW5hdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dfcGFnaW5hdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dfcGFnaW5hdGlvbjtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBoYW5kbGVWaWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVEZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZVNvcnRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZVR1cm5QYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVTZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZVRvZ2dsZUNoZWNrQm94ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVDaGFuZ2VJdGVtc1BlclBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzZXQgc29ydChzb3J0OiBhbnlbXSkge1xuICAgIGlmIChzb3J0ICYmIEFycmF5LmlzQXJyYXkoc29ydCkpIHtcbiAgICAgIHRoaXMuX3NvcnQgPSBzb3J0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBzb3J0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcbiAgfVxuXG4gIHNldCBzaG93Q29uZm9ybWF0aW9uTW9kYWwodmFsdWUpIHtcbiAgICB0aGlzLl9zaG93Q29uZm9ybWF0aW9uTW9kYWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93Q29uZm9ybWF0aW9uTW9kYWwoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NvbmZvcm1hdGlvbk1vZGFsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvblN0YXRlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmlldyhyb3cpIHtcbiAgICB0aGlzLmhhbmRsZVZpZXcuZW1pdChyb3cuaWQpO1xuICB9XG5cbiAgZWRpdChyb3cpIHtcbiAgICB0aGlzLmhhbmRsZUVkaXQuZW1pdChyb3cuaWQpO1xuICB9XG5cbiAgZGVsZXRlKHJvdykge1xuICAgIHRoaXMuc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1JRF9mb3JfZGVsZXRpbmcgPSByb3cuaWQ7XG4gIH1cblxuICBzb3J0Q29sdW1uKGNvbHVtbiwgdHlwZSkge1xuICAgIGNvbnN0IHNvcnRQYXJhbVNldCA9IHRoaXMuc29ydC5zb21lKFxuICAgICAgZWwgPT4gZWwuZmllbGQgPT09IGNvbHVtbi5zb3J0S2V5IHx8IGVsLmZpZWxkID09PSBjb2x1bW4ucm93S2V5XG4gICAgKTtcbiAgICBpZiAoc29ydFBhcmFtU2V0KSB7XG4gICAgICB0aGlzLnNvcnQgPSB0aGlzLnNvcnQubWFwKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLmlkID09PSBjb2x1bW4uaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZWwsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ID0gW1xuICAgICAgICAuLi50aGlzLnNvcnQsXG4gICAgICAgIHsgZmllbGQ6IGNvbHVtbi5zb3J0S2V5ID8gY29sdW1uLnNvcnRLZXkgOiBjb2x1bW4ucm93S2V5LCB0eXBlIH1cbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU29ydGluZy5lbWl0KHRoaXMuc29ydCk7XG4gIH1cblxuICB0dXJuUGFnZShpbmRleCkge1xuICAgIGNvbnN0IG5leHRQYWdlID0gdGhpcy5tZXRhLmN1cnJlbnRQYWdlICsgaW5kZXg7XG4gICAgdGhpcy5oYW5kbGVUdXJuUGFnZS5lbWl0KG5leHRQYWdlKTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhpdGVtKSB7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RSb3cuZW1pdChpdGVtKTtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrYm94KGl0ZW0pIHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoZWNrQm94LmVtaXQoaXRlbSk7XG4gIH1cblxuICBpdGVtc1BlclBhZ2UoY291bnQpIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZUl0ZW1zUGVyUGFnZS5lbWl0KGNvdW50KTtcbiAgfVxuICBnZXRDb2x1bW5DbGFzcyhjb2x1bW4pIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5zb3J0LmZpbmQoXG4gICAgICBpID0+IGkuZmllbGQgPT09IGNvbHVtbi5zb3J0S2V5IHx8IGkuZmllbGQgPT09IGNvbHVtbi5yb3dLZXlcbiAgICApO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAxKSB7XG4gICAgICAgIHJldHVybiAnc29ydC11cCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ3NvcnQtZG93bic7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG59XG4iXX0=