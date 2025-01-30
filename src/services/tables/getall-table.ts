import { IPOS_BASE_URL } from "../../utils/connection";
import axios from "axios";
import { ITable } from "../../interfaces/getalltable-interface";

export class GetAllTableService {

    static async GetAllTable(id: string, page: number, limit: number): Promise<ITable> {
        try {
            const res = await axios.get(`${IPOS_BASE_URL}/table/all/${id}`, {
                params: {
                    page: page,
                    limit: limit
                }
            });
            return res.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}