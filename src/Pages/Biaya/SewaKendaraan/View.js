import { Table, TableContent } from "Components"

export const View = () => {
    return (
        <Table
            listLabel={[
                {id: 'provinsi', name: 'Provinsi'},
                {id: 'satuan', name: 'Satuan'},
                {id: 'roda_empat', name: 'Roda Empat'},
                {id: 'Roda 6 / Bus Sedang', name: 'Roda 6 / Bus Sedang'},
                {id: 'Roda6 / Bus Besar', name: 'Roda6 / Bus Besar'},
                {id: 'aksi', name: 'Aksi'},
            ]}
        >
            <tr>
                <TableContent>Jawa Barat</TableContent>
                <TableContent>OH</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>Action</TableContent>
            </tr>
        </Table>
    )
}