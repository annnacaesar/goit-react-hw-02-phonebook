

const Filter = ({filter, onChange}) => (
	<label>
		<input type="text" value={filter} onChange={onChange} /> Find contacts by name
	</label>
)

export default Filter;
