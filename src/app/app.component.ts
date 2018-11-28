import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    columns = [
        {titleKey: '', withSorting: false, rowKey: '', withSelection: true},
        {titleKey: 'Manufacture Name', withSorting: true, rowKey: 'manufacturer_name'},
        {titleKey: 'Model Name', withSorting: true, rowKey: 'name'},
        {titleKey: 'Action', withSorting: false, rowKey: '', withAction: true}
    ];

    list = [
        {
            id: 1,
            manufacturer_name: 'BMW',
            name: 'GTX',
            checkbox_disabled: true
        },
        {
            id: 2,
            manufacturer_name: 'MAZDA',
            name: 'IPD',
            checkbox_checked: true
        }
    ];

    meta = {
        currentPage: 1,
        nextPage: 1,
        pagesCount: 1,
        perPage: 10,
        prevPage: 1,
        totalCount: 5
    };

    pagination = false;

    startView(id) {
        console.log(id);
    }

    startEditing(id) {
        console.log(id);
    }

    sortList(sort) {
        console.log(sort);
    }

    turnPage(page) {
        console.log(page);
    }

    changeItemsPerPage(itemsPerPage) {
        console.log(itemsPerPage);
    }

    handleDelete(id) {
        console.log(id);
    }

    toggleCheckBox(item) {
        console.log(item);
    }
}
