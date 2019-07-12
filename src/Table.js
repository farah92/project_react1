import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'No',
        field: 'no',
        sort: 'asc',
        width: 5
      },
      {
        label: 'Product ID',
        field: 'productID',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Product Name',
        field: 'productName',
        sort: 'asc',
        width: 100
      },
       {
        label: 'Harga',
        field: 'harga',
        sort: 'asc',
        width: 100
      },
       {
        label: 'Satuan',
        field: 'satuan',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Qty In',
        field: 'in',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Qty Out',
        field: 'out',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Stock',
        field: 'total',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        no            : '1',
        productID     : 'ATK01',
        productName   : 'Buku Tulis',
        harga         : '2500',
        satuan        : 'Pcs',
        qty_in        : '200',
        qty_out       : '100',
        total         : '100'
      },
      {
        no            : '2',
        productID     : 'ATK02',
        productName   : 'Buku Folio',
        harga         : '1500',
        satuan        : 'Pcs',
        qty_in        : '125',
        qty_out       : '75',
        total         : '50'
      },
      {
        no            : '3',
        productID     : 'ATK03',
        productName   : 'Kertas HVS',
        harga         : '30000',
        satuan        : 'Pack',
        qty_in        : '63',
        qty_out       : '0',
        total         : '63'
      },
      {
        no            : '4',
        productID     : 'ATK04',
        productName   : 'Kertas Label',
        harga         : '9000',
        satuan        : 'Pack',
        qty_in        : '44',
        qty_out       : '0',
        total         : '44'
      },
      {
        no            : '5',
        productID     : 'ATK05',
        productName   : 'Tip-ex',
        harga         : '2500',
        satuan        : 'Pcs',
        qty_in        : '100',
        qty_out       : '12',
        total         : '88'
      },
      {
        no            : '6',
        productID     : 'ATK06',
        productName   : 'Jangka',
        harga         : '2000',
        satuan        : 'Pcs',
        qty_in        : '65',
        qty_out       : '3',
        total         : '62'
      },
      {
        no            : '7',
        productID     : 'ATK07',
        productName   : 'Spidol',
        harga         : '2500',
        satuan        : 'Pcs',
        qty_in        : '60',
        qty_out       : '5',
        total         : '55'
      },
      {
        no            : '8',
        productID     : 'ATK08',
        productName   : 'Stabilo',
        harga         : '10000',
        satuan        : 'Pcs',
        qty_in        : '70',
        qty_out       : '8',
        total         : '62'
      },
      {
        no            : '9',
        productID     : 'ATK09',
        productName   : 'Pensil',
        harga         : '1000',
        satuan        : 'Pcs',
        qty_in        : '74',
        qty_out       : '0',
        total         : '74'
      },
      {
        no            : '10',
        productID     : 'ATK010',
        productName   : 'Crayon',
        harga         : '10000',
        satuan        : 'Pcs',
        qty_in        : '100',
        qty_out       : '25',
        total         : '75'
      },
      {
        no            : '11',
        productID     : 'ATK011',
        productName   : 'Lem Besi',
        harga         : '25000',
        satuan        : 'Pcs',
        qty_in        : '60',
        qty_out       : '9',
        total         : '51'
      },
      {
        no            : '12',
        productID     : 'ATK012',
        productName   : 'Amplop Coklat',
        harga         : '3000',
        satuan        : 'Pcs',
        qty_in        : '150',
        qty_out       : '52',
        total         : '98'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default DatatablePage;
