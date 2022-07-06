interface Props {
    children: JSX.Element | JSX.Element[];
    title: string;
}

export const ItemCustom = ({ children, title }: Props) => {
    return (
        <div className="item-opt">
            <h4 className="title-opt">{title}</h4>
            <div className="container-inputs">
                {children}
            </div>
        </div>
    )
}