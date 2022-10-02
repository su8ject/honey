import Backendless from "backendless";
import { useEffect, useState } from "react";

export const Admin = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const APP_ID = "2B94683A-983D-7411-FF1F-98645217D300";
  const API_KEY = "E187994D-4870-43B7-94A7-1E25A72663B8";
  Backendless.initApp(APP_ID, API_KEY);

  const correctnesscheck = () => {
    if (name === "" || description === "" || price === "" || imageUrl === "") {
      return;
    }
  };

  const reset = () => {
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
  };

  const addProduct = (type) => {
    var objToSave = {
      name: name,
      description: description,
      price: price,
      availability: availability,
      imageUrl: imageUrl,
    };
    Backendless.Data.of(type)
      .save(objToSave)
      .then(function (object) {
        console.log("Object has been saved");
        return object;
      })
      .catch(function (error) {
        console.log("Error " + error.message);
        throw error;
      });
  };

  const handlerButton = (type) => {
    correctnesscheck();
    addProduct(type);
    reset();
  };

  useEffect(() => {
    const numb = prompt("Введіть пароль", "");
    setPassword(numb);
  }, []);

  const toggleAvailability = () => {
    availability ? setAvailability(false) : setAvailability(true);
  };

  return password === "111" ? (
    <div className="bg">
      <div className="wrapper">
        <p className="primary-text">Назва</p>
        <input value={name} onInput={(e) => setName(e.target.value)} />
        <p className="primary-text">Опис</p>
        <input
          value={description}
          onInput={(e) => setDescription(e.target.value)}
        />
        <p className="primary-text">Ціна</p>
        <input value={price} onInput={(e) => setPrice(e.target.value)} />
        <p className="primary-text">Наявність</p>
        <input type="checkbox" onInput={toggleAvailability} />
        <p className="primary-text">Посилання на фото</p>
        <input value={imageUrl} onInput={(e) => setImageUrl(e.target.value)} />
      </div>
      <div id="gallery">
        <button onClick={() => handlerButton("item")}>Додати продукт</button>
        <button onClick={() => handlerButton("tools")}>Додати реманент</button>
      </div>
    </div>
  ) : (
    <div className="bg">Пароль не вірний</div>
  );
};
