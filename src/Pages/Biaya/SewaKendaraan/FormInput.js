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
                column="4"
                gap="4"
                className="mt-8"
            >
                <TextInput 
                    withLabel
                    label="Roda 4"
                    placeholder="Roda 4"
                />
                <TextInput 
                    withLabel
                    label="Roda 6 / Bis Kecil"
                    placeholder="Roda 6 / Bis Kecil"
                />
                <TextInput 
                    withLabel
                    label="Roda 6 / Bis Besar"
                    placeholder="Roda 6 / Bis Besar"
                />
                <TextInput 
                    withLabel
                    label="Taxi"
                    placeholder="Taxi"
                />
            </SectionForm>

            <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
                <Button className="w-full md:w-60 lg:w-60" backgroundColor="bg-orange-500">Simpan</Button>
            </div>
        </WrapperForm>
    )
}