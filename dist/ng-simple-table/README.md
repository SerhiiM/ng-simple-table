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

in template

---
><smt-ng-simple-table
  [list]="[
    {id: 1, name:'Dan'},
    {id: 2, name:'Kate'}
  ]"
  [columns]="[
    {titleKey:'Name', withSorting: true, rowKey: 'name'},
    {titleKey:'Actions', withSorting: false, rowKey: '', withActionCol: true}]"
></smt-ng-simple-table>
---