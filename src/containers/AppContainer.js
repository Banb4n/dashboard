/* @flow */
import { Container } from 'unstated';
import db from '../backend/db'

type AppState = {
    user: ?Object
};
  
class AppContainer extends Container<AppState> {
    state = {
        user: db.users[0]
    };
  
    addUser(user: Object) {
        this.setState({ user });
    }
  
    removeUser() {
        this.setState({ user: null });
    }
}

export default AppContainer;