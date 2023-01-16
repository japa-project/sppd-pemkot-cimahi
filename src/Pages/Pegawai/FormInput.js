import { Button, InputSelect, SectionForm, TextInput, WrapperForm } from "Components"

export const FormInput = () => {
    return (
        <WrapperForm
            title="Tambah Data Biaya Harian SPPD"
        >

            <SectionForm
                column="1"
            >
                <TextInput 
                    withLabel
                    label="Nama"
                    placeholder="Nama Pegawai"
                />

                <TextInput 
                    withLabel
                    label="NIP"
                    placeholder="NIP"
                />

            </SectionForm>

            <SectionForm
                gap="4"
                column="3"
                className="mt-8"
            >
                <InputSelect 
                    withLabel
                    label="Jabatan"
                />

                <InputSelect 
                    withLabel
                    label="Pangkat"
                />

                <InputSelect 
                    withLabel
                    label="Gol"
                />
            </SectionForm>

            <div className="mt-8">
                <TextInput 
                    withLabel
                    label="Kontak"
                    placeholder="Kontak"
                />
            </div>

            <SectionForm
                column="3"
                gap="4"
                className="mt-8"
            >
                <TextInput 
                    withLabel
                    label="Nama Bank"
                    placeholder="Nama Bank"
                />
                <TextInput 
                    withLabel
                    label="No Rek"
                    placeholder="No Rek"
                />
                <TextInput 
                    withLabel
                    label="Nama Rek"
                    placeholder="Nama Rek"
                />
            </SectionForm>

            <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
                <Button className="w-full md:w-60 lg:w-60" backgroundColor="bg-orange-500">Simpan</Button>
            </div>
        </WrapperForm>
    )
}