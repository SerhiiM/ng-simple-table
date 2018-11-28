import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSimpleTableService {
    constructor() { }
}
NgSimpleTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
NgSimpleTableService.ctorParameters = () => [];
/** @nocollapse */ NgSimpleTableService.ngInjectableDef = defineInjectable({ factory: function NgSimpleTableService_Factory() { return new NgSimpleTableService(); }, token: NgSimpleTableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSimpleTableComponent {
    constructor() {
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
        this.handleView = new EventEmitter();
        this.handleEdit = new EventEmitter();
        this.handleDelete = new EventEmitter();
        this.handleSorting = new EventEmitter();
        this.handleTurnPage = new EventEmitter();
        this.handleSelectRow = new EventEmitter();
        this.handleToggleCheckBox = new EventEmitter();
        this.handleChangeItemsPerPage = new EventEmitter();
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    set columns(columns) {
        if (columns && Array.isArray(columns)) {
            this._columns = columns;
        }
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set list(list) {
        if (list && Array.isArray(list)) {
            this._list = list;
        }
    }
    /**
     * @return {?}
     */
    get list() {
        return this._list;
    }
    /**
     * @param {?} meta
     * @return {?}
     */
    set meta(meta) {
        if (meta) {
            this._meta = meta;
        }
    }
    /**
     * @return {?}
     */
    get meta() {
        return this._meta;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pagination(value) {
        this._pagination = value;
    }
    /**
     * @return {?}
     */
    get pagination() {
        return this._pagination;
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    set sort(sort) {
        if (sort && Array.isArray(sort)) {
            this._sort = sort;
        }
    }
    /**
     * @return {?}
     */
    get sort() {
        return this._sort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showConformationModal(value) {
        this._showConformationModal = value;
    }
    /**
     * @return {?}
     */
    get showConformationModal() {
        return this._showConformationModal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} row
     * @return {?}
     */
    view(row) {
        this.handleView.emit(row.id);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    edit(row) {
        this.handleEdit.emit(row.id);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    delete(row) {
        this.showConformationModal = true;
        this.itemID_for_deleting = row.id;
    }
    /**
     * @param {?} column
     * @param {?} type
     * @return {?}
     */
    sortColumn(column, type) {
        /** @type {?} */
        const sortParamSet = this.sort.some(el => el.field === column.sortKey || el.field === column.rowKey);
        if (sortParamSet) {
            this.sort = this.sort.map(el => {
                if (el.id === column.id) {
                    return Object.assign({}, el, { type });
                }
                return el;
            });
        }
        else {
            this.sort = [
                ...this.sort,
                { field: column.sortKey ? column.sortKey : column.rowKey, type }
            ];
        }
        this.handleSorting.emit(this.sort);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    turnPage(index) {
        /** @type {?} */
        const nextPage = this.meta.currentPage + index;
        this.handleTurnPage.emit(nextPage);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectRow(item) {
        this.handleSelectRow.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleCheckbox(item) {
        this.handleToggleCheckBox.emit(item);
    }
    /**
     * @param {?} count
     * @return {?}
     */
    itemsPerPage(count) {
        this.handleChangeItemsPerPage.emit(count);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    getColumnClass(column) {
        /** @type {?} */
        const item = this.sort.find(i => i.field === column.sortKey || i.field === column.rowKey);
        if (item) {
            if (item.type === 1) {
                return 'sort-up';
            }
            else {
                return 'sort-down';
            }
        }
        return '';
    }
}
NgSimpleTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'smt-ng-simple-table',
                template: `<div class="smt-table-wrapper">
  <table class="smt-table">
    <thead>
    <tr>
      <th *ngFor="let column of columns" class="{{column.withSorting ? '':'no-sort'}}" width="{{column.width ? column.width:'auto'}}" [ngClass]="getColumnClass(column)">
        {{ column.titleKey }}
        <div *ngIf="column.withSorting" class="smt-sorting-btn-block">
          <button class="btn" (click)="sortColumn(column, 1)"><i class="fa fa-sort-up"></i></button>
          <button class="btn" (click)="sortColumn(column, 0)"><i class="fa fa-sort-down"></i></button>
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let row of list">
      <td *ngFor="let column of columns">
        <div (click)="selectRow(row)">{{column.rowKey && row[column.rowKey]}}</div>
        <div class="smt-btns-block" *ngIf="column.withAction">
          <button (click)="view(row)" class="btn btn-sm btn-view"><i class="fa fa-search"></i></button>
          <button (click)="edit(row)" class="btn btn-sm btn-edit"><i class="fa fa-edit"></i></button>
          <button (click)="delete(row)" class="btn btn-sm btn-delete"><i class="fa fa-trash"></i></button>
        </div>
        <div *ngIf="column.withSelection">
          <input class="smt-checkbox" type="checkbox" (change)="toggleCheckbox(row)" [disabled]="row.checkbox_disabled" [checked]="row.checkbox_checked"/>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</div>

<div *ngIf="pagination" class="smt-pagination-wrap">
  <div class="per-page-btns">
    <button (click)="itemsPerPage(10)"  [class]="meta.perPage === 10 ? 'btn active': 'btn'">10</button>
    <button (click)="itemsPerPage(25)"  [class]="meta.perPage === 25 ? 'btn active': 'btn'">25</button>
    <button (click)="itemsPerPage(50)"  [class]="meta.perPage === 50 ? 'btn active': 'btn'">50</button>
    <button (click)="itemsPerPage(100)"  [class]="meta.perPage === 100 ? 'btn active': 'btn'">100</button>
  </div>
  <div class="smt-paging-simple-numbers">
    <ul class="smt-pagination">
      <button class="btn page-link" [disabled]="meta.currentPage === 1" (click)="turnPage((meta.currentPage - 1) * -1)"> ❮❮ </button>
      <button class="btn page-link" [disabled]="meta.currentPage === 1" (click)="turnPage(-1)"><span class="pagination-default">❮</span></button>
      <button class="btn page-link numbers" [disabled]="true"> {{meta.currentPage}} </button>
      <button class="btn page-link" [disabled]="meta.currentPage === meta.pagesCount" (click)="turnPage(1)"><span class="pagination-default">❯</span></button>
      <button class="btn page-link" [disabled]="meta.currentPage === meta.pagesCount" (click)="turnPage(meta.pagesCount - meta.currentPage)"> ❯❯ </button>
    </ul>
  </div>
</div>

<ng-content></ng-content>

<div *ngIf="showConformationModal">
  <div class="smt-overlay"></div>
  <div class="smt-choice-modal">
    <p>Are you sure?</p>
    <button class="btn btn-accept" (click)="this.handleDelete.emit(itemID_for_deleting); showConformationModal = false">Yes</button>
    <button class="btn btn-cancel" (click)="itemID_for_deleting = null; showConformationModal = false">No</button>
  </div>
</div>
`,
                styles: [`.smt-checkbox{width:15px}.smt-table-responsive{background-color:#222932}.smt-table{width:100%;border-collapse:collapse}.smt-table td,.smt-table th{padding:12px 8px;border:1px solid #e2e2e4}.smt-sorting-btn-block{display:inline-flex;float:right}.smt-sorting-btn-block button{background:0 0;padding:0;margin:0;border:none;cursor:pointer}.smt-sorting-btn-block button i{font-size:12px}.fa-sort-asc:before,.fa-sort-up:before{content:"\\2191"}.fa-sort-desc:before,.fa-sort-down:before{content:"\\2193"}.smt-pagination-wrap{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;margin-top:1em}.per-page-btns button{background:#fff;border-color:#c8c7cc;color:#007bff}.per-page-btns button:hover{background-color:#f2f2f2}.per-page-btns button.active{background:#007bff;border-color:#007bff;color:#fff}.per-page-btns button.active:hover{background-color:#006fe6}.smt-pagination{margin:0;padding:0 3px 3px 0}.smt-pagination button{padding:5px 10px;border-radius:5px;margin-left:5px}.smt-pagination .page-link:not(.numbers){background:#fff;border-color:#c8c7cc;color:#007bff}.smt-pagination .page-link:not(.numbers):hover{background-color:#f2f2f2}.smt-pagination .page-link:not(.numbers):disabled{background:#fff;border-color:#c8c7cc;color:#c8c7cc;cursor:not-allowed}.smt-pagination .numbers{color:#fff;background-color:#007bff;border-color:#007bff}.btn-accept{background-color:#1fbba6;border-color:#1fbba6}.btn-cancel{background-color:#b32925;border-color:#b32925}.smt-choice-modal{text-align:center;position:fixed;background:#fff;padding:20px;left:50%;top:50%;border-radius:5px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.smt-choice-modal button{color:#fff;border:none;outline:0;margin:0 10px;padding:5px 15px;border-radius:4px}.smt-choice-modal p{font-size:18px}.smt-overlay{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(54,65,80,.8);color:#fff}.btn{line-height:1.45;text-overflow:ellipsis;overflow:hidden;margin:0 .15rem;cursor:pointer;transition:.3s;background-image:none;box-shadow:none;outline:0;font-size:.875rem;padding:.25rem .5rem;border-radius:.2rem;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent}.btn.active,.btn.disabled,.btn:active,.btn:focus,.btn:hover,.btn[disabled]{box-shadow:none;outline:0}.btn-view{background-color:#1fbba6;border-color:#1fbba6;color:#fff}.btn-view:hover{background-color:#30ddc6;border-color:#30ddc6;color:#fff}.btn-view.active,.btn-view.active:focus,.btn-view.dropdown-toggle:active:hover,.btn-view:active,.btn-view:active:focus,.btn-view:active:hover{background-color:#1ba593;border-color:#1ba593}.btn-view:focus{background-color:#46e0cc;border-color:#46e0cc;color:#fff}.btn-view.disabled.active,.btn-view.disabled:active,.btn-view.disabled:focus,.btn-view.disabled:hover,.btn-view[disabled],.btn-view[disabled].active,.btn-view[disabled]:active,.btn-view[disabled]:focus,.btn-view[disabled]:hover,fieldset[disabled] .btn-view.active,fieldset[disabled] .btn-view:active,fieldset[disabled] .btn-view:focus,fieldset[disabled] .btn-view:hover{background-color:#5ce4d2;border-color:#5ce4d2;color:#fff}.btn-edit{background-color:#007bff;border-color:#007bff;color:#fff}.btn-edit:hover{background-color:#3395ff;border-color:#3395ff;color:#fff}.btn-edit.active,.btn-edit.active:focus,.btn-edit.dropdown-toggle:active:hover,.btn-edit:active,.btn-edit:active:focus,.btn-edit:active:hover{background-color:#006fe6;border-color:#006fe6}.btn-edit:focus{background-color:#4da3ff;border-color:#4da3ff;color:#fff}.btn-edit.disabled.active,.btn-edit.disabled:active,.btn-edit.disabled:focus,.btn-edit.disabled:hover,.btn-edit[disabled],.btn-edit[disabled].active,.btn-edit[disabled]:active,.btn-edit[disabled]:focus,.btn-edit[disabled]:hover,fieldset[disabled] .btn-edit.active,fieldset[disabled] .btn-edit:active,fieldset[disabled] .btn-edit:focus,fieldset[disabled] .btn-edit:hover{background-color:#66b0ff;border-color:#66b0ff;color:#fff}.btn-delete{background-color:#b32925;border-color:#b32925;color:#fff}.btn-delete:hover{background-color:#d53a36;border-color:#d53a36;color:#fff}.btn-delete.active,.btn-delete.active:focus,.btn-delete.dropdown-toggle:active:hover,.btn-delete:active,.btn-delete:active:focus,.btn-delete:active:hover{background-color:#9e2421;border-color:#9e2421}.btn-delete:focus{background-color:#da4f4b;border-color:#da4f4b;color:#fff}.btn-delete.disabled.active,.btn-delete.disabled:active,.btn-delete.disabled:focus,.btn-delete.disabled:hover,.btn-delete[disabled],.btn-delete[disabled].active,.btn-delete[disabled]:active,.btn-delete[disabled]:focus,.btn-delete[disabled]:hover,fieldset[disabled] .btn-delete.active,fieldset[disabled] .btn-delete:active,fieldset[disabled] .btn-delete:focus,fieldset[disabled] .btn-delete:hover{background-color:#de6360;border-color:#de6360;color:#fff}`]
            },] },
];
NgSimpleTableComponent.ctorParameters = () => [];
NgSimpleTableComponent.propDecorators = {
    columns: [{ type: Input }],
    list: [{ type: Input }],
    meta: [{ type: Input }],
    pagination: [{ type: Input }],
    handleView: [{ type: Output }],
    handleEdit: [{ type: Output }],
    handleDelete: [{ type: Output }],
    handleSorting: [{ type: Output }],
    handleTurnPage: [{ type: Output }],
    handleSelectRow: [{ type: Output }],
    handleToggleCheckBox: [{ type: Output }],
    handleChangeItemsPerPage: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSimpleTableModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgSimpleTableService, NgSimpleTableComponent, NgSimpleTableModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL25nLXNpbXBsZS10YWJsZS9saWIvbmctc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtdC1uZy1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzbXQtdGFibGUtd3JhcHBlclwiPlxuICA8dGFibGUgY2xhc3M9XCJzbXQtdGFibGVcIj5cbiAgICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIGNsYXNzPVwie3tjb2x1bW4ud2l0aFNvcnRpbmcgPyAnJzonbm8tc29ydCd9fVwiIHdpZHRoPVwie3tjb2x1bW4ud2lkdGggPyBjb2x1bW4ud2lkdGg6J2F1dG8nfX1cIiBbbmdDbGFzc109XCJnZXRDb2x1bW5DbGFzcyhjb2x1bW4pXCI+XG4gICAgICAgIHt7IGNvbHVtbi50aXRsZUtleSB9fVxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLndpdGhTb3J0aW5nXCIgY2xhc3M9XCJzbXQtc29ydGluZy1idG4tYmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cInNvcnRDb2x1bW4oY29sdW1uLCAxKVwiPjxpIGNsYXNzPVwiZmEgZmEtc29ydC11cFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cInNvcnRDb2x1bW4oY29sdW1uLCAwKVwiPjxpIGNsYXNzPVwiZmEgZmEtc29ydC1kb3duXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBsaXN0XCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgKGNsaWNrKT1cInNlbGVjdFJvdyhyb3cpXCI+e3tjb2x1bW4ucm93S2V5ICYmIHJvd1tjb2x1bW4ucm93S2V5XX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbXQtYnRucy1ibG9ja1wiICpuZ0lmPVwiY29sdW1uLndpdGhBY3Rpb25cIj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ2aWV3KHJvdylcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXZpZXdcIj48aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJlZGl0KHJvdylcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWVkaXRcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKHJvdylcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlbGV0ZVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLndpdGhTZWxlY3Rpb25cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzbXQtY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiAoY2hhbmdlKT1cInRvZ2dsZUNoZWNrYm94KHJvdylcIiBbZGlzYWJsZWRdPVwicm93LmNoZWNrYm94X2Rpc2FibGVkXCIgW2NoZWNrZWRdPVwicm93LmNoZWNrYm94X2NoZWNrZWRcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInBhZ2luYXRpb25cIiBjbGFzcz1cInNtdC1wYWdpbmF0aW9uLXdyYXBcIj5cbiAgPGRpdiBjbGFzcz1cInBlci1wYWdlLWJ0bnNcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMTApXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDEwID8gJ2J0biBhY3RpdmUnOiAnYnRuJ1wiPjEwPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDI1KVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAyNSA/ICdidG4gYWN0aXZlJzogJ2J0bidcIj4yNTwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSg1MClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gNTAgPyAnYnRuIGFjdGl2ZSc6ICdidG4nXCI+NTA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMTAwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAxMDAgPyAnYnRuIGFjdGl2ZSc6ICdidG4nXCI+MTAwPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic210LXBhZ2luZy1zaW1wbGUtbnVtYmVyc1wiPlxuICAgIDx1bCBjbGFzcz1cInNtdC1wYWdpbmF0aW9uXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKChtZXRhLmN1cnJlbnRQYWdlIC0gMSkgKiAtMSlcIj4gw6LCncKuw6LCncKuIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gMVwiIChjbGljayk9XCJ0dXJuUGFnZSgtMSlcIj48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZGVmYXVsdFwiPsOiwp3Crjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcGFnZS1saW5rIG51bWJlcnNcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPiB7e21ldGEuY3VycmVudFBhZ2V9fSA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IG1ldGEucGFnZXNDb3VudFwiIChjbGljayk9XCJ0dXJuUGFnZSgxKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+w6LCncKvPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gbWV0YS5wYWdlc0NvdW50XCIgKGNsaWNrKT1cInR1cm5QYWdlKG1ldGEucGFnZXNDb3VudCAtIG1ldGEuY3VycmVudFBhZ2UpXCI+IMOiwp3Cr8Oiwp3CryA8L2J1dHRvbj5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cbjxkaXYgKm5nSWY9XCJzaG93Q29uZm9ybWF0aW9uTW9kYWxcIj5cbiAgPGRpdiBjbGFzcz1cInNtdC1vdmVybGF5XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzbXQtY2hvaWNlLW1vZGFsXCI+XG4gICAgPHA+QXJlIHlvdSBzdXJlPzwvcD5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1hY2NlcHRcIiAoY2xpY2spPVwidGhpcy5oYW5kbGVEZWxldGUuZW1pdChpdGVtSURfZm9yX2RlbGV0aW5nKTsgc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gZmFsc2VcIj5ZZXM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiAoY2xpY2spPVwiaXRlbUlEX2Zvcl9kZWxldGluZyA9IG51bGw7IHNob3dDb25mb3JtYXRpb25Nb2RhbCA9IGZhbHNlXCI+Tm88L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Auc210LWNoZWNrYm94e3dpZHRoOjE1cHh9LnNtdC10YWJsZS1yZXNwb25zaXZle2JhY2tncm91bmQtY29sb3I6IzIyMjkzMn0uc210LXRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfS5zbXQtdGFibGUgdGQsLnNtdC10YWJsZSB0aHtwYWRkaW5nOjEycHggOHB4O2JvcmRlcjoxcHggc29saWQgI2UyZTJlNH0uc210LXNvcnRpbmctYnRuLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxvYXQ6cmlnaHR9LnNtdC1zb3J0aW5nLWJ0bi1ibG9jayBidXR0b257YmFja2dyb3VuZDowIDA7cGFkZGluZzowO21hcmdpbjowO2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyfS5zbXQtc29ydGluZy1idG4tYmxvY2sgYnV0dG9uIGl7Zm9udC1zaXplOjEycHh9LmZhLXNvcnQtYXNjOmJlZm9yZSwuZmEtc29ydC11cDpiZWZvcmV7Y29udGVudDpcIlxcXFwyMTkxXCJ9LmZhLXNvcnQtZGVzYzpiZWZvcmUsLmZhLXNvcnQtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcXFwyMTkzXCJ9LnNtdC1wYWdpbmF0aW9uLXdyYXB7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tYm90dG9tOjFyZW07bWFyZ2luLXRvcDoxZW19LnBlci1wYWdlLWJ0bnMgYnV0dG9ue2JhY2tncm91bmQ6I2ZmZjtib3JkZXItY29sb3I6I2M4YzdjYztjb2xvcjojMDA3YmZmfS5wZXItcGFnZS1idG5zIGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LnBlci1wYWdlLWJ0bnMgYnV0dG9uLmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDdiZmY7Ym9yZGVyLWNvbG9yOiMwMDdiZmY7Y29sb3I6I2ZmZn0ucGVyLXBhZ2UtYnRucyBidXR0b24uYWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwNmZlNn0uc210LXBhZ2luYXRpb257bWFyZ2luOjA7cGFkZGluZzowIDNweCAzcHggMH0uc210LXBhZ2luYXRpb24gYnV0dG9ue3BhZGRpbmc6NXB4IDEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7bWFyZ2luLWxlZnQ6NXB4fS5zbXQtcGFnaW5hdGlvbiAucGFnZS1saW5rOm5vdCgubnVtYmVycyl7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYzhjN2NjO2NvbG9yOiMwMDdiZmZ9LnNtdC1wYWdpbmF0aW9uIC5wYWdlLWxpbms6bm90KC5udW1iZXJzKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LnNtdC1wYWdpbmF0aW9uIC5wYWdlLWxpbms6bm90KC5udW1iZXJzKTpkaXNhYmxlZHtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNjOGM3Y2M7Y29sb3I6I2M4YzdjYztjdXJzb3I6bm90LWFsbG93ZWR9LnNtdC1wYWdpbmF0aW9uIC5udW1iZXJze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO2JvcmRlci1jb2xvcjojMDA3YmZmfS5idG4tYWNjZXB0e2JhY2tncm91bmQtY29sb3I6IzFmYmJhNjtib3JkZXItY29sb3I6IzFmYmJhNn0uYnRuLWNhbmNlbHtiYWNrZ3JvdW5kLWNvbG9yOiNiMzI5MjU7Ym9yZGVyLWNvbG9yOiNiMzI5MjV9LnNtdC1jaG9pY2UtbW9kYWx7dGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246Zml4ZWQ7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MjBweDtsZWZ0OjUwJTt0b3A6NTAlO2JvcmRlci1yYWRpdXM6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0uc210LWNob2ljZS1tb2RhbCBidXR0b257Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtvdXRsaW5lOjA7bWFyZ2luOjAgMTBweDtwYWRkaW5nOjVweCAxNXB4O2JvcmRlci1yYWRpdXM6NHB4fS5zbXQtY2hvaWNlLW1vZGFsIHB7Zm9udC1zaXplOjE4cHh9LnNtdC1vdmVybGF5e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSg1NCw2NSw4MCwuOCk7Y29sb3I6I2ZmZn0uYnRue2xpbmUtaGVpZ2h0OjEuNDU7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47bWFyZ2luOjAgLjE1cmVtO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246LjNzO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3gtc2hhZG93Om5vbmU7b3V0bGluZTowO2ZvbnQtc2l6ZTouODc1cmVtO3BhZGRpbmc6LjI1cmVtIC41cmVtO2JvcmRlci1yYWRpdXM6LjJyZW07ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LmJ0bi5hY3RpdmUsLmJ0bi5kaXNhYmxlZCwuYnRuOmFjdGl2ZSwuYnRuOmZvY3VzLC5idG46aG92ZXIsLmJ0bltkaXNhYmxlZF17Ym94LXNoYWRvdzpub25lO291dGxpbmU6MH0uYnRuLXZpZXd7YmFja2dyb3VuZC1jb2xvcjojMWZiYmE2O2JvcmRlci1jb2xvcjojMWZiYmE2O2NvbG9yOiNmZmZ9LmJ0bi12aWV3OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzMwZGRjNjtib3JkZXItY29sb3I6IzMwZGRjNjtjb2xvcjojZmZmfS5idG4tdmlldy5hY3RpdmUsLmJ0bi12aWV3LmFjdGl2ZTpmb2N1cywuYnRuLXZpZXcuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZTpob3ZlciwuYnRuLXZpZXc6YWN0aXZlLC5idG4tdmlldzphY3RpdmU6Zm9jdXMsLmJ0bi12aWV3OmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxYmE1OTM7Ym9yZGVyLWNvbG9yOiMxYmE1OTN9LmJ0bi12aWV3OmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzQ2ZTBjYztib3JkZXItY29sb3I6IzQ2ZTBjYztjb2xvcjojZmZmfS5idG4tdmlldy5kaXNhYmxlZC5hY3RpdmUsLmJ0bi12aWV3LmRpc2FibGVkOmFjdGl2ZSwuYnRuLXZpZXcuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi12aWV3LmRpc2FibGVkOmhvdmVyLC5idG4tdmlld1tkaXNhYmxlZF0sLmJ0bi12aWV3W2Rpc2FibGVkXS5hY3RpdmUsLmJ0bi12aWV3W2Rpc2FibGVkXTphY3RpdmUsLmJ0bi12aWV3W2Rpc2FibGVkXTpmb2N1cywuYnRuLXZpZXdbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXZpZXcuYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXZpZXc6YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXZpZXc6Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM1Y2U0ZDI7Ym9yZGVyLWNvbG9yOiM1Y2U0ZDI7Y29sb3I6I2ZmZn0uYnRuLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO2JvcmRlci1jb2xvcjojMDA3YmZmO2NvbG9yOiNmZmZ9LmJ0bi1lZGl0OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzMzOTVmZjtib3JkZXItY29sb3I6IzMzOTVmZjtjb2xvcjojZmZmfS5idG4tZWRpdC5hY3RpdmUsLmJ0bi1lZGl0LmFjdGl2ZTpmb2N1cywuYnRuLWVkaXQuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZTpob3ZlciwuYnRuLWVkaXQ6YWN0aXZlLC5idG4tZWRpdDphY3RpdmU6Zm9jdXMsLmJ0bi1lZGl0OmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDZmZTY7Ym9yZGVyLWNvbG9yOiMwMDZmZTZ9LmJ0bi1lZGl0OmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzRkYTNmZjtib3JkZXItY29sb3I6IzRkYTNmZjtjb2xvcjojZmZmfS5idG4tZWRpdC5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1lZGl0LmRpc2FibGVkOmFjdGl2ZSwuYnRuLWVkaXQuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi1lZGl0LmRpc2FibGVkOmhvdmVyLC5idG4tZWRpdFtkaXNhYmxlZF0sLmJ0bi1lZGl0W2Rpc2FibGVkXS5hY3RpdmUsLmJ0bi1lZGl0W2Rpc2FibGVkXTphY3RpdmUsLmJ0bi1lZGl0W2Rpc2FibGVkXTpmb2N1cywuYnRuLWVkaXRbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWVkaXQuYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWVkaXQ6YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWVkaXQ6Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM2NmIwZmY7Ym9yZGVyLWNvbG9yOiM2NmIwZmY7Y29sb3I6I2ZmZn0uYnRuLWRlbGV0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNiMzI5MjU7Ym9yZGVyLWNvbG9yOiNiMzI5MjU7Y29sb3I6I2ZmZn0uYnRuLWRlbGV0ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkNTNhMzY7Ym9yZGVyLWNvbG9yOiNkNTNhMzY7Y29sb3I6I2ZmZn0uYnRuLWRlbGV0ZS5hY3RpdmUsLmJ0bi1kZWxldGUuYWN0aXZlOmZvY3VzLC5idG4tZGVsZXRlLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmU6aG92ZXIsLmJ0bi1kZWxldGU6YWN0aXZlLC5idG4tZGVsZXRlOmFjdGl2ZTpmb2N1cywuYnRuLWRlbGV0ZTphY3RpdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOWUyNDIxO2JvcmRlci1jb2xvcjojOWUyNDIxfS5idG4tZGVsZXRlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2RhNGY0Yjtib3JkZXItY29sb3I6I2RhNGY0Yjtjb2xvcjojZmZmfS5idG4tZGVsZXRlLmRpc2FibGVkLmFjdGl2ZSwuYnRuLWRlbGV0ZS5kaXNhYmxlZDphY3RpdmUsLmJ0bi1kZWxldGUuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi1kZWxldGUuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1kZWxldGVbZGlzYWJsZWRdLC5idG4tZGVsZXRlW2Rpc2FibGVkXS5hY3RpdmUsLmJ0bi1kZWxldGVbZGlzYWJsZWRdOmFjdGl2ZSwuYnRuLWRlbGV0ZVtkaXNhYmxlZF06Zm9jdXMsLmJ0bi1kZWxldGVbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlbGV0ZS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVsZXRlOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWxldGU6Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVsZXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RlNjM2MDtib3JkZXItY29sb3I6I2RlNjM2MDtjb2xvcjojZmZmfWBdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcml2YXRlIF9wYWdpbmF0aW9uID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY29sdW1uczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfbGlzdDogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfc29ydDogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfbWV0YTogTWV0YURhdGEgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gICAgbmV4dFBhZ2U6IDAsXG4gICAgcGFnZXNDb3VudDogMCxcbiAgICBwZXJQYWdlOiAwLFxuICAgIHByZXZQYWdlOiAwLFxuICAgIHRvdGFsQ291bnQ6IDBcbiAgfTtcbiAgcHJpdmF0ZSBfc2hvd0NvbmZvcm1hdGlvbk1vZGFsOiBib29sZWFuO1xuICBpdGVtSURfZm9yX2RlbGV0aW5nOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5zKGNvbHVtbnM6IGFueVtdKSB7XG4gICAgaWYgKGNvbHVtbnMgJiYgQXJyYXkuaXNBcnJheShjb2x1bW5zKSkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbHVtbnMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxpc3QobGlzdDogYW55W10pIHtcbiAgICBpZiAobGlzdCAmJiBBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICB0aGlzLl9saXN0ID0gbGlzdDtcbiAgICB9XG4gIH1cblxuICBnZXQgbGlzdCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbWV0YShtZXRhOiBNZXRhRGF0YSkge1xuICAgIGlmIChtZXRhKSB7XG4gICAgICB0aGlzLl9tZXRhID0gbWV0YTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWV0YSgpOiBNZXRhRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcGFnaW5hdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdpbmF0aW9uO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIGhhbmRsZVZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZUVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZURlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlU29ydGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlVHVyblBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZVNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlVG9nZ2xlQ2hlY2tCb3ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZUNoYW5nZUl0ZW1zUGVyUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHNldCBzb3J0KHNvcnQ6IGFueVtdKSB7XG4gICAgaWYgKHNvcnQgJiYgQXJyYXkuaXNBcnJheShzb3J0KSkge1xuICAgICAgdGhpcy5fc29ydCA9IHNvcnQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNvcnQoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0O1xuICB9XG5cbiAgc2V0IHNob3dDb25mb3JtYXRpb25Nb2RhbCh2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDb25mb3JtYXRpb25Nb2RhbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dDb25mb3JtYXRpb25Nb2RhbCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q29uZm9ybWF0aW9uTW9kYWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHZpZXcocm93KSB7XG4gICAgdGhpcy5oYW5kbGVWaWV3LmVtaXQocm93LmlkKTtcbiAgfVxuXG4gIGVkaXQocm93KSB7XG4gICAgdGhpcy5oYW5kbGVFZGl0LmVtaXQocm93LmlkKTtcbiAgfVxuXG4gIGRlbGV0ZShyb3cpIHtcbiAgICB0aGlzLnNob3dDb25mb3JtYXRpb25Nb2RhbCA9IHRydWU7XG4gICAgdGhpcy5pdGVtSURfZm9yX2RlbGV0aW5nID0gcm93LmlkO1xuICB9XG5cbiAgc29ydENvbHVtbihjb2x1bW4sIHR5cGUpIHtcbiAgICBjb25zdCBzb3J0UGFyYW1TZXQgPSB0aGlzLnNvcnQuc29tZShcbiAgICAgIGVsID0+IGVsLmZpZWxkID09PSBjb2x1bW4uc29ydEtleSB8fCBlbC5maWVsZCA9PT0gY29sdW1uLnJvd0tleVxuICAgICk7XG4gICAgaWYgKHNvcnRQYXJhbVNldCkge1xuICAgICAgdGhpcy5zb3J0ID0gdGhpcy5zb3J0Lm1hcChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5pZCA9PT0gY29sdW1uLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydCA9IFtcbiAgICAgICAgLi4udGhpcy5zb3J0LFxuICAgICAgICB7IGZpZWxkOiBjb2x1bW4uc29ydEtleSA/IGNvbHVtbi5zb3J0S2V5IDogY29sdW1uLnJvd0tleSwgdHlwZSB9XG4gICAgICBdO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZVNvcnRpbmcuZW1pdCh0aGlzLnNvcnQpO1xuICB9XG5cbiAgdHVyblBhZ2UoaW5kZXgpIHtcbiAgICBjb25zdCBuZXh0UGFnZSA9IHRoaXMubWV0YS5jdXJyZW50UGFnZSArIGluZGV4O1xuICAgIHRoaXMuaGFuZGxlVHVyblBhZ2UuZW1pdChuZXh0UGFnZSk7XG4gIH1cblxuICBzZWxlY3RSb3coaXRlbSkge1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93LmVtaXQoaXRlbSk7XG4gIH1cblxuICB0b2dnbGVDaGVja2JveChpdGVtKSB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGVDaGVja0JveC5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgaXRlbXNQZXJQYWdlKGNvdW50KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VJdGVtc1BlclBhZ2UuZW1pdChjb3VudCk7XG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyhjb2x1bW4pIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5zb3J0LmZpbmQoXG4gICAgICBpID0+IGkuZmllbGQgPT09IGNvbHVtbi5zb3J0S2V5IHx8IGkuZmllbGQgPT09IGNvbHVtbi5yb3dLZXlcbiAgICApO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAxKSB7XG4gICAgICAgIHJldHVybiAnc29ydC11cCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ3NvcnQtZG93bic7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdTaW1wbGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmctc2ltcGxlLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05nU2ltcGxlVGFibGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmdTaW1wbGVUYWJsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVUYWJsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7OztBQ0pEO0lBcUVFO1FBRVEsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFhO1lBQ3hCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFFRix3QkFBbUIsR0FBUSxJQUFJLENBQUM7UUE2Q2hDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXpDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUxQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRS9DLDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0ExRXRDOzs7OztJQWlCaEIsSUFDSSxPQUFPLENBQUMsT0FBYztRQUN4QixJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1NB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