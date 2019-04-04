import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {

   renderInput = (formProps) => {
      const { label, input, meta } = formProps;
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
         <div className={className}>
            <label>{label}</label>
            <input {...input}/>
            {this.renderError(meta)}
         </div>
      );
   }

   renderError = ({ error, touched }) => {
      if (touched && error) {
         return <div>{error}</div>
      }
   }

   onSubmit = (formValues) => {
      //redux-form handles the event.preventDefault();
      this.props.createStream(formValues);
   }

  render() {
     const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
         <Field 
            name="title" 
            component={this.renderInput} 
            label="Enter Title"
         />
         <Field 
            name="description" 
            component={this.renderInput} 
            label="Enter Description"

         />
         <button className="ui button primary" type="submit" >Submit</button>
      </form>
    );
  }
}

const validateForm = (formValues) => {
   const { title, description } = formValues;
   const errors = {}

   if (!title) {
      errors.title = "You must enter a title";
   }

   if (!description) {
      errors.description = "You must enter a description";
   }

   return errors;
};


const wrappedForm = reduxForm({
   form: 'streamCreate',
   validate: validateForm,
})(StreamCreate);

export default connect(null, { createStream })(wrappedForm);

