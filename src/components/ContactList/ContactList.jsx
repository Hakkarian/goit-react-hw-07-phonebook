import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/tasks/cont-selectors';
import ContactItem from './ContactItem';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/tasks/taskoperations';
import Spinner from 'components/Spinner';
import { useGetAllContactsQuery } from 'redux/tasks/cont-slice';

const ContactList = () => {
  // const contacts = useSelector(selectFilteredContacts);
  const {data} = useGetAllContactsQuery()
    const dispatch = useDispatch();
  console.log("data", data)


    // useEffect(() => {
    //     dispatch(fetchAllContacts())
    // }, [dispatch])
    //dispatch(fetchAddContact)
    //dispatch(fetchDeleteContact(id))

    return (
      <>
        <Spinner />
        {!!data && <ContactUlCss>
          {data.map(({ id, name, phone }) => (
            <ContactItemCss key={id}>
              <ContactItem id={id} name={name} number={phone} />
            </ContactItemCss>
          ))}
        </ContactUlCss>}
        <Spinner />
      </>
    );
}


export default ContactList;