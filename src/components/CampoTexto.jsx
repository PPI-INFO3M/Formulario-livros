function CampoTexto({ label, name, ...inputProps }) {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input id="name" name="name" {...inputProps} />
        </div>
    )
};

export default CampoTexto