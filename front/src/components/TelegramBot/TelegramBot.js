import React, {useState} from "react";
import { useForm } from "react-hook-form";
import "./../../style/telegramBot.css";
import "./../../media/mediaTelegramForm.css";

export default function TelegramBot() {
	const { register, handleSubmit, reset, formState: {errors} } = useForm();

	const [hide, setHide] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const onSubmit = (data) => {
		//alert(JSON.stringify(data));
		fetch("/api/sendTelegram/",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			}
		)
			.then(res => {
				//console.log("Result:", res);
				return res.json();
			})
			.then(() => {
				setShowModal(true);
			})
			.catch(err => {
				console.log(err);
			});
		reset({fullName: "", tel: ""});
	};
	console.log(errors);
	return (
		<div className={`container-fluid formFluid ${hide ? 'hide' : 'show'} ` } >
			<div className={`modal ${showModal ? 'showModal' : 'hideModal'} `}>Дякуємо за звернення </div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="button" className="close"  onClick={() => setHide(true)  }  />

				<h1>Залиште свої дані</h1>

				<input
					type="text" placeholder="Введіть ім'я та прізвище"
					{...register("fullName", { required: true, maxLength: 80,
						minLength:10,
						pattern: /^[А-Яа-яЁё_ ]*$/})}
				/>
                {errors.fullName && errors.fullName.type === "minLength" &&
                <p className="formErr">Ваше ім'я містить менше 10 символів</p>}
                {errors.fullName && errors.fullName.type === "maxLength" &&
                <p className="formErr">Перевищення максимальної довжини</p>}
                {errors.fullName && errors.fullName.type === "pattern" &&
                <p className="formErr">Тільки літери кирилиці</p>}


                <input
                    type="tel" placeholder="Номер телефону"
                    {...register("tel", {
                        required: true,
                        pattern:  /^\+380\d{9}$/
                    })}
                />
                {errors.tel && errors.tel.type === "pattern" &&
                <p className="formErr">Неправильний номер телефону. Наприклад +380123456789</p>}
				<input type="submit" />
			</form>
		</div>
	);

}


