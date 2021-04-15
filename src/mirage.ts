import { createServer, Model } from 'miragejs'

export function makeServer(){
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Website',
            type: 'income',
            amount: 12000,
            category: 'Work',
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title: 'Rent',
            type: 'expense',
            amount: 8000,
            category: 'Home',
            createdAt: new Date('2021-02-14 09:00:00')
          },
        ]
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
      
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', {...data, createdAt: new Date()})
      }
      )
    }
  })
} 
