import PropTypes from 'prop-types'
import { UserItem } from './user-item'

export const UserList = ({ users }) => (
	<>
		<h3>User List</h3>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Surname</th>
					<th>Login</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<UserItem key={index} user={user} />
				))}
			</tbody>
		</table>
	</>
)

UserList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
	})).isRequired,
}
