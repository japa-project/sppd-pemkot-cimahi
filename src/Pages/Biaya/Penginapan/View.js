import { Table, TableContent } from "Components"

export const View = () => {
    return (
        <Table
            listLabel={[
                {id: 'provinsi', name: 'Provinsi'},
                {id: 'satuan', name: 'Satuan'},
                {id: 'Pejabat / Eselon I', name: 'Pejabat / Eselon I'},
                {id: 'Pejabat / Eselon II', name: 'Pejabat / Eselon II'},
                {id: 'Eselon III / Gol IV', name: 'Eselon III / Gol IV'},
                {id: 'Eselon IV / Gol III', name: 'Eselon IV / Gol III'},
                {id: 'Gol I / Gol II', name: 'Gol I / Gol II'},
                {id: 'aksi', name: 'Aksi'},
            ]}
        >
            <tr>
                <TableContent>Jawa Barat</TableContent>
                <TableContent>OH</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>250.000</TableContent>
                <TableContent>Action</TableContent>
            </tr>
        </Table>
    )
}