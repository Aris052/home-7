import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'

const schema = yup.object().shape({
	name: yup.string().required('Please fill your name'),
	surname: yup.string().required('Please fill your surname'),
	login: yup.string().email('Invalid email format').required('Please fill your login'),
	age: yup.number().positive('Age must be positive').integer('Age must be an integer').required('Please fill your age'),
	password: yup.string().min(8, 'Password must be at least 8 characters').required('Please fill your password'),
})

export const AddUser = ({ onAddUser }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		resolver: yupResolver(schema),
	})

	const handleAdd = data => {
		console.log(data)
		toast.success('User added successfully!')
		reset()
		onAddUser(data)
	}

	return (
		<>
			<h3>Add User</h3>
			<form onSubmit={handleSubmit(handleAdd)}>
				{errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
				<input placeholder="Name" {...register("name")} />

				{errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
				<input placeholder="Surname" {...register("surname")} />

				{errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}
				<input placeholder="Login" {...register("login")} />

				{errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
				<input placeholder="Age" type="number" {...register("age")} />

				{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
				<input placeholder="Password" type="password" {...register("password")} />

				<br />
				<button type="submit">Save</button>
			</form>
		</>
	)
}
