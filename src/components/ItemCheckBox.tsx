interface PropsButtonsCheckBox {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkboxes: string[]
}
export const ItemCheckBox = ({ checkboxes, handleChange }: PropsButtonsCheckBox) => {
    return (
        <div className="item-opt">
            <h4 className="title-opt">Buttons to controls</h4>
            <div className="container-inputs w-100">
                {
                    checkboxes.map(checkbox => (
                        <CheckBoxCtrl key={checkbox} handleChange={handleChange} id={checkbox} />
                    ))
                }
            </div>
        </div>
    )
}


interface PropsCheckBoxCtrl {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

export const CheckBoxCtrl = ({ handleChange, id }: PropsCheckBoxCtrl) => {
    return (
        <div className="control">
            <input type="checkbox" name="buttonsControl" onChange={handleChange} id={id} />
            <label htmlFor={id}> {id} </label>
        </div>
    )
}