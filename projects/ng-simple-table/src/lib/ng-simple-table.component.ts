import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { MetaData } from './interfaces';

@Component({
  selector: 'smt-ng-simple-table',
  templateUrl: './ng-simple-table.component.html',
  styleUrls: ['./ng-simple-table.component.scss', './buttons.scss']
})
export class NgSimpleTableComponent implements OnInit {

  constructor() {}

  private _show_pagination = true;
  private _columns: any[] = [];
  private _list: any[] = [];
  private _sort: any[] = [];
  private _meta: MetaData = {
    currentPage: 0,
    nextPage: 0,
    pagesCount: 0,
    perPage: 0,
    prevPage: 0,
    totalCount: 0
  };
  private _showConformationModal: boolean;
  itemID_for_deleting: any = null;

  @Input()
  paginationState: boolean;

  @Input()
  set columns(columns: any[]) {
    if (columns && Array.isArray(columns)) {
      this._columns = columns;
    }
  }

  get columns(): any[] {
    return this._columns;
  }

  @Input()
  set list(list: any[]) {
    if (list && Array.isArray(list)) {
      this._list = list;
    }
  }

  get list(): any[] {
    return this._list;
  }

  @Input('meta')
  set meta(meta: MetaData) {
    if (meta) {
      this._meta = meta;
    }
  }

  get meta(): MetaData {
    return this._meta;
  }

  set pagination(value) {
    this._show_pagination = value;
  }

  get pagination() {
    return this._show_pagination;
  }

  @Output()
  handleView = new EventEmitter<any>();
  @Output()
  handleEdit = new EventEmitter<any>();
  @Output()
  handleDelete = new EventEmitter<any>();
  @Output()
  handleSorting = new EventEmitter<any>();
  @Output()
  handleTurnPage = new EventEmitter<any>();
  @Output()
  handleSelectRow = new EventEmitter<any>();
  @Output()
  handleToggleCheckBox = new EventEmitter<any>();
  @Output()
  handleChangeItemsPerPage = new EventEmitter<any>();

  set sort(sort: any[]) {
    if (sort && Array.isArray(sort)) {
      this._sort = sort;
    }
  }

  get sort(): any[] {
    return this._sort;
  }

  set showConformationModal(value) {
    this._showConformationModal = value;
  }

  get showConformationModal(): any {
    return this._showConformationModal;
  }

  ngOnInit() {
    if (this.paginationState === false) {
      this.pagination = false;
    }
  }

  view(row) {
    this.handleView.emit(row.id);
  }

  edit(row) {
    this.handleEdit.emit(row.id);
  }

  delete(row) {
    this.showConformationModal = true;
    this.itemID_for_deleting = row.id;
  }

  sortColumn(column, type) {
    const sortParamSet = this.sort.some(
      el => el.field === column.sortKey || el.field === column.rowKey
    );
    if (sortParamSet) {
      this.sort = this.sort.map(el => {
        if (el.id === column.id) {
          return {
            ...el,
            type
          };
        }
        return el;
      });
    } else {
      this.sort = [
        ...this.sort,
        { field: column.sortKey ? column.sortKey : column.rowKey, type }
      ];
    }
    this.handleSorting.emit(this.sort);
  }

  turnPage(index) {
    const nextPage = this.meta.currentPage + index;
    this.handleTurnPage.emit(nextPage);
  }

  selectRow(item) {
    this.handleSelectRow.emit(item);
  }

  toggleCheckbox(item) {
    this.handleToggleCheckBox.emit(item);
  }

  itemsPerPage(count) {
    this.handleChangeItemsPerPage.emit(count);
  }
  getColumnClass(column) {
    const item = this.sort.find(
      i => i.field === column.sortKey || i.field === column.rowKey
    );
    if (item) {
      if (item.type === 1) {
        return 'sort-up';
      } else {
        return 'sort-down';
      }
    }
    return '';
  }

}
