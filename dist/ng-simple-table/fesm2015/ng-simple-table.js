import { Injectable, NgModule, Component, Input, Output, EventEmitter, defineInjectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgSimpleTableService {
    constructor() { }
}
NgSimpleTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgSimpleTableService.ctorParameters = () => [];
/** @nocollapse */ NgSimpleTableService.ngInjectableDef = defineInjectable({ factory: function NgSimpleTableService_Factory() { return new NgSimpleTableService(); }, token: NgSimpleTableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgSimpleTableComponent {
    constructor() {
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
        this._show_pagination = value;
    }
    /**
     * @return {?}
     */
    get pagination() {
        return this._show_pagination;
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
        if (this.paginationState === false) {
            this.pagination = false;
        }
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
                template: `<div class="table-wrapper">
  <table class="table">
    <thead>
    <tr>
      <th *ngFor="let column of columns" class="{{column.withSorting ? '':'no-sort'}}" width="{{column.width ? column.width:'auto'}}" [ngClass]="getColumnClass(column)">
        {{ column.titleKey }}
        <div *ngIf="column.withSorting" class="sorting-btn-block">
          <button class="sort-btn" (click)="sortColumn(column, 1)"><i class="fa fa-sort-up"></i></button>
          <button class="sort-btn" (click)="sortColumn(column, 0)"><i class="fa fa-sort-down"></i></button>
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let row of list">
      <td *ngFor="let column of columns">
        <div (click)="selectRow(row)">{{column.rowKey && row[column.rowKey]}}</div>
        <div class="action-btns-block" *ngIf="column.withActionCol">
          <button (click)="view(row)" class="btn btn-view"><i class="fa fa-search"></i></button>
          <button (click)="edit(row)" class="btn btn-edit"><i class="fa fa-edit"></i></button>
          <button (click)="delete(row)" *ngIf="!column.hideDeleteBtn" class="btn btn-delete"><i class="fa fa-trash"></i></button>
        </div>
        <div *ngIf="column.withSelectionCol">
          <input type="checkbox" (change)="toggleCheckbox(row)" [disabled]="row.checkbox_disabled" [checked]="row.checkbox_checked"/>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</div>

<div *ngIf="pagination" class="pagination-wrap">
  <!--<div class="pagination-result">{{meta?.currentPage}} / {{meta?.pagesCount}}</div>-->
  <div class="per-page-btns">
    <button (click)="itemsPerPage(10)"  [class]="meta.perPage === 10 ? 'active': ''">10</button>
    <button (click)="itemsPerPage(25)"  [class]="meta.perPage === 25 ? 'active': ''">25</button>
    <button (click)="itemsPerPage(50)"  [class]="meta.perPage === 50 ? 'active': ''">50</button>
    <button (click)="itemsPerPage(100)"  [class]="meta.perPage === 100 ? 'active': ''">100</button>
  </div>
  <div class="paging_simple_numbers">
    <ul class="pagination">
      <button class="page-link" [disabled]="meta.currentPage === 1" (click)="turnPage((meta.currentPage - 1) * -1)"> ❮❮ </button>
      <button class="page-link" [disabled]="meta.currentPage === 1" (click)="turnPage(-1)"><span class="pagination-default">❮</span></button>
      <button class="page-link numbers" [disabled]="true"> {{meta.currentPage}} </button>
      <button class="page-link" [disabled]="meta.currentPage === meta.pagesCount" (click)="turnPage(1)"><span class="pagination-default">❯</span></button>
      <button class="page-link" [disabled]="meta.currentPage === meta.pagesCount" (click)="turnPage(meta.pagesCount - meta.currentPage)"> ❯❯ </button>
    </ul>
  </div>
</div>

<div class="alert-modal choice-modal" *ngIf="showConformationModal">
  <p>{{'operation-modal.question'}}?</p>
  <button class="btn-accept" (click)="this.handleDelete.emit(itemID_for_deleting); showConformationModal = false">Yes</button>
  <button class="btn-cancel" (click)="itemID_for_deleting = null; showConformationModal = false">No</button>
  <div class="overlay"></div>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NgSimpleTableComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgSimpleTableService, NgSimpleTableComponent, NgSimpleTableModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1zaW1wbGUtdGFibGUvbGliL25nLXNpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL25nLXNpbXBsZS10YWJsZS9saWIvbmctc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nU2ltcGxlVGFibGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtdC1uZy1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBjbGFzcz1cInt7Y29sdW1uLndpdGhTb3J0aW5nID8gJyc6J25vLXNvcnQnfX1cIiB3aWR0aD1cInt7Y29sdW1uLndpZHRoID8gY29sdW1uLndpZHRoOidhdXRvJ319XCIgW25nQ2xhc3NdPVwiZ2V0Q29sdW1uQ2xhc3MoY29sdW1uKVwiPlxuICAgICAgICB7eyBjb2x1bW4udGl0bGVLZXkgfX1cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbHVtbi53aXRoU29ydGluZ1wiIGNsYXNzPVwic29ydGluZy1idG4tYmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic29ydC1idG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDEpXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LXVwXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzb3J0LWJ0blwiIChjbGljayk9XCJzb3J0Q29sdW1uKGNvbHVtbiwgMClcIj48aSBjbGFzcz1cImZhIGZhLXNvcnQtZG93blwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgbGlzdFwiPlxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiPnt7Y29sdW1uLnJvd0tleSAmJiByb3dbY29sdW1uLnJvd0tleV19fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ0bnMtYmxvY2tcIiAqbmdJZj1cImNvbHVtbi53aXRoQWN0aW9uQ29sXCI+XG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidmlldyhyb3cpXCIgY2xhc3M9XCJidG4gYnRuLXZpZXdcIj48aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJlZGl0KHJvdylcIiBjbGFzcz1cImJ0biBidG4tZWRpdFwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUocm93KVwiICpuZ0lmPVwiIWNvbHVtbi5oaWRlRGVsZXRlQnRuXCIgY2xhc3M9XCJidG4gYnRuLWRlbGV0ZVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLndpdGhTZWxlY3Rpb25Db2xcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNoYW5nZSk9XCJ0b2dnbGVDaGVja2JveChyb3cpXCIgW2Rpc2FibGVkXT1cInJvdy5jaGVja2JveF9kaXNhYmxlZFwiIFtjaGVja2VkXT1cInJvdy5jaGVja2JveF9jaGVja2VkXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJwYWdpbmF0aW9uXCIgY2xhc3M9XCJwYWdpbmF0aW9uLXdyYXBcIj5cbiAgPCEtLTxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXJlc3VsdFwiPnt7bWV0YT8uY3VycmVudFBhZ2V9fSAvIHt7bWV0YT8ucGFnZXNDb3VudH19PC9kaXY+LS0+XG4gIDxkaXYgY2xhc3M9XCJwZXItcGFnZS1idG5zXCI+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDEwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAxMCA/ICdhY3RpdmUnOiAnJ1wiPjEwPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDI1KVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSAyNSA/ICdhY3RpdmUnOiAnJ1wiPjI1PC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDUwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSA1MCA/ICdhY3RpdmUnOiAnJ1wiPjUwPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDEwMClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gMTAwID8gJ2FjdGl2ZSc6ICcnXCI+MTAwPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnaW5nX3NpbXBsZV9udW1iZXJzXCI+XG4gICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKChtZXRhLmN1cnJlbnRQYWdlIC0gMSkgKiAtMSlcIj4gw6LCncKuw6LCncKuIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKC0xKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+w6LCncKuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGluayBudW1iZXJzXCIgW2Rpc2FibGVkXT1cInRydWVcIj4ge3ttZXRhLmN1cnJlbnRQYWdlfX0gPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IG1ldGEucGFnZXNDb3VudFwiIChjbGljayk9XCJ0dXJuUGFnZSgxKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+w6LCncKvPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSBtZXRhLnBhZ2VzQ291bnRcIiAoY2xpY2spPVwidHVyblBhZ2UobWV0YS5wYWdlc0NvdW50IC0gbWV0YS5jdXJyZW50UGFnZSlcIj4gw6LCncKvw6LCncKvIDwvYnV0dG9uPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJhbGVydC1tb2RhbCBjaG9pY2UtbW9kYWxcIiAqbmdJZj1cInNob3dDb25mb3JtYXRpb25Nb2RhbFwiPlxuICA8cD57eydvcGVyYXRpb24tbW9kYWwucXVlc3Rpb24nfX0/PC9wPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFjY2VwdFwiIChjbGljayk9XCJ0aGlzLmhhbmRsZURlbGV0ZS5lbWl0KGl0ZW1JRF9mb3JfZGVsZXRpbmcpOyBzaG93Q29uZm9ybWF0aW9uTW9kYWwgPSBmYWxzZVwiPlllczwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNhbmNlbFwiIChjbGljayk9XCJpdGVtSURfZm9yX2RlbGV0aW5nID0gbnVsbDsgc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gZmFsc2VcIj5ObzwvYnV0dG9uPlxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgX3Nob3dfcGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX2NvbHVtbnM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2xpc3Q6IGFueVtdID0gW107XG4gIHByaXZhdGUgX3NvcnQ6IGFueVtdID0gW107XG4gIHByaXZhdGUgX21ldGE6IE1ldGFEYXRhID0ge1xuICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgIG5leHRQYWdlOiAwLFxuICAgIHBhZ2VzQ291bnQ6IDAsXG4gICAgcGVyUGFnZTogMCxcbiAgICBwcmV2UGFnZTogMCxcbiAgICB0b3RhbENvdW50OiAwXG4gIH07XG4gIHByaXZhdGUgX3Nob3dDb25mb3JtYXRpb25Nb2RhbDogYm9vbGVhbjtcbiAgaXRlbUlEX2Zvcl9kZWxldGluZzogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwYWdpbmF0aW9uU3RhdGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnMoY29sdW1uczogYW55W10pIHtcbiAgICBpZiAoY29sdW1ucyAmJiBBcnJheS5pc0FycmF5KGNvbHVtbnMpKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbGlzdChsaXN0OiBhbnlbXSkge1xuICAgIGlmIChsaXN0ICYmIEFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBsaXN0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBsaXN0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIEBJbnB1dCgnbWV0YScpXG4gIHNldCBtZXRhKG1ldGE6IE1ldGFEYXRhKSB7XG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHRoaXMuX21ldGEgPSBtZXRhO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtZXRhKCk6IE1ldGFEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YTtcbiAgfVxuXG4gIHNldCBwYWdpbmF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd19wYWdpbmF0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd19wYWdpbmF0aW9uO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIGhhbmRsZVZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZUVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZURlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlU29ydGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlVHVyblBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZVNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlVG9nZ2xlQ2hlY2tCb3ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhhbmRsZUNoYW5nZUl0ZW1zUGVyUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHNldCBzb3J0KHNvcnQ6IGFueVtdKSB7XG4gICAgaWYgKHNvcnQgJiYgQXJyYXkuaXNBcnJheShzb3J0KSkge1xuICAgICAgdGhpcy5fc29ydCA9IHNvcnQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNvcnQoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0O1xuICB9XG5cbiAgc2V0IHNob3dDb25mb3JtYXRpb25Nb2RhbCh2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDb25mb3JtYXRpb25Nb2RhbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dDb25mb3JtYXRpb25Nb2RhbCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q29uZm9ybWF0aW9uTW9kYWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2aWV3KHJvdykge1xuICAgIHRoaXMuaGFuZGxlVmlldy5lbWl0KHJvdy5pZCk7XG4gIH1cblxuICBlZGl0KHJvdykge1xuICAgIHRoaXMuaGFuZGxlRWRpdC5lbWl0KHJvdy5pZCk7XG4gIH1cblxuICBkZWxldGUocm93KSB7XG4gICAgdGhpcy5zaG93Q29uZm9ybWF0aW9uTW9kYWwgPSB0cnVlO1xuICAgIHRoaXMuaXRlbUlEX2Zvcl9kZWxldGluZyA9IHJvdy5pZDtcbiAgfVxuXG4gIHNvcnRDb2x1bW4oY29sdW1uLCB0eXBlKSB7XG4gICAgY29uc3Qgc29ydFBhcmFtU2V0ID0gdGhpcy5zb3J0LnNvbWUoXG4gICAgICBlbCA9PiBlbC5maWVsZCA9PT0gY29sdW1uLnNvcnRLZXkgfHwgZWwuZmllbGQgPT09IGNvbHVtbi5yb3dLZXlcbiAgICApO1xuICAgIGlmIChzb3J0UGFyYW1TZXQpIHtcbiAgICAgIHRoaXMuc29ydCA9IHRoaXMuc29ydC5tYXAoZWwgPT4ge1xuICAgICAgICBpZiAoZWwuaWQgPT09IGNvbHVtbi5pZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnQgPSBbXG4gICAgICAgIC4uLnRoaXMuc29ydCxcbiAgICAgICAgeyBmaWVsZDogY29sdW1uLnNvcnRLZXkgPyBjb2x1bW4uc29ydEtleSA6IGNvbHVtbi5yb3dLZXksIHR5cGUgfVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTb3J0aW5nLmVtaXQodGhpcy5zb3J0KTtcbiAgfVxuXG4gIHR1cm5QYWdlKGluZGV4KSB7XG4gICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLm1ldGEuY3VycmVudFBhZ2UgKyBpbmRleDtcbiAgICB0aGlzLmhhbmRsZVR1cm5QYWdlLmVtaXQobmV4dFBhZ2UpO1xuICB9XG5cbiAgc2VsZWN0Um93KGl0ZW0pIHtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdy5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2tib3goaXRlbSkge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlQ2hlY2tCb3guZW1pdChpdGVtKTtcbiAgfVxuXG4gIGl0ZW1zUGVyUGFnZShjb3VudCkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlSXRlbXNQZXJQYWdlLmVtaXQoY291bnQpO1xuICB9XG4gIGdldENvbHVtbkNsYXNzKGNvbHVtbikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnNvcnQuZmluZChcbiAgICAgIGkgPT4gaS5maWVsZCA9PT0gY29sdW1uLnNvcnRLZXkgfHwgaS5maWVsZCA9PT0gY29sdW1uLnJvd0tleVxuICAgICk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICdzb3J0LXVwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnc29ydC1kb3duJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ1NpbXBsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1zaW1wbGUtdGFibGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdTaW1wbGVUYWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ1NpbXBsZVRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZVRhYmxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBa0VFO2dDQUUyQixJQUFJO3dCQUNMLEVBQUU7cUJBQ0wsRUFBRTtxQkFDRixFQUFFO3FCQUNDO1lBQ3hCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FB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