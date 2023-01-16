import { Button, SectionForm, TextInput, WrapperForm } from "Components"

export const FormInput = () => {
    return (
        <WrapperForm
            title="Tambah Data Biaya Representasi SPPD"
        >

            <SectionForm
                column="1"
            >
                <TextInput 
                    withLabel
                    label="Uraian"
                    placeholder="Uraian"
                />
            </SectionForm>

            <SectionForm
                column="3"
                gap="4"
                className="mt-8"
            >
                <TextInput 
                    withLabel
                    label="Satuan"
                    placeholder="Satuan"
                />
                <TextInput 
                    withLabel
                    label="Luar Kota"
                    placeholder="Luar Kota"
                />
                <TextInput 
                    withLabel
                    label="Dalam Kota"
                    placeholder="Dalam Kota"
                />
            </SectionForm>

            <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
                <Button className="w-full md:w-60 lg:w-60" backgroundColor="bg-orange-500">Simpan</Button>
            </div>
        </WrapperForm>
    )
}