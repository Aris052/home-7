import PropTypes from 'prop-types'

export const UserItem = ({ user }) => (
	<tr>
		<td>{user.name}</td>
		<td>{user.surname}</td>
		<td>{user.login}</td>
		<td>{user.age}</td>
	</tr>
)

UserItem.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
	}).isRequired,
}
