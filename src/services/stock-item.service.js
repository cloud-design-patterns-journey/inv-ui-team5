import axios from "axios";

export class StockItemService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || '/api';
    }

    async listStockItems() {
        const TOKEN = localStorage.getItem("token")
        return axios({
            url: '/api/graphql',
            method: "POST",
            headers: { Authorization: `Bearer ${TOKEN}`},
            data: {
                query: `
                {
                    stockItems {
                        id
                        manufacturer
                        name
                        picture
                        stock
                        unitPrice
                    }
                }
                `
            }
        }).then(response => response.data.data.stockItems);
    }
}