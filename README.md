# ng-simple-table

For now u have to install font-awesome and bootstrap

`npm install font-awesome bootstrap --save`

Have to be included 

`
"node_modules/font-awesome/scss/font-awesome.scss",
"node_modules/bootstrap/dist/css/bootstrap.css"
`

In root 

`import { NgSimpleTableModule } from 'ng-simple-table';`

In template

```javascript
<smt-ng-simple-table></smt-ng-simple-table>
```
Interfaces

- Row : {
    titleKey: string,
    withSorting: boolean,
    rowKey: string,
    withActionCol: boolean
}

- Item : {
    id: number,
    ...
}

- Meta : {
    currentPage: number;
    nextPage: number;
    pagesCount: number;
    perPage: number;
    prevPage: number;
    totalCount: number;
}

- SortItem : {
    field : string,
    type : number ( 0 | 1)
}


Inputs (Properties)

 - columns (Row[])
 - list (Item[])
 - meta(Meta)

Outputs (Events)
    
 - handleTurnPage - EventEmitter<number>()
 - handleView - EventEmitter<number>()
 - handleEdit - EventEmitter<number>()
 - handleDelete - EventEmitter<number>()
 - handleSorting - EventEmitter<SortItem>()
 - handleChangeItemsPerPage - EventEmitter<number>()s/bootstrap.css",