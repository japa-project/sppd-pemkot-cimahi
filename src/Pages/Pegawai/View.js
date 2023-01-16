import { Table, TableContent } from "Components"

export const View = () => {
    return (
        <section>
            <Table
                listLabel={[
                    {id: 'nama', name: 'Nama'},
                    {id: 'nip', name: 'NIP'},
                    {id: 'jabatan', name: 'Jabatan'},
                    {id: 'pangkat', name: 'Pangkat'},
                    {id: 'gol', name: 'Gol'},
                    {id: 'kontak', name: 'Kontak'},
                    {id: 'aksi', name: 'Aksi'},
                ]}
            >
                <tr>
                    <TableContent>Udin</TableContent>
                    <TableContent>2121313</TableContent>
                    <TableContent>Bintang</TableContent>
                    <TableContent>Penata R</TableContent>
                    <TableContent>IVV</TableContent>
                    <TableContent>02829393</TableContent>
                    <TableContent>Action</TableContent>
                </tr>
            </Table>
        </section>
    )
}