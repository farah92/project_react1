import React, { Component } from 'react';
import './App.css';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.maintainAspectRatio = false

class Grafik extends Component {
  render() {
    const data = {
      labels: [
        'Buku tulis', 'Buku folio', 
        'Kertas HVS', 'Kertas label', 
        'Tipe-ex', 'Jangka', 
        'Spidol', 'Stabilo', 
        'Pensil', 'Crayon', 
        'Lem besi', 'Amplop coklat'
      ],
      datasets: [
        {
          label: 'Stock Barang ATK 2019',
          data: [100,50,63,44,88,62,55,62,74,75,51,98],
          fill: true,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }
    const container = {height: 500}
    return (
      <div className="App">
        
        <article className="canvas-container" style={container}>
          <Bar data={data} />
        </article>
      </div>
    );
  }
}

export default Grafik;