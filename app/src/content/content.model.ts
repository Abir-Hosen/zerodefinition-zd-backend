import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Content extends Model {

    // @Column
    // id: number;
    @Column
    name: string;
    @Column
    description: string;
    @Column
    url: string;
    @Column({ defaultValue: true })
    isActive: boolean;
}