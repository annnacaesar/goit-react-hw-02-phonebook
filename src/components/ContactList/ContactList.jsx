import { Item, ButtonClose, Contact, List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
	<List>
		{contacts.map(({ id, name, number }) => {
			return (
				<Item key={id}>
					<Contact>
						{name}: {number}
					</Contact>
					<ButtonClose type="button" onClick={()=> onDeleteContact(id)}>x</ButtonClose>
				</Item>
			);
		})}
	</List>
);

export default ContactList;
