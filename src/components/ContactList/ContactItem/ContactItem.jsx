import toastr from 'toastr';
import { ButtonCss } from 'components/App/App.styled';
import Spinner from 'components/Spinner';
import { SpinnerCss } from 'components/Spinner/Spinner.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/tasks/cont-selectors';
import { rootSlice, useDeleteContactMutation } from 'redux/tasks/cont-slice';
import { fetchdDeleteContact } from 'redux/tasks/taskoperations';
import { ContactTextCss } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [ deleteContact, {isLoading} ] = useDeleteContactMutation();
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = (id) => {
    deleteContact(id);
    toastr.success("Deleted!")
  }

  return <>
    <ContactTextCss>{name}: {number}</ContactTextCss>
    <ButtonCss type='button' onClick={() => handleDeleteContact(id)} disabled={isLoading}>Delete</ButtonCss>
  </>
}


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

}

export default ContactItem;