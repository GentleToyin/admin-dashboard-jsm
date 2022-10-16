import React, { useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Filter,
  Edit,
  Inject,
  Search,
  Toolbar,
  Sort,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          allowEditOnDblClick: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
