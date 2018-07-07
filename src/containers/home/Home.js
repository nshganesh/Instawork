import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as dialogActions from "../../actions/dialogActionCreators";
import {makeDialogUtilSelector, makeFormErrorSelector, makeUserFormDataSelector} from "../../selectors/dialogSelector";
import {makeUsersSelector} from "../../selectors/usersSelector";
import {Card, CardTitle} from 'material-ui/Card';
import {List} from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UserDialog from "./UserDialog";
import {UserItem} from "../../components/user/UserItem";

class Home extends React.Component {

  render() {

    const { handleModalToggle, handleDelete, handleSubmit, handleEdit, handleAdd, dialogUtil, users, onUserFormChange, formErrors, userFormData } = this.props;
    return (
        <Card style={{ margin: 'auto', maxWidth: '600px', position: 'absolute',
          top:'20px', bottom: '20px', left: '20px', right: '20px'
        }} >


          <CardTitle
              title={
                <div>
                  <ContentAdd style={{ color: "#00F", padding: '10px', cursor: 'pointer', position: 'relative', float: 'right'}} onClick={() => handleAdd(users.length+1)} />
                  <h4 style={{ marginTop: '0px', marginBottom: '0px' }}>Team members</h4>
                  <small>You have {users.length} team members</small>
                </div>
              } />

          <List>

            {
              users.map((user) =>
                  <UserItem key={user.id} user={user} onItemClick={handleEdit} />)
            }

          </List>

          <UserDialog
              handleClose={handleModalToggle}
              handleSubmit={handleSubmit}
              dialogUtil={dialogUtil}
              onFormChange={onUserFormChange}
              errors={formErrors}
              formData={userFormData}
              handleDelete={handleDelete}
          />

        </Card>
    );
  }

}

Home.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onUserFormChange: PropTypes.func.isRequired,
  dialogUtil: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  formErrors: PropTypes.string,
  userFormData: PropTypes.object,
  handleEdit: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  dialogUtil: makeDialogUtilSelector(state),
  users: makeUsersSelector(state),
  formErrors: makeFormErrorSelector(state),
  userFormData: makeUserFormDataSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  handleModalToggle: () => {
    dispatch(dialogActions.toggleUserModal());
    dispatch(dialogActions.clearFormData());
  },
  handleAdd: (id) => {
    dispatch(dialogActions.toggleUserModal());
    dispatch(dialogActions.createFormData(id));
  },
  handleSubmit: (user) => dispatch(dialogActions.validateUserFormStart(user)),
  onUserFormChange: (key, value) => dispatch(dialogActions.changeInUserForm(key, value)),
  handleEdit: (user) => {
    dispatch(dialogActions.toggleUserModal());
    dispatch(dialogActions.prefillFormData(user));
  },
  handleDelete: (id) => {
    dispatch(dialogActions.deleteUser(id));
    dispatch(dialogActions.toggleUserModal());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
