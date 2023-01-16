import { Table, TableContent } from "Components"

export const View = () => {
    return (
        <Table
            listLabel={[
                {id: 'provinsi', name: 'Provinsi'},
                {id: 'satuan', name: 'Satuan'},
                {id: 'FullBoard Luar Kota', name: 'FullBoard Luar Kota'},
                {id: 'FullBoard Dalam Kota', name: 'FullBoard Dalam Kota'},
                {id: 'Full Day / Half Day Dalam Kota', name: 'Full Day / Half Day Dalam Kota'},
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