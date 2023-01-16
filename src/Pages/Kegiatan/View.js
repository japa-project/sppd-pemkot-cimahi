import { Table, TableContent } from "Components"

export const View = () => {
    return (
        <Table
            listLabel={[
                {id: 'keperluan', name: 'Keperluan'},
                {id: 'no_surat', name: 'No Surat'},
                {id: 'lokasi', name: 'Lokasi'},
                {id: 'tgl_berangkat', name: 'Tgl Berangkat'},
                {id: 'tgl_mulai', name: 'Tgl Mulai'},
                {id: 'tgl_selesai', name: 'Tgl Selesai'},
                {id: 'aksi', name: 'Aksi'},
            ]}
        >
            <tr>
                <TableContent>Rakor Anggaran</TableContent>
                <TableContent>005-UND-PROV</TableContent>
                <TableContent>Kantor Gubernur</TableContent>
                <TableContent>05-Jan-2023</TableContent>
                <TableContent>05-Jan-2023</TableContent>
                <TableContent>05-Jan-2023</TableContent>
                <TableContent>Action</TableContent>
            </tr>
        </Table>
    )
}