import React, {Component} from "react";
import Modal from "../components/modal/Modal";

const errorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res=> res, error => {
        this.setState({error: error})
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);

    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    };

    render() {
      return (
        <>
          <Modal
            clicked={this.errorConfirmedHandler}
            show={this.state.error}>
            {this.state.error ? this.state.error.response.data.message : <p>Error inesperado</p>}
          </Modal>
          <WrappedComponent {...this.props}/>
        </>
      );
    }
  }
};

export default errorHandler;