/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgSimpleTableComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgSimpleTableComponent.prototype._pagination;
    /**
     * @type {?}
     * @private
     */
    NgSimpleTableComponent.prototype._columns;
    /**
     * @type {?}
     * @private
     */
    NgSimpleTableComponent.prototype._list;
    /**
     * @type {?}
     * @private
     */
    NgSimpleTableComponent.prototype._sort;
    /**
     * @type {?}
     * @private
     */
    NgSimpleTableComponent.prototype._meta;
    /**
     * @type {?}
     * @private
     */
    NgSimpleTableComponent.prototype._showConformationModal;
    /** @type {?} */
    NgSimpleTableComponent.prototype.itemID_for_deleting;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1zaW1wbGUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBbUU5RSxNQUFNO0lBRUo7UUFFUSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQWE7WUFDeEIsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDO1lBQ2IsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQztRQUVGLHdCQUFtQixHQUFRLElBQUksQ0FBQztRQTZDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFekMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTFDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFL0MsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQTFFdkMsQ0FBQzs7Ozs7SUFpQmhCLElBQ0ksT0FBTyxDQUFDLE9BQWM7UUFDeEIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtB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QUksQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsTUFBTSxDQUM3RDtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQzs7O1lBcE9GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkRYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHUySkFBdTJKLENBQUM7YUFDbDNKOzs7O3NCQW9CRSxLQUFLO21CQVdMLEtBQUs7bUJBV0wsS0FBSzt5QkFXTCxLQUFLO3lCQVNMLE1BQU07eUJBRU4sTUFBTTsyQkFFTixNQUFNOzRCQUVOLE1BQU07NkJBRU4sTUFBTTs4QkFFTixNQUFNO21DQUVOLE1BQU07dUNBRU4sTUFBTTs7Ozs7OztJQXZFUCw2Q0FBMkI7Ozs7O0lBQzNCLDBDQUE2Qjs7Ozs7SUFDN0IsdUNBQTBCOzs7OztJQUMxQix1Q0FBMEI7Ozs7O0lBQzFCLHVDQU9FOzs7OztJQUNGLHdEQUF3Qzs7SUFDeEMscURBQWdDOztJQTRDaEMsNENBQ3FDOztJQUNyQyw0Q0FDcUM7O0lBQ3JDLDhDQUN1Qzs7SUFDdkMsK0NBQ3dDOztJQUN4QyxnREFDeUM7O0lBQ3pDLGlEQUMwQzs7SUFDMUMsc0RBQytDOztJQUMvQywwREFDc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc210LW5nLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNtdC10YWJsZS13cmFwcGVyXCI+XG4gIDx0YWJsZSBjbGFzcz1cInNtdC10YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbHVtbi53aXRoU29ydGluZyA/ICcnOiduby1zb3J0J319XCIgd2lkdGg9XCJ7e2NvbHVtbi53aWR0aCA/IGNvbHVtbi53aWR0aDonYXV0byd9fVwiIFtuZ0NsYXNzXT1cImdldENvbHVtbkNsYXNzKGNvbHVtbilcIj5cbiAgICAgICAge3sgY29sdW1uLnRpdGxlS2V5IH19XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4ud2l0aFNvcnRpbmdcIiBjbGFzcz1cInNtdC1zb3J0aW5nLWJ0bi1ibG9ja1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDEpXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LXVwXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwic29ydENvbHVtbihjb2x1bW4sIDApXCI+PGkgY2xhc3M9XCJmYSBmYS1zb3J0LWRvd25cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGxpc3RcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIj57e2NvbHVtbi5yb3dLZXkgJiYgcm93W2NvbHVtbi5yb3dLZXldfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNtdC1idG5zLWJsb2NrXCIgKm5nSWY9XCJjb2x1bW4ud2l0aEFjdGlvblwiPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInZpZXcocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tdmlld1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImVkaXQocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZWRpdFwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUocm93KVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVsZXRlXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW4ud2l0aFNlbGVjdGlvblwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNtdC1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIChjaGFuZ2UpPVwidG9nZ2xlQ2hlY2tib3gocm93KVwiIFtkaXNhYmxlZF09XCJyb3cuY2hlY2tib3hfZGlzYWJsZWRcIiBbY2hlY2tlZF09XCJyb3cuY2hlY2tib3hfY2hlY2tlZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicGFnaW5hdGlvblwiIGNsYXNzPVwic210LXBhZ2luYXRpb24td3JhcFwiPlxuICA8ZGl2IGNsYXNzPVwicGVyLXBhZ2UtYnRuc1wiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgxMClcIiAgW2NsYXNzXT1cIm1ldGEucGVyUGFnZSA9PT0gMTAgPyAnYnRuIGFjdGl2ZSc6ICdidG4nXCI+MTA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJpdGVtc1BlclBhZ2UoMjUpXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDI1ID8gJ2J0biBhY3RpdmUnOiAnYnRuJ1wiPjI1PC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXRlbXNQZXJQYWdlKDUwKVwiICBbY2xhc3NdPVwibWV0YS5wZXJQYWdlID09PSA1MCA/ICdidG4gYWN0aXZlJzogJ2J0bidcIj41MDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIml0ZW1zUGVyUGFnZSgxMDApXCIgIFtjbGFzc109XCJtZXRhLnBlclBhZ2UgPT09IDEwMCA/ICdidG4gYWN0aXZlJzogJ2J0bidcIj4xMDA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzbXQtcGFnaW5nLXNpbXBsZS1udW1iZXJzXCI+XG4gICAgPHVsIGNsYXNzPVwic210LXBhZ2luYXRpb25cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gcGFnZS1saW5rXCIgW2Rpc2FibGVkXT1cIm1ldGEuY3VycmVudFBhZ2UgPT09IDFcIiAoY2xpY2spPVwidHVyblBhZ2UoKG1ldGEuY3VycmVudFBhZ2UgLSAxKSAqIC0xKVwiPiDina7ina4gPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInR1cm5QYWdlKC0xKVwiPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1kZWZhdWx0XCI+4p2uPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwYWdlLWxpbmsgbnVtYmVyc1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+IHt7bWV0YS5jdXJyZW50UGFnZX19IDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwYWdlLWxpbmtcIiBbZGlzYWJsZWRdPVwibWV0YS5jdXJyZW50UGFnZSA9PT0gbWV0YS5wYWdlc0NvdW50XCIgKGNsaWNrKT1cInR1cm5QYWdlKDEpXCI+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWRlZmF1bHRcIj7ina88L3NwYW4+PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHBhZ2UtbGlua1wiIFtkaXNhYmxlZF09XCJtZXRhLmN1cnJlbnRQYWdlID09PSBtZXRhLnBhZ2VzQ291bnRcIiAoY2xpY2spPVwidHVyblBhZ2UobWV0YS5wYWdlc0NvdW50IC0gbWV0YS5jdXJyZW50UGFnZSlcIj4g4p2v4p2vIDwvYnV0dG9uPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuPGRpdiAqbmdJZj1cInNob3dDb25mb3JtYXRpb25Nb2RhbFwiPlxuICA8ZGl2IGNsYXNzPVwic210LW92ZXJsYXlcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNtdC1jaG9pY2UtbW9kYWxcIj5cbiAgICA8cD5BcmUgeW91IHN1cmU/PC9wPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWFjY2VwdFwiIChjbGljayk9XCJ0aGlzLmhhbmRsZURlbGV0ZS5lbWl0KGl0ZW1JRF9mb3JfZGVsZXRpbmcpOyBzaG93Q29uZm9ybWF0aW9uTW9kYWwgPSBmYWxzZVwiPlllczwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIChjbGljayk9XCJpdGVtSURfZm9yX2RlbGV0aW5nID0gbnVsbDsgc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gZmFsc2VcIj5ObzwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5zbXQtY2hlY2tib3h7d2lkdGg6MTVweH0uc210LXRhYmxlLXJlc3BvbnNpdmV7YmFja2dyb3VuZC1jb2xvcjojMjIyOTMyfS5zbXQtdGFibGV7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9LnNtdC10YWJsZSB0ZCwuc210LXRhYmxlIHRoe3BhZGRpbmc6MTJweCA4cHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlMmU0fS5zbXQtc29ydGluZy1idG4tYmxvY2t7ZGlzcGxheTppbmxpbmUtZmxleDtmbG9hdDpyaWdodH0uc210LXNvcnRpbmctYnRuLWJsb2NrIGJ1dHRvbntiYWNrZ3JvdW5kOjAgMDtwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9LnNtdC1zb3J0aW5nLWJ0bi1ibG9jayBidXR0b24gaXtmb250LXNpemU6MTJweH0uZmEtc29ydC1hc2M6YmVmb3JlLC5mYS1zb3J0LXVwOmJlZm9yZXtjb250ZW50OlwiXFxcXDIxOTFcIn0uZmEtc29ydC1kZXNjOmJlZm9yZSwuZmEtc29ydC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxcXDIxOTNcIn0uc210LXBhZ2luYXRpb24td3JhcHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MXJlbTttYXJnaW4tdG9wOjFlbX0ucGVyLXBhZ2UtYnRucyBidXR0b257YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYzhjN2NjO2NvbG9yOiMwMDdiZmZ9LnBlci1wYWdlLWJ0bnMgYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0ucGVyLXBhZ2UtYnRucyBidXR0b24uYWN0aXZle2JhY2tncm91bmQ6IzAwN2JmZjtib3JkZXItY29sb3I6IzAwN2JmZjtjb2xvcjojZmZmfS5wZXItcGFnZS1idG5zIGJ1dHRvbi5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDA2ZmU2fS5zbXQtcGFnaW5hdGlvbnttYXJnaW46MDtwYWRkaW5nOjAgM3B4IDNweCAwfS5zbXQtcGFnaW5hdGlvbiBidXR0b257cGFkZGluZzo1cHggMTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tbGVmdDo1cHh9LnNtdC1wYWdpbmF0aW9uIC5wYWdlLWxpbms6bm90KC5udW1iZXJzKXtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNjOGM3Y2M7Y29sb3I6IzAwN2JmZn0uc210LXBhZ2luYXRpb24gLnBhZ2UtbGluazpub3QoLm51bWJlcnMpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uc210LXBhZ2luYXRpb24gLnBhZ2UtbGluazpub3QoLm51bWJlcnMpOmRpc2FibGVke2JhY2tncm91bmQ6I2ZmZjtib3JkZXItY29sb3I6I2M4YzdjYztjb2xvcjojYzhjN2NjO2N1cnNvcjpub3QtYWxsb3dlZH0uc210LXBhZ2luYXRpb24gLm51bWJlcnN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Ym9yZGVyLWNvbG9yOiMwMDdiZmZ9LmJ0bi1hY2NlcHR7YmFja2dyb3VuZC1jb2xvcjojMWZiYmE2O2JvcmRlci1jb2xvcjojMWZiYmE2fS5idG4tY2FuY2Vse2JhY2tncm91bmQtY29sb3I6I2IzMjkyNTtib3JkZXItY29sb3I6I2IzMjkyNX0uc210LWNob2ljZS1tb2RhbHt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzoyMHB4O2xlZnQ6NTAlO3RvcDo1MCU7Ym9yZGVyLXJhZGl1czo1cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5zbXQtY2hvaWNlLW1vZGFsIGJ1dHRvbntjb2xvcjojZmZmO2JvcmRlcjpub25lO291dGxpbmU6MDttYXJnaW46MCAxMHB4O3BhZGRpbmc6NXB4IDE1cHg7Ym9yZGVyLXJhZGl1czo0cHh9LnNtdC1jaG9pY2UtbW9kYWwgcHtmb250LXNpemU6MThweH0uc210LW92ZXJsYXl7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDU0LDY1LDgwLC44KTtjb2xvcjojZmZmfS5idG57bGluZS1oZWlnaHQ6MS40NTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjttYXJnaW46MCAuMTVyZW07Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjouM3M7YmFja2dyb3VuZC1pbWFnZTpub25lO2JveC1zaGFkb3c6bm9uZTtvdXRsaW5lOjA7Zm9udC1zaXplOi44NzVyZW07cGFkZGluZzouMjVyZW0gLjVyZW07Ym9yZGVyLXJhZGl1czouMnJlbTtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudH0uYnRuLmFjdGl2ZSwuYnRuLmRpc2FibGVkLC5idG46YWN0aXZlLC5idG46Zm9jdXMsLmJ0bjpob3ZlciwuYnRuW2Rpc2FibGVkXXtib3gtc2hhZG93Om5vbmU7b3V0bGluZTowfS5idG4tdmlld3tiYWNrZ3JvdW5kLWNvbG9yOiMxZmJiYTY7Ym9yZGVyLWNvbG9yOiMxZmJiYTY7Y29sb3I6I2ZmZn0uYnRuLXZpZXc6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzBkZGM2O2JvcmRlci1jb2xvcjojMzBkZGM2O2NvbG9yOiNmZmZ9LmJ0bi12aWV3LmFjdGl2ZSwuYnRuLXZpZXcuYWN0aXZlOmZvY3VzLC5idG4tdmlldy5kcm9wZG93bi10b2dnbGU6YWN0aXZlOmhvdmVyLC5idG4tdmlldzphY3RpdmUsLmJ0bi12aWV3OmFjdGl2ZTpmb2N1cywuYnRuLXZpZXc6YWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzFiYTU5Mztib3JkZXItY29sb3I6IzFiYTU5M30uYnRuLXZpZXc6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNDZlMGNjO2JvcmRlci1jb2xvcjojNDZlMGNjO2NvbG9yOiNmZmZ9LmJ0bi12aWV3LmRpc2FibGVkLmFjdGl2ZSwuYnRuLXZpZXcuZGlzYWJsZWQ6YWN0aXZlLC5idG4tdmlldy5kaXNhYmxlZDpmb2N1cywuYnRuLXZpZXcuZGlzYWJsZWQ6aG92ZXIsLmJ0bi12aWV3W2Rpc2FibGVkXSwuYnRuLXZpZXdbZGlzYWJsZWRdLmFjdGl2ZSwuYnRuLXZpZXdbZGlzYWJsZWRdOmFjdGl2ZSwuYnRuLXZpZXdbZGlzYWJsZWRdOmZvY3VzLC5idG4tdmlld1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldy5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldzphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tdmlldzpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi12aWV3OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzVjZTRkMjtib3JkZXItY29sb3I6IzVjZTRkMjtjb2xvcjojZmZmfS5idG4tZWRpdHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Ym9yZGVyLWNvbG9yOiMwMDdiZmY7Y29sb3I6I2ZmZn0uYnRuLWVkaXQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzM5NWZmO2JvcmRlci1jb2xvcjojMzM5NWZmO2NvbG9yOiNmZmZ9LmJ0bi1lZGl0LmFjdGl2ZSwuYnRuLWVkaXQuYWN0aXZlOmZvY3VzLC5idG4tZWRpdC5kcm9wZG93bi10b2dnbGU6YWN0aXZlOmhvdmVyLC5idG4tZWRpdDphY3RpdmUsLmJ0bi1lZGl0OmFjdGl2ZTpmb2N1cywuYnRuLWVkaXQ6YWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwNmZlNjtib3JkZXItY29sb3I6IzAwNmZlNn0uYnRuLWVkaXQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNGRhM2ZmO2JvcmRlci1jb2xvcjojNGRhM2ZmO2NvbG9yOiNmZmZ9LmJ0bi1lZGl0LmRpc2FibGVkLmFjdGl2ZSwuYnRuLWVkaXQuZGlzYWJsZWQ6YWN0aXZlLC5idG4tZWRpdC5kaXNhYmxlZDpmb2N1cywuYnRuLWVkaXQuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1lZGl0W2Rpc2FibGVkXSwuYnRuLWVkaXRbZGlzYWJsZWRdLmFjdGl2ZSwuYnRuLWVkaXRbZGlzYWJsZWRdOmFjdGl2ZSwuYnRuLWVkaXRbZGlzYWJsZWRdOmZvY3VzLC5idG4tZWRpdFtkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdC5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdDphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZWRpdDpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1lZGl0OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzY2YjBmZjtib3JkZXItY29sb3I6IzY2YjBmZjtjb2xvcjojZmZmfS5idG4tZGVsZXRle2JhY2tncm91bmQtY29sb3I6I2IzMjkyNTtib3JkZXItY29sb3I6I2IzMjkyNTtjb2xvcjojZmZmfS5idG4tZGVsZXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Q1M2EzNjtib3JkZXItY29sb3I6I2Q1M2EzNjtjb2xvcjojZmZmfS5idG4tZGVsZXRlLmFjdGl2ZSwuYnRuLWRlbGV0ZS5hY3RpdmU6Zm9jdXMsLmJ0bi1kZWxldGUuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZTpob3ZlciwuYnRuLWRlbGV0ZTphY3RpdmUsLmJ0bi1kZWxldGU6YWN0aXZlOmZvY3VzLC5idG4tZGVsZXRlOmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM5ZTI0MjE7Ym9yZGVyLWNvbG9yOiM5ZTI0MjF9LmJ0bi1kZWxldGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZGE0ZjRiO2JvcmRlci1jb2xvcjojZGE0ZjRiO2NvbG9yOiNmZmZ9LmJ0bi1kZWxldGUuZGlzYWJsZWQuYWN0aXZlLC5idG4tZGVsZXRlLmRpc2FibGVkOmFjdGl2ZSwuYnRuLWRlbGV0ZS5kaXNhYmxlZDpmb2N1cywuYnRuLWRlbGV0ZS5kaXNhYmxlZDpob3ZlciwuYnRuLWRlbGV0ZVtkaXNhYmxlZF0sLmJ0bi1kZWxldGVbZGlzYWJsZWRdLmFjdGl2ZSwuYnRuLWRlbGV0ZVtkaXNhYmxlZF06YWN0aXZlLC5idG4tZGVsZXRlW2Rpc2FibGVkXTpmb2N1cywuYnRuLWRlbGV0ZVtkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVsZXRlLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWxldGU6YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlbGV0ZTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWxldGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGU2MzYwO2JvcmRlci1jb2xvcjojZGU2MzYwO2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgX3BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF9jb2x1bW5zOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9saXN0OiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9zb3J0OiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9tZXRhOiBNZXRhRGF0YSA9IHtcbiAgICBjdXJyZW50UGFnZTogMCxcbiAgICBuZXh0UGFnZTogMCxcbiAgICBwYWdlc0NvdW50OiAwLFxuICAgIHBlclBhZ2U6IDAsXG4gICAgcHJldlBhZ2U6IDAsXG4gICAgdG90YWxDb3VudDogMFxuICB9O1xuICBwcml2YXRlIF9zaG93Q29uZm9ybWF0aW9uTW9kYWw6IGJvb2xlYW47XG4gIGl0ZW1JRF9mb3JfZGVsZXRpbmc6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnMoY29sdW1uczogYW55W10pIHtcbiAgICBpZiAoY29sdW1ucyAmJiBBcnJheS5pc0FycmF5KGNvbHVtbnMpKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbGlzdChsaXN0OiBhbnlbXSkge1xuICAgIGlmIChsaXN0ICYmIEFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBsaXN0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBsaXN0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtZXRhKG1ldGE6IE1ldGFEYXRhKSB7XG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHRoaXMuX21ldGEgPSBtZXRhO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtZXRhKCk6IE1ldGFEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFnaW5hdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRpb247XG4gIH1cblxuICBAT3V0cHV0KClcbiAgaGFuZGxlVmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlRGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVTb3J0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVUdXJuUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoYW5kbGVUb2dnbGVDaGVja0JveCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGFuZGxlQ2hhbmdlSXRlbXNQZXJQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgc2V0IHNvcnQoc29ydDogYW55W10pIHtcbiAgICBpZiAoc29ydCAmJiBBcnJheS5pc0FycmF5KHNvcnQpKSB7XG4gICAgICB0aGlzLl9zb3J0ID0gc29ydDtcbiAgICB9XG4gIH1cblxuICBnZXQgc29ydCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvbmZvcm1hdGlvbk1vZGFsKHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd0NvbmZvcm1hdGlvbk1vZGFsKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb25mb3JtYXRpb25Nb2RhbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdmlldyhyb3cpIHtcbiAgICB0aGlzLmhhbmRsZVZpZXcuZW1pdChyb3cuaWQpO1xuICB9XG5cbiAgZWRpdChyb3cpIHtcbiAgICB0aGlzLmhhbmRsZUVkaXQuZW1pdChyb3cuaWQpO1xuICB9XG5cbiAgZGVsZXRlKHJvdykge1xuICAgIHRoaXMuc2hvd0NvbmZvcm1hdGlvbk1vZGFsID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1JRF9mb3JfZGVsZXRpbmcgPSByb3cuaWQ7XG4gIH1cblxuICBzb3J0Q29sdW1uKGNvbHVtbiwgdHlwZSkge1xuICAgIGNvbnN0IHNvcnRQYXJhbVNldCA9IHRoaXMuc29ydC5zb21lKFxuICAgICAgZWwgPT4gZWwuZmllbGQgPT09IGNvbHVtbi5zb3J0S2V5IHx8IGVsLmZpZWxkID09PSBjb2x1bW4ucm93S2V5XG4gICAgKTtcbiAgICBpZiAoc29ydFBhcmFtU2V0KSB7XG4gICAgICB0aGlzLnNvcnQgPSB0aGlzLnNvcnQubWFwKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLmlkID09PSBjb2x1bW4uaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZWwsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ID0gW1xuICAgICAgICAuLi50aGlzLnNvcnQsXG4gICAgICAgIHsgZmllbGQ6IGNvbHVtbi5zb3J0S2V5ID8gY29sdW1uLnNvcnRLZXkgOiBjb2x1bW4ucm93S2V5LCB0eXBlIH1cbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU29ydGluZy5lbWl0KHRoaXMuc29ydCk7XG4gIH1cblxuICB0dXJuUGFnZShpbmRleCkge1xuICAgIGNvbnN0IG5leHRQYWdlID0gdGhpcy5tZXRhLmN1cnJlbnRQYWdlICsgaW5kZXg7XG4gICAgdGhpcy5oYW5kbGVUdXJuUGFnZS5lbWl0KG5leHRQYWdlKTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhpdGVtKSB7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RSb3cuZW1pdChpdGVtKTtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrYm94KGl0ZW0pIHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZUNoZWNrQm94LmVtaXQoaXRlbSk7XG4gIH1cblxuICBpdGVtc1BlclBhZ2UoY291bnQpIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZUl0ZW1zUGVyUGFnZS5lbWl0KGNvdW50KTtcbiAgfVxuXG4gIGdldENvbHVtbkNsYXNzKGNvbHVtbikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnNvcnQuZmluZChcbiAgICAgIGkgPT4gaS5maWVsZCA9PT0gY29sdW1uLnNvcnRLZXkgfHwgaS5maWVsZCA9PT0gY29sdW1uLnJvd0tleVxuICAgICk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICdzb3J0LXVwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnc29ydC1kb3duJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbn1cbiJdfQ==