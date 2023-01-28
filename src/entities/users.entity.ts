import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({
    name: 'Users'
})
export class Users {
    @PrimaryGeneratedColumn('uuid',{
        name: 'employee_id'
    })
    id: string

    @Column({
        name: 'first_name'
    })
    first_name: string

    @Column({
        name: 'last_name'
    })
    last_name: string

    @Column()
    age: number
}