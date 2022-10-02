import { useCallback, useEffect, useState } from "react";
import { Input } from '../../components/basic'
import { API } from '../../api'

const defaultState = {
  name        : '',
  description : '',
  price       : '',
  availability: false,
  imageUrl    : '',
  type        : 'item'
}

export const Admin = () => {
  const [hasAccess, setHasAccess] = useState(null)
  const [error, setError] = useState(null)
  const [state, setState] = useState(defaultState)

  useEffect(() => {
    const login = async password => {
      setHasAccess(await API.login(password))
    }

    const password = prompt("Введіть пароль", "");

    login(password)
  }, []);

  const validate = ({ name, description, price, imageUrl }) => {
    try {
      new URL(imageUrl);
    } catch {
      setError('Invalid URL')

      return false
    }

    return name && description && price && imageUrl && type
  }

  const saveProduct = useCallback(async state => {
    try {
      await API.saveProduct(state)

      setState(defaultState)
    } catch (error) {
      setError(error.message)
    }
  }, [setError])

  const onClick = useCallback(async () => {
    const isValid = validate(state);

    if (isValid) {
      await saveProduct(state);
    }
  }, [saveProduct, state]);

  if (hasAccess === null) {
    return null
  }

  if (!hasAccess) {
    return <div className="bg">Пароль не вірний</div>
  }

  const onChange = (e, field) => setState(state => ({ ...state, [field]: e.target.value }))
  const onCheckboxChange = (e) => setState(state => ({ ...state, availability: e.target.checked }))

  const { name, description, price, availability, imageUrl, type } = state

  return (
    <div className="bg">
      { error && <span> { error } </span> }
      <div className="wrapper">
        <Input className="primary-text" label={ 'Назва' } value={ name } onChange={ e => onChange(e, 'name') }/>
        <Input label={ 'Опис' } value={ description } onChange={ e => onChange(e, 'description') }/>
        <Input label={ 'Ціна' } value={ price } onChange={ e => onChange(e, 'price') }/>
        <Input type="checkbox" label={ 'Наявність' } value={ availability } onChange={ onCheckboxChange }/>
        <Input label={ 'Посилання на фото' } value={ imageUrl } onChange={ e => onChange(e, 'imageUrl') }/>
        <Input label={ 'Тип' } value={ type } onChange={ e => onChange(e, 'type') }/>
      </div>
      <div>
        <button onClick={ onClick }>Додати товар</button>
      </div>
    </div>
  )
};