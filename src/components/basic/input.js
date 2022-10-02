export const Input = ({ label, value, type, onChange, labelClasses, inputClasses, ...props }) => {
  const InputComponent = type === 'checkbox'
    ? <input className={ inputClasses } checked={ value } type={ type } onChange={ onChange } { ...props } />
    : <input className={ inputClasses } value={ value } onChange={ onChange }/>

  return (
    <label className={ labelClasses }>
      { label }
      { InputComponent }
    </label>
  )
}