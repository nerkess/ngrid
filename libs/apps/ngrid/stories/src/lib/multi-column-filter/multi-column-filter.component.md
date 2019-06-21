# Multi Column Filter

<docsi-mat-example-with-source title="Multi Column Filter" contentClass="table-height-300 mat-elevation-z7" [query]="[{section: 'ex-1'}]">
  <!--@pebula-example:ex-1-->
  <div fxLayout="row" fxLayoutGap="16px" style="padding: 8px">
    <mat-form-field  appearance="outline">
      <mat-label>Name</mat-label>
      <input matInput (keyup)="doFilter(inputValue = $event.target.value)">
      <mat-icon matPrefix>search</mat-icon>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Gender</mat-label>
      <mat-select (selectionChange)="doFilter(selectValue = $event.value)">
        <mat-option>None</mat-option>
        <mat-option *ngFor="let g of ['Male', 'Female']" [value]="g">{{g}}</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <pbl-ngrid blockUi [dataSource]="ds" [columns]="columns"></pbl-ngrid>
  <!--@pebula-example:ex-1-->
</docsi-mat-example-with-source>