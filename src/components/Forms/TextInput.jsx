import PropsTypes from "prop-types";

function TextInput({ type = "text", name, register, message, inputClassName = "" }) {
    return (
        <div >
            <input type={type} name={name} {...register} className= {inputClassName} />
            {message && <p>{message}</p>}
        </div>
    );
}

TextInput.propTypes = {
    type: PropsTypes.string,
    name: PropsTypes.string,
    message: PropsTypes.string,
    register: PropsTypes.object,
    inputClassName: PropsTypes.string,

};

export default TextInput;
