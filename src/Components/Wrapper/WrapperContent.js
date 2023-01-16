import { TextInput } from "Components/TextInput"

export const WrapperContent = ({children, withSearchInput = false}) => {
    return (
        <div className="wrapper-content">
            {
                withSearchInput && (
                    <TextInput 
                        placeholder="Cari Data"
                    />
                )
            }

            {children}
        </div>
    )
}