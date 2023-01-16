import { Button, InputSelect, SectionForm, TextInput, WrapperForm } from "Components"

export const FormInput = () => {
    return (
        <WrapperForm
            title="Tambah Data Biaya Harian SPPD"
        >

            <SectionForm
                column="2"
                gap="4"
            >
                <InputSelect 
                    withLabel
                    label="Provinsi"
                />

                <TextInput 
                    withLabel
                    label="Satuan"
                    placeholder="Satuan"
                />
            </SectionForm>

            <SectionForm 
                column="3"
                gap="4"
                className="mt-4"
            >
                <TextInput 
                    withLabel
                    label="FullBoard Luar Kota"
                    placeholder="FullBoard Luar Kota"
                />
                <TextInput 
                    withLabel
                    label="FullBoard Dalam Kota"
                    placeholder="FullBoard Dalam Kota"
                />
                <TextInput 
                    withLabel
                    label="Full / Half Day Dalam Kota"
                    placeholder="Full / Half Day Dalam Kota"
                />
            </SectionForm>

            <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
                <Button className="w-full md:w-60 lg:w-60" backgroundColor="bg-orange-500">Simpan</Button>
            </div>
        </WrapperForm>
    )
}