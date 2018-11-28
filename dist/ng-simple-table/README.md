# ng-simple-table

For now u have to install font-awesome and bootstrap

`npm install font-awesome --save`

Have to be included 

`
"node_modules/font-awesome/scss/font-awesome.scss"
`

In root 

`import { NgSimpleTableModule } from 'ng-simple-table';`

In template

```javascript
<smt-ng-simple-table></smt-ng-simple-table>
```

Example

![alt text](https://raw.githubusercontent.com/SerhiiM/ng-simple-table/master/src/demo-screen.png "Logo Title Text 1")


Interfaces

- Row : {
    titleKey: string,
    withSorting: boolean,
    rowKey: string,
    withAction: boolean,
    withSelection: boolean
}

- Item : {
    id: number,
    checkbox_disabled: boolean,
    checkbox_checked: boolean,
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
 - pagination(boolean)
 
Outputs (Events)
    
 - handleTurnPage - EventEmitter\<number>()
 - handleView - EventEmitter\<number>()
 - handleEdit - EventEmitter\<number>()
 - handleDelete - EventEmitter\<number>()
 - handleSorting - EventEmitter\<SortItem>()
 - handleChangeItemsPerPage - EventEmitter\<number>()
 - handleToggleCheckBox - EventEmitter\<Item>()