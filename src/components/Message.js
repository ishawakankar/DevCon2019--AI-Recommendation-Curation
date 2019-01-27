import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class Message extends React.Component {

  render() {
    return (
      <div >
        <Modal
          open={this.props.messageOpen}
          onClose={this.props.handleClose}
          basic
          size='small'
        >
          <Header icon='browser' content={this.props.message} />
          <Modal.Actions>
            <Button color='green' onClick={this.props.handleClose} inverted>
              <Icon name='checkmark' /> Okay
          </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Message;
