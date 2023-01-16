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

            <div className="mt-4">
                <TextInput 
                    withLabel
                    label="Pejabat/Eselon I"
                    placeholder="Pejabat/Eselon I"
                    wrapperClassName="mt-4"
                />
                <TextInput 
                    withLabel
                    label="Pejabat/Eselon II"
                    placeholder="Pejabat/Eselon II"
                    wrapperClassName="mt-4"
                />
                <TextInput 
                    withLabel
                    label="Eselon III/ Gol IV"
                    placeholder="Eselon III/ Gol IV"
                    wrapperClassName="mt-4"
                />
                <TextInput 
                    withLabel
                    label="Eselon IV/ Gol III"
                    placeholder="Eselon IV/ Gol III"
                    wrapperClassName="mt-4"
                />
                <TextInput 
                    withLabel
                    label="Eselon I/ Gol II"
                    placeholder="Eselon I/ Gol II"
                    wrapperClassName="mt-4"
                />
            </div>

            <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
                <Button className="w-full md:w-60 lg:w-60" backgroundColor="bg-orange-500">Simpan</Button>
            </div>
        </WrapperForm>
    )
}