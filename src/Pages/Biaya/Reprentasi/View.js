import { Table, TableContent } from "Components"

export const View = () => {
    return (
        <Table
            listLabel={[
                {id: 'urain', name: 'Uraian'},
                {id: 'satuan', name: 'Satuan'},
                {id: 'luar_kota', name: 'Luar Kota'},
                {id: 'dalam', name: 'Dalam Kota ( > 8 jam )'},
                {id: 'aksi', name: 'Aksi'},
            ]}
        >
            <tr>
                <TableContent>Jawa Barat</TableContent>
                <TableContent>OH</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>Action</TableContent>
            </tr>
        </Table>
    )
}