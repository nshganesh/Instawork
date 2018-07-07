import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

class UserDialog extends React.Component {


  submit = (e) => {
    e.preventDefault();

    const { handleSubmit, formData } = this.props;
    handleSubmit(formData);
  };

  render() {

    const { dialogUtil, handleClose, onFormChange, errors, formData, handleDelete } = this.props;


    const actions = dialogUtil.showDelete ?
      [
        <RaisedButton label="Delete" secondary={true} onClick={(e) => handleDelete(formData.id)}
                      style={{float: 'left', margin: '10px'}} />,
        <RaisedButton label="Submit" primary={true} onClick={(e) => this.submit(e)} style={{ margin: '10px'}} />,
      ] :
      [
        <RaisedButton label="Submit" primary={true} onClick={(e) => this.submit(e)} style={{ margin: '10px'}} />,
      ];

    return (
      <Dialog
          title={
            <div>
              <ContentClear style={{ cursor: 'pointer', position: 'relative', float: 'right' }} onClick={() => handleClose()} />
              <h4 style={{ marginTop: '0px', marginBottom: '0px' }}>{dialogUtil.title}</h4>
              <small>{dialogUtil.subTitle}</small><br/>
              <small style={{ color: '#F00'}}>{errors}</small>
            </div>
          }
          actions={actions}
          modal={false}
          open={dialogUtil.modalOpen}
          onRequestClose={handleClose}
          autoScrollBodyContent={true}
      >
        <div style={{ padding: '10px'}}>

          <div style={{marginTop:'10px', marginBottom: '10px'}}>
            <b>Info</b>
          </div>

          <TextField
              autoFocus={true}
              hintText="First name"
              onChange={(e) => onFormChange("firstName", e.target.value)}
              value={formData.firstName}
          /><br />
          <br />
          <TextField
              hintText="Location"
              onChange={(e) => onFormChange("location", e.target.value)}
              value={formData.location}
          /><br />
          <TextField
              hintText="Email"
              onChange={(e) => onFormChange("email", e.target.value)}
              value={formData.email}
          /><br />
          <TextField
              hintText="Contact No"
              onChange={(e) => onFormChange("contactNo", e.target.value)}
              value={formData.contactNo}
          /><br />

          <div style={{ marginTop: '10px', marginBottom: '10px'}}>
            <b>Role</b>
          </div>
          <RadioButtonGroup onChange={(e, v) => onFormChange("isAdmin", v)} name="role" labelPosition="left" defaultSelected={formData.isAdmin}>
            <RadioButton
                value="0"
                label="Regular - Can't delete members"
                style={{marginBottom: 16}} />
            <RadioButton
                value="1"
                label="Admin - Can delete members"
                style={{marginBottom: 16}}
            />
          </RadioButtonGroup>
        </div>
      </Dialog>
    );
  }
}

UserDialog.propTypes = {
  dialogUtil: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
  formData: PropTypes.object,
  handleDelete: PropTypes.func
};

export default UserDialog;
