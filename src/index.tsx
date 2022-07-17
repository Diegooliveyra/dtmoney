import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {
    transactions: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela webpage',
          type: 'deposit',
          category: 'Dev',
          amount: 4500,
          createdAt: new Date('2021-03-15 08:00:00')
        },

        {
          id: 2,
          title: 'Supermercado',
          type: 'withdraw',
          category: 'Compras',
          amount: 1200,
          createdAt: new Date('2021-03-15 13:00:00')
        }
      ]
    });
  },
  routes(){

    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

